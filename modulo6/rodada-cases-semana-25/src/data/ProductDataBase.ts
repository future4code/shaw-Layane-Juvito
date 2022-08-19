import { InsertProductDTO } from "../model/InsertProductDTO";
import { ProductType } from "../model/ProductType";
import { BaseDB } from "./BaseDB";


export class ProductDataBase extends BaseDB {
    private static productTable = 'products'
    private static tagTable = 'products_tags'

    public insertProduct = async (newProduct: InsertProductDTO): Promise<void> => {
        try {
            await BaseDB.connection(ProductDataBase.productTable)
                .insert(newProduct.product)
            for (const tag of newProduct.productTags) {
                await BaseDB.connection(ProductDataBase.tagTable)
                    .insert({
                        tag: tag.name,
                        productId: tag.productId
                    })
            }

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public selectProduct = async (id: string, name: string, tag: string): Promise<ProductType[]> => {
        try {
            const result: ProductType[] = await BaseDB.connection(ProductDataBase.productTable)
                .select(`${ProductDataBase.productTable}.id as id`, `${ProductDataBase.productTable}.name as name`, `${ProductDataBase.productTable}.price as price`)
                .join(`${ProductDataBase.tagTable}`, `${ProductDataBase.tagTable}.productId`, `${ProductDataBase.productTable}.id`)
                .where(`${ProductDataBase.productTable}.id`, id)
                .orWhere(`${ProductDataBase.productTable}.name`, "like", `%${name}%`)
                .orWhere(`${ProductDataBase.tagTable}.tag`, "like", `%${tag}%`)

            const uniqueResult: ProductType[] = []

            result.forEach((elem: ProductType) => {

                const duplicated = uniqueResult.findIndex(uniqueItem => {
                    return elem.id == uniqueItem.id;
                })

                if(duplicated === -1){
                    uniqueResult.push(elem)
                }
            })

            return uniqueResult

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}