import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { connection } from './connection'
import { User } from './types'

export const app: Express = express();

app.use(express.json());
app.use(cors());

export const users = connection("User")

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});