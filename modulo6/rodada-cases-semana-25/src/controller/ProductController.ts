import { Request, Response } from "express"
import { ProductBusiness } from "../business/ProductBusiness"
import { PostProductDTO } from "../model/PostProductDTO"

export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ){}

    public postProduct = async (req: Request, res: Response) => {
        try {
            const { name, price, tags } = req.body

            const product: PostProductDTO = { name, price, tags }

            await this.productBusiness.postProduct(product)

            res.status(200).send({ message: "Product successfully registered." })

        } catch (error: any) {
            res.status(400).send({ error: error.message })
        }
    }

    public getProducts = async (req: Request, res: Response) => {
        try {
            const id = req.query.id as string
            const name = req.query.name as string
            const tag = req.query.tag as string

            const searchOptions = { id, name, tag }

            const products = await this.productBusiness.getProducts(searchOptions)

            res.status(200).send({ products })

        } catch (error: any) {
            res.status(400).send({ error: error.message })
        }
    }
}  