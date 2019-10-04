export class Stock{
    stockLevel:number;
    stockLevelStatus:string;
    constructor(stockLevel:number, stockLevelStatus:string ){
        this.stockLevel = stockLevel;
        this.stockLevelStatus = stockLevelStatus;
    }
}