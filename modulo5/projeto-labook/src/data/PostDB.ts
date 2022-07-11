import { post } from '../model/post'
import PostModel from '../model/PostModel'
import UserModel from '../model/UserModel'
import { BaseDB } from './BaseDB'

const tableName = "labook_post"

export class PostDB extends BaseDB {

    public createPost = async (post: PostModel): Promise<void> => {
        await BaseDB.connection
            .insert({
                id: post.getId(),
                photo: post.getPhoto(),
                description: post.getDescription(),
                type: post.getType(),
                user_id: post.getUserId()
            })
            .into(tableName);
    }

    public getPostById = async (id: string): Promise<post[]> => {
        const post: post[] = await BaseDB.connection
            .select("id", "photo", "description", "created_at as createdAt", "type", "user_id as userId")
            .where({ id })
            .from(tableName)
        return post
    }

}