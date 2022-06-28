import Client from '../interfaces/Client'
import Commerce from './Commerce'

export default class CommercialClient extends Commerce implements Client{

    constructor(
        private CNPJ: string,
        public residentsQuantity: number,
        public CEP: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number

    ){
        super(residentsQuantity, CEP)
    }

    public getCnpj():string{
        return this.CNPJ
    }

    public calculateBill():number{
        return this.consumedEnergy * 0.53
    }
}