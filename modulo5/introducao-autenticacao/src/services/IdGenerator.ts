import { v4 } from "uuid";

export default class IdGenerator {
    public idGenerator():string{
        return v4 ()
    }
}