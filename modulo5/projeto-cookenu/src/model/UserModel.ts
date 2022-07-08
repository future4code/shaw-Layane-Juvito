export default class UserModel {
    private recipes: string[]

    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
    ) { 
        this.recipes = []
    }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getEmail() {
        return this.email
    }

    getPassword() {
        return this.password
    }
    
    getRecipe() {
        return this.recipes
    }
}