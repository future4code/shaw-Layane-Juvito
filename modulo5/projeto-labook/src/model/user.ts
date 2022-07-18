export interface UserInputDTO {
   name: string,
   email: string,
   password: string
}

export interface UserLoginDTO {
   email: string,
   password: string
}

export interface RequestFriendshipDTO {
   friendId: string,
   token: string
}
export type user = {
   id: string,
   name: string,
   email: string,
   password: string
}

export type friendships = {
   userId: string,
   friendId: string
}