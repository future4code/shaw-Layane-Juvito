export default class RecipeModel {

    constructor(
        private id: string,
        private title: string,
        private description: string,
        private cratedAt: string,
        private userID: string
    ) { }

    getId() {
        return this.id
    }

    getTitle() {
        return this.title
    }

    getDescription() {
        return this.description
    }

    getCratedAt() {
        return this.cratedAt
    }
    
    getUserId() {
        return this.userID
    }
}