import { ProductDataBase } from "../data/ProductDataBase";
import { GetProductDTO } from "../model/GetProductDTO";
import { InsertProductDTO } from "../model/InsertProductDTO";
import { PostProductDTO } from "../model/PostProductDTO";
import { ProductType } from "../model/ProductType";
import { TagType } from "../model/TagType";
import IdGenerator from "../services/IdGenerator";

export class ProductBusiness {

    constructor(
        private productData: ProductDataBase,
        private idGenerator: IdGenerator
    ) { }

    public postProduct = async (newProduct: PostProductDTO): Promise<void> => {
        try {
            const { name, price, tags } = newProduct

            if (!name || !price || tags.length === 0) {
                throw new Error("All fields are required.");
            }

            if (typeof name !== "string") {
                throw new Error("'name' must be a string.");
            }

            if (typeof price !== "number") {
                throw new Error("'price' must be a number.");
            }

            if (!(Array.isArray(tags))) {
                throw new Error("'tags' must be a string array.");
            }

            const checkTags = tags.findIndex((tag:any)=>{
                return (typeof tag !== "string")
            }) 

            if(checkTags>-1){
                throw new Error("'tags' must be a string array.");
            }

            const id = this.idGenerator.idGenerator()

            const productTags: TagType[] = tags.map((tag: string) => {
                return { productId: id, name: tag }
            })

            const product: InsertProductDTO = {
                product: {
                    id,
                    name,
                    price
                },
                productTags
            }

            await this.productData.insertProduct(product)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public getProducts = async (searchOptions: GetProductDTO): Promise<ProductType[]> => {
        try {
            const { id, name, tag } = searchOptions

            if (!id && !name && !tag) {
                throw new Error("At least one of the fields is mandatory: 'id', 'name', 'tag'.");
            }

            const newId = id === undefined ? "undefined" : id
            const newName = name === undefined ? "undefined" : name
            const newTag = tag === undefined ? "undefined" : tag

            const products: ProductType[] = await this.productData.selectProduct(newId, newName, newTag)

            return products

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}  