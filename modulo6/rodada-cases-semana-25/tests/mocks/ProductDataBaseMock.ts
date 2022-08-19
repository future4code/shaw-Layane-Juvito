import { BaseDB } from "../../src/data/BaseDB"
import { InsertProductDTO } from "../../src/model/InsertProductDTO"
import { ProductType } from "../../src/model/ProductType"
import { dataMock1, dataMock2, dataMock3 } from "./DataMock"

export class ProductDataBaseMock extends BaseDB{

    public insertProduct = async (newProduct: InsertProductDTO): Promise<void> => { }


    public selectProduct = async (id: string, name: string, tag: string): Promise<ProductType[]> => {
        if (id !== "undefined") {
            switch (id) {
                case "id_mock1":
                    return [dataMock1]
                case "id_mock2":
                    return [dataMock2]
                case "id_mock3":
                    return [dataMock3]
                default:
                    return []
            }
        }

        if (name !== "undefined") {
            switch (name) {
                case "mock":
                    return [dataMock1, dataMock2, dataMock3]
                case "mock2":
                    return [dataMock2]
                case "mock3":
                    return [dataMock3]
                default:
                    return []
            }
        }

        if (tag !== "undefined") {
            switch (tag) {
                case "tag1":
                    return [dataMock1, dataMock3]
                case "tag2":
                    return [dataMock1, dataMock2]
                case "tag3":
                    return [dataMock2, dataMock3]
                case "tag4":
                    return [dataMock1]
                case "tag5":
                    return [dataMock2]
                case "tag6":
                    return [dataMock1]
                default:
                    return []
            }
        }

        return []
    }

}