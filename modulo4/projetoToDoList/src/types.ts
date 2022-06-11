export type User = {
    id:string
    name:string,
    nickname:string,
    email:string
}

export type Task = {
    taskId: string,
    title: string,
    description: string,
    limitDate: string,
    status: string,
    creatorUserId: string,
    creatorUserNickname:string
}