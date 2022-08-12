import React from "react"
import { UserDataDTO } from "./UserDataDTO"

export interface UserInfoProps{
    userData: UserDataDTO
    setShowInfo: React.Dispatch<React.SetStateAction<string>>
    loading: boolean
    showInfo: string
    renderInfos: () => JSX.Element[] | undefined
}