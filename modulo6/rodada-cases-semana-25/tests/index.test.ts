import { ProductBusiness } from "../src/business/ProductBusiness"
import { dataMock1, dataMock2, dataMock3 } from "./mocks/DataMock"
import IdGeneratorMock from "./mocks/IdGeneratorMock"
import { ProductDataBaseMock } from "./mocks/ProductDataBaseMock"

const productBusinessMock = new ProductBusiness(
    new ProductDataBaseMock,
    new IdGeneratorMock
)

describe("Product Register Tests", () => {
    test("Error when not filling all the fields", async () => {
        expect.assertions(1)
        try {
            const product: any = {
                name: "Homem de Ferro",
                tags: ["brinquedo"]
            }
            await productBusinessMock.postProduct(product)
        } catch (error: any) {
            expect(error.message).toBe("All fields are required.")
        }
    })

    test("Error when filling the field 'name' whith the wrong type", async () => {
        expect.assertions(1)
        try {
            const product: any = {
                name: ["Homem de Ferro"],
                price: 54.8,
                tags: ["brinquedo"]
            }

            await productBusinessMock.postProduct(product)

        } catch (error: any) {
            expect(error.message).toBe("'name' must be a string.")
        }
    })

    test("Error when filling the field 'price' whith the wrong type", async () => {
        expect.assertions(1)
        try {
            const product: any = {
                name: "Homem de Ferro",
                price: "56.8",
                tags: ["brinquedo"]
            }
            await productBusinessMock.postProduct(product)
        } catch (error: any) {
            expect(error.message).toBe("'price' must be a number.")
        }
    })

    test("Error when the field 'tags' is not an array", async () => {
        expect.assertions(1)
        try {
            const product: any = {
                name: "Homem de Ferro",
                price: 56.8,
                tags: "brinquedo"
            }
            await productBusinessMock.postProduct(product)
        } catch (error: any) {
            expect(error.message).toBe("'tags' must be a string array.")
        }
    })

    test("Error when the field 'tags' is not an array of strings", async () => {
        expect.assertions(1)
        try {
            const product: any = {
                name: "Homem de Ferro",
                price: 56.8,
                tags: ["brinquedo", 3, 5]
            }
            await productBusinessMock.postProduct(product)
        } catch (error: any) {
            expect(error.message).toBe("'tags' must be a string array.")
        }
    })

    test("Success Case", async () => {
        expect.assertions(0)
        try {
            const product: any = {
                name: "Homem de Ferro",
                price: 56.8,
                tags: ["brinquedo"]
            }
            await productBusinessMock.postProduct(product)
        } catch (error: any) {

        }
    })
})

describe("Get Data Test", () => {
    test("Error when not sending any query params", async () => {
        expect.assertions(1)
        try {
            const searchOptions: any = {
            }
            const data = await productBusinessMock.getProducts(searchOptions)
            expect(data).toBe([dataMock1, dataMock2, dataMock3])
        } catch (error: any) {
            expect(error.message).toBe("At least one of the fields is mandatory: 'id', 'name', 'tag'.")
        }
    })

    test("Success Case - when search is not found", async () => {
        expect.assertions(1)
        try {
            const searchOptions: any = {
                name: "product"
            }
            const data = await productBusinessMock.getProducts(searchOptions)
            expect(data).toBe([])
        } catch (error: any) {
        }
    })

    test("Success Case - get by name", async () => {
        expect.assertions(1)
        try {
            const searchOptions: any = {
                name: "mock"
            }
            const data = await productBusinessMock.getProducts(searchOptions)
            expect(data).toBe([dataMock1, dataMock2, dataMock3])
        } catch (error: any) {

        }
    })

    test("Success Case - get by tag", async () => {
        expect.assertions(1)
        try {
            const searchOptions: any = {
                tag: "tag1"
            }
            const data = await productBusinessMock.getProducts(searchOptions)
            expect(data).toBe([dataMock1, dataMock3])
        } catch (error: any) {

        }
    })
    test("Success Case - get by id", async () => {
        expect.assertions(1)
        try {
            const searchOptions: any = {
                id: "id_mock3"
            }
            const data = await productBusinessMock.getProducts(searchOptions)
            expect(data).toBe([dataMock3])
        } catch (error: any) {

        }
    })
})
