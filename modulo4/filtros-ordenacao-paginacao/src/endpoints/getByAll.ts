import { Request, Response } from "express"
import { selectAllUserComplete, selectAllUsersNoFilter } from "./queries"

export const getByAll = async (req: Request, res: Response): Promise<void> => {

    try {
        let { name, sort, order, type } = req.query
        let page = Number(req.query.page)

        let users = []

        if (page < 1 || isNaN(page)) {
            page = 1
        }
        if (order !== 'asc' && order !== 'desc') {
            order = 'desc'
        }

        if (sort !== 'email' && sort !== 'type') {
            sort = 'name'
        }

        if (!name && !type) {
            users = await selectAllUsersNoFilter(page, sort, order)
        } else {
            users = await selectAllUserComplete(page, sort, order, name as string, type as string)
        }

        if (!users.length) {
            res.statusCode = 404
            throw new Error("User not found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}


