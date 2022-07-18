import { friendships, user } from "../model/user";
import UserModel from "../model/UserModel";
import { BaseDB } from "./BaseDB";

const tableName = "labook_users"

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

    public getUser = async (): Promise<user[]> => {
        const user: user[] = await BaseDB.connection
            .select("*")
            .from(tableName)

        return user
    }

    public getUserByEmail = async (email: string): Promise<user[]> => {
        const user: user[] = await BaseDB.connection
            .select("*")
            .from(tableName)
            .where({ email })

        return user
    }

    public getUserById = async (id: string): Promise<user[]> => {
        const user: user[] = await BaseDB.connection
            .select("*")
            .from(tableName)
            .where({ id })

        return user
    }

    public requestFriendship = async (id: string, friendId:string): Promise<void> => {
        await BaseDB.connection
            .insert({
                user_id: id,
                friend_id: friendId
            })
            .into("labook_friendship");
    }

    public checkFriends = async (user_id: string, friend_id: string): Promise<friendships[]> => {
        const friendship:friendships[] = await BaseDB.connection
            .select("user_id as userId", "friend_id as friendId")
            .from("labook_friendship")
            .where({user_id})
            .andWhere({friend_id});

        return friendship
    }

    public deleteFriendship = async (user_id: string, friend_id: string): Promise<void> => {
        await BaseDB.connection
            .delete()
            .where({user_id})
            .andWhere({friend_id})
            .into("labook_friendship");
    }
}