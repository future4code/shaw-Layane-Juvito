import { app } from "./app"
import { countGender } from "./endpoints/countGender"
import { deleteActor } from "./endpoints/deleteActor"
import { getActorById } from "./endpoints/getActorById"
import { getActorByName } from "./endpoints/getActorByName"
import { getSalaryByGender } from "./endpoints/getSalaryByGender"
import { updateSalary } from "./endpoints/updateSalary"

app.get('/actors', getActorByName)
app.get('/actors/:id', getActorById)
app.get('/actors/:gender', countGender)
app.get('/salary', getSalaryByGender)
app.put('/actors/:id', updateSalary)
app.delete('/actors/:id', deleteActor)