export enum PostType {
    NORMAL= "NORMAL",
    EVENT = "EVENT"
}

export type post = {
    id: string,
    photo: string,
    description: string,
    createdAt: string,
    type: PostType,
    userId: string
}

export interface postInputDTO {
    photo: string,
    description: string,
    createdAt: string,
    type: PostType,
    token: string
}

export interface getPostByIdDTO{
    token:string,
    id: string
}