import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { products } from './data'



const app = express()
app.use(cors())

app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`);
    }
})

// Resolução da atividade

// Exercício 1

app.get('/test', (req: Request, res: Response) => {
    res.send('Tudo ok por aqui ;)')
})

// Exercício 2

// criar o arquivo data.ts

type Product = {
    id: string,
    name: string,
    price: number
}

// Exercício 3 e 7

app.post('/products', (req: Request, res: Response) => {

    const { name, price } = req.body

    try {
        // Valida se as informações foram passadas no body
        if (!name || !price && price !== 0) {
            throw new Error("Campos 'name' e 'price' são obrigatórios.")
        }

        if (typeof name !== 'string') {
            throw new Error("Campo 'name' deve ser do tipo 'string'.")
        }

        if (typeof price !== 'number') {
            throw new Error("Campo 'price' deve ser do tipo 'number'.")
        }

        if (price <= 0) {
            throw new Error("Campo 'price' deve ter valor maior que 0.")
        }

        const checkProduct: number = products.findIndex(product => product.name === name)

        // valida se o produto já existe
        if (checkProduct >= 0) {
            throw new Error("Produto já cadastrado.")
        }

        const newProduct: Product = {
            id: Date.now().toString(),
            name,
            price
        }
        products.push(newProduct)

        res.status(201).send({
            reponse: {
                quantity: products.length,
                newProduct: newProduct,
                products: products
            }
        })


    } catch (error: any) {
        switch (error.message) {
            case "Campos 'name' e 'price' são obrigatórios.":
                res.status(422) // unprocessable entity
                break
            case "Campo 'name' deve ser do tipo 'string'.":
                res.status(422) // unprocessable entity
                break
            case "Campo 'price' deve ser do tipo 'number'.":
                res.status(422) // unprocessable entity
                break
            case "Campo 'price' deve ter valor maior que 0.":
                res.status(422) // unprocessable entity
                break
            case "Produto já cadastrado.":
                res.status(409) // conflict
                break
            default:
                res.status(500) // intern server error
                error.message = "Erro inesperado de servidor."
                break
        }
        res.send(error.message)
    }
})

// Exercício 4 e 10

app.get('/products', (req: Request, res: Response) => {
    const search = req.query.search
    console.log(req.query)
    try {
        if (!search) {
            res.status(201).send({
                response: {
                    quantity: products.length,
                    products: products
                }
            })
        } else {

            const productsFilter: Product[] = products.filter(product => product.name.includes(search as string))

            if (productsFilter.length === 0) {
                throw new Error("Nenhum produto encontrado.")
            }
            
            res.send({
                response: {
                    quantity: productsFilter.length,
                    products: productsFilter
                }
            })

        }
    } catch (error: any) {
        switch (error.message) {
            case "Nenhum produto encontrado.":
                res.status(404) // not found
                break
            default:
                res.status(500) // intern server error
                error.message = "Erro inesperado de servidor."
                break
        }
        res.send(error.message)
    }
})

// Exercício 5 e 8 e 11

app.put('/products/:productId', (req: Request, res: Response) => {

    try {

        const { name, price } = req.body
        const productId = req.params.productId

        if (!price && !name && price!=0) {
            throw new Error("É obrigatório enviar pelo menos um dos campos: 'name' ou 'price'.")
        }

        if (name && typeof name !== 'string') {
            throw new Error("Campo 'name' deve ser do tipo 'string'")
        }
        
        if (price && typeof price !== 'number') {
            throw new Error("Campo 'price' deve ser do tipo 'number'")
        }

        if (price <= 0) {
            throw new Error("Campo 'price' deve ter valor maior que 0")
        }

        const index: number = products.findIndex((product: Product): boolean => product.id === productId)

        if (index < 0) {
            throw new Error("Produto não encontrado.")
        }

        let attProduct: Product = {...products[index]}

        price && name ?  attProduct = {
            ...attProduct,
            name:name,
            price: price
        } : price && !name ? attProduct = {
            ...attProduct,
            price: price
        } : attProduct = {
            ...attProduct,
            name:name
        } 

        products.splice(index, 1, attProduct)

        res.send({
            response: {
                quantity: products.length,
                products: products
            }
        })

    } catch (error: any) {
        switch (error.message) {
            case "É obrigatório enviar pelo menos um dos campos: 'name' ou 'price'.":
                res.status(422) // unprocessable entity
                break
            case "Campo 'name' deve ser do tipo 'string'":
                res.status(422) // unprocessable entity
                break
            case "Campo 'price' deve ser do tipo 'number'":
                res.status(422) // unprocessable entity
                break
            case "Campo 'price' deve ter valor maior que 0":
                res.status(422) // unprocessable entity
                break
            case "Produto não encontrado.":
                res.status(404) // not found
                break
            default:
                res.status(500) // intern server error
                error.message = "Erro inesperado de servidor."
                break
        }
        res.send(error.message)
    }

})

// Exercício 6 e 9
app.delete('/products/:productId', (req: Request, res: Response) => {

    try {

        const productId = req.params.productId

        const index: number = products.findIndex((product: Product): boolean => product.id === productId)

        if (index < 0) {
            throw new Error("Produto não encontrado.")
        }

        products.splice(index, 1)

        res.send({
            response: {
                quantity: products.length,
                deletedProduct:products[index],
                products: products
            }
        })

    } catch (error:any) {
        switch (error.message) {

            case "Produto não encontrado.":
                res.status(404) // not found
                break
            default:
                res.status(500) // intern server error
                error.message = "Erro inesperado de servidor."
                break
        }
        res.send(error.message)
    }

})

