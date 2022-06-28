import Client from '../interfaces/Client'
import Industry from './Industry'

export default class IndustrialClient extends Industry implements Client{

    constructor(
        private industrialRegisterNumber: string,
        public residentsQuantity: number,
        public CEP: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number

    ){
        super(residentsQuantity, CEP)
    }

    public getCnpj():string{
        return this.industrialRegisterNumber
    }

    public calculateBill():number{
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
    }
}