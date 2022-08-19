import { ProductType } from "./ProductType";
import { TagType } from "./TagType";

export interface InsertProductDTO{
    product: ProductType
    productTags: TagType[]
}