import { app } from "./app";
import { productRouter } from "../routes/productRouter";

app.use('/product', productRouter)
