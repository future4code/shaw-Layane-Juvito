import { app } from './app'
import { postAddress } from './endpoints/postAdress'

app.post("/address", postAddress)