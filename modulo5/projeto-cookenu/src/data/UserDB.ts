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
       .select("*")
       .where({email})

       return result
    }

    public async getUserById (id: string) {
        const result = await BaseDB.connection("cook_user")
       .select("*")
       .where({id})

       return result
    }

    public async followUser ( userId:string, userToFollowId:string){
        await BaseDB.connection("follow")
        .insert({
            user_id: userId,
            followed_user_id: userToFollowId
        })
    }

    public async unfollowUser ( userId:string, userToUnollowId:string){
        await BaseDB.connection("follow")
        .delete("*")
        .where({user_id:userId, followed_user_id: userToUnollowId})
    }
}