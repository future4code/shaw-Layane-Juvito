import { v4 } from "uuid";

export default abstract class IdGenerator {
    
    public static idGenerator(): string {
        return v4()
    }
} 