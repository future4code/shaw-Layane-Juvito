import express from 'express'
import { ProductBusiness } from '../business/ProductBusiness';
import { ProductController } from '../controller/ProductController';
import { ProductDataBase } from '../data/ProductDataBase';
import IdGenerator from '../services/IdGenerator';

const productController = new ProductController(
    new ProductBusiness(
        new ProductDataBase(),
        new IdGenerator()
    )
)

export const productRouter = express.Router()

productRouter.get('', productController.getProducts)
productRouter.post('', productController.postProduct)