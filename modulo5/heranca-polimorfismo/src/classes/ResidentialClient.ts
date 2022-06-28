import Client from '../interfaces/Client'
import Residence from './Residence'

export default class ResidentialClient extends Residence implements Client{

    constructor(
        private CPF: string,
        public residentsQuantity: number,
        public CEP: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number

    ){
        super(residentsQuantity, CEP)
    }

    public getCpf():string{
        return this.CPF
    }

    public calculateBill():number{
        return this.consumedEnergy * 0.75
    }
}