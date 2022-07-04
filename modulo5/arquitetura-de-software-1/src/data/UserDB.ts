import UserModel from '../model/UserModel'
import { user } from '../types/user';
import { BaseDB } from './BaseDB'

const tableName = "user"

export default class UserDB extends BaseDB {

    public async signup(user: UserModel) {
        await BaseDB.connection
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })
            .into(tableName);
    };

    public async getUserByEmail(email: string): Promise<user[]> {

        const user: user[] = await BaseDB.connection
            .select("*")
            .where({ email })
            .from(tableName)

        return user
    }

    public async getUser(): Promise<user[]> {

        const user: user[] = await BaseDB.connection
            .select("*")
            .from(tableName)


        return user

    }
} 