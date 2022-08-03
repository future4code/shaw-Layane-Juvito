import { formRouter } from "../routes/formRouter";
import { app } from "./app";

app.use('/form', formRouter)