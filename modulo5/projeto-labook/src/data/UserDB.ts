import { Request, Response } from "express";
import { user } from "../model/user";
import UserModel from "../model/UserModel";
import { BaseDB } from "./BaseDB";

const tableName = "labook_user"

export class UserDB extends BaseDB {

    public signup = async (user: UserModel): Promise<void> => {
        await BaseDB.connection
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            })
            .into(tableName);
    }

    public getUserByEmail = async (email: string): Promise<user[]> => {
        const user: user[] = await BaseDB.connection
            .select("*")
            .where({ email })
            .from(tableName)

        return user
    }

    public getUserById = async (id: string): Promise<user[]> => {
        const user: user[] = await BaseDB.connection
            .select("*")
            .where({ id })
            .from(tableName)

        return user
    }
}