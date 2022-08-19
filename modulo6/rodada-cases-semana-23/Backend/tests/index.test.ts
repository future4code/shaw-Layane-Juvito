import { FormBusiness } from "../src/business/FormBusiness"
import { dataMock1, dataMock2, dataMock3 } from "./mocks/DataMock";
import { FormDataBaseMocks } from "./mocks/FormDataBaseMocks";
import IdGeneratorMocks from "./mocks/IdGeneratorMock";

const formBusinessMock = new FormBusiness(
    new FormDataBaseMocks,
    new IdGeneratorMocks
)

describe("Data Register Tests", () => {
    test("Error when not filling any of the fields", async () => {
        expect.assertions(1)
        try {
            const input = {
                firstName: "Layane",
                lastName: "",
                participation: 3
            }
            await formBusinessMock.postForm(input)
        } catch (error: any) {
            expect(error.message).toBe("All fields are required.")
        }
    })

    test("Error when filling the fields 'firstName' and 'lastName' whith wrong types", async () => {
        expect.assertions(1)
        try {
            const inputTest: any = {
                firstName: "Layane",
                lastName: 3,
                participation: 3
            }

            await formBusinessMock.postForm(inputTest)

        } catch (error: any) {
            expect(error.message).toBe("Please, check if the type of the fields 'firstName' and 'lastName' are 'string'.")
        }
    })

    test("Error when filling the field 'participation' whith wrong type", async () => {
        expect.assertions(1)
        try {
            const inputTest: any = {
                firstName: "Layane",
                lastName: "Bastos",
                participation: "4"
            }
            await formBusinessMock.postForm(inputTest)
        } catch (error: any) {
            expect(error.message).toBe("Please, check if the type of the field 'participation' is a 'number'.")
        }
    })

    test("Error when the participation field has a invalid value", async () => {
        expect.assertions(1)
        try {
            const input = {
                firstName: "Layane",
                lastName: "Bastos",
                participation: 103
            }
            await formBusinessMock.postForm(input)
        } catch (error: any) {
            expect(error.message).toBe("The participation field must be a value between 0-100.")
        }
    })

    test("Error when the participation field has a value that the maximum sum exceeds 100%", async () => {
        expect.assertions(1)
        try {
            const input = {
                firstName: "Layane",
                lastName: "Bastos",
                participation: 70
            }
            await formBusinessMock.postForm(input)
        } catch (error: any) {
            expect(error.message).toBe("The maximum sum of the participations must be 100%.")
        }
    })

    test("Success Case", async () => {
        expect.assertions(0)
        try {
            const input = {
                firstName: "Layane",
                lastName: "Bastos",
                participation: 20
            }
            await formBusinessMock.postForm(input)
        } catch (error: any) {

        }
    })
})

describe("Get Data Test", ()=>{
    test("Success Case", async() => {
        expect.assertions(1)
        try {
            const data = await formBusinessMock.getUserData()
            expect(data).toBe([dataMock1, dataMock2, dataMock3])
        } catch (error: any) {

        }
    })
})

describe("Delete Data Test", ()=>{
    test("Success Case", async() => {
        expect.assertions(0)
        try {
            await formBusinessMock.deleteData()
            
        } catch (error: any) {

        }
    })
})