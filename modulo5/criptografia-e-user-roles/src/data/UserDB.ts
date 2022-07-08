
import UserModel from '../model/UserModel';
import { User } from '../types';
import { BaseDB } from './BaseDB'

const tableName = "user"

export default class UserDB extends BaseDB {

  public async createUser(user: UserModel) {
    await BaseDB.connection
      .insert({
        id: user.getId(),
        email: user.getEmail(),
        password: user.getPassword()
      })
      .into(tableName);
  };

  public async getUserByEmail(email: string): Promise<User | null> {

    const user: User[] = await BaseDB.connection
      .select("*")
      .where({ email })
      .from(tableName)

    if (user.length) {
      return {
        id: user[0].id,
        email: user[0].email,
        password: user[0].password,
        role: user[0].role
      }
    } else {
      return null
    }
  }

  public async getUserById(id: string): Promise<User | null> {

    const user: User[] = await BaseDB.connection
      .select("*")
      .where({ id })
      .from(tableName)

    if (user.length) {
      return {
        id: user[0].id,
        email: user[0].email,
        password: user[0].password,
        role: user[0].role
      }
    } else {
      return null
    }
  }
}