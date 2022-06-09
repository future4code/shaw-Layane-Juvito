import { app } from "./app"
import { countGender } from "./endpoints/countGender"
import { createMovie } from "./endpoints/createMovie"
import { deleteActor } from "./endpoints/deleteActor"
import { getActorById } from "./endpoints/getActorById"
import { getActorByName } from "./endpoints/getActorByName"
import { getAllMovies } from "./endpoints/getAllMovies"
import { getSalaryByGender } from "./endpoints/getSalaryByGender"
import { searchMovies } from "./endpoints/searchMovies"
import { updateSalary } from "./endpoints/updateSalary"

app.get('/actors', getActorByName)
app.get('/actors/:id', getActorById)
app.get('/actors/:gender', countGender)
app.get('/salary', getSalaryByGender)
app.put('/actors/:id', updateSalary)
app.delete('/actors/:id', deleteActor)

// desafios

app.get('/movies/all', getAllMovies)
app.post('/movies', createMovie)
app.get('/movies', searchMovies)