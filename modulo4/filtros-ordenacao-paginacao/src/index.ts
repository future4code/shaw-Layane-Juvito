import { app } from "./app";
import { filterByType } from "./endpoints/filterByType";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getByAll } from "./endpoints/getByAll";
import { orderBy } from "./endpoints/orderBy";
import { pagination } from "./endpoints/pagination";

app.get("/users", getAllUsers)
app.get("/users/ordination", orderBy)
app.get("/users/pagination", pagination)
app.get("/users/:type", filterByType)
app.get("/user", getByAll)