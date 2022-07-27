import express from 'express'
import { FormBusiness } from '../business/FormBusiness'
import { FormController } from '../controller/FormController'
import { FormDataBase } from '../data/FormDataBase'
import IdGenerator from '../services/IdGenerator'

const formController = new FormController(
    new FormBusiness(
        new FormDataBase(),
        new IdGenerator()
    )
)

export const formRouter = express.Router()

formRouter.post('/send', formController.postForm)