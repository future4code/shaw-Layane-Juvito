import axios from 'axios'
import { baseUrl } from '../constants/apiData'

export const GetRequest = async (input) => {
    try {
       const lotteries =  await axios.get(baseUrl + input.endpoint)
       input.setData(lotteries.data)
    } catch (error) {
        input.setMessageError(error.message)
    }
}