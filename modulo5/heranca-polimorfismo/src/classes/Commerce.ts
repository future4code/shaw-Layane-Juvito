import Place from './Place'

export default class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }

    public getFloorQuantity():number {
        return this.floorsQuantity
    }
}