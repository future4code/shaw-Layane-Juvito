import BaseDB from './BaseDB'
import UserModel from '../model/UserModel'


export default class UserDB extends BaseDB {

    public async createUser (user: UserModel) {
        await BaseDB.connection("cook_user")
        .insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword()
        })
    }

    public async getUserByEmail (email: string) {
        const result = await BaseDB.connection("cook_user")
       .select("email")
       .where({email})

       return result
    }
}