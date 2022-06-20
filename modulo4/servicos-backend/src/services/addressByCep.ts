import { Address } from '../types'
import axios from 'axios'

export const addressByCEP = async (cep: string): Promise<Address|undefined> => {
    try {
        
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    
        return {
            street:result.data.logradouro,
            borough: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf
        }
    } catch (error) {
        return undefined
    }
}