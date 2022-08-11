import { UserDataDTO } from "./UserDataDTO";

export interface CardProps {
    userData: UserDataDTO
    getUserFollowers: () => void
    getUserFollowing: () => void
    getUserRepos: () => void

}