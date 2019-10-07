export class Price{
    currencyIso:string;
    formattedValue:string;
    priceType:string;
    value:number;

    constructor(currencyIso:string, formattedValue:string, priceType:string, value:number){
        this.currencyIso = currencyIso;
        this.formattedValue = formattedValue;
        this.priceType = priceType;
        this.value = value;
    }

}