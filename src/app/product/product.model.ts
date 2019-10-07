import { Stock } from './../stock/stock.model';
import { Price } from './../price/price.model';
import { Category } from '../category/category.model';
import { $ } from 'protractor';

export class Product{

    availableForPickup:boolean;
    code:string;
    description:string;
    categories: Category[] = [];
    manufacturer:string;
    name:string;
    price:Price[] = [];
    stock:Stock;
    imageUrl:String;
    summary:string;

    constructor(){};

    setProduct(product:any){
        this.imageUrl =  'http://localhost:4301/assets/'+product.code.toString()+'.jfif';
        this.availableForPickup = product.availableForPickup;
        this.code = product.code;
        this.description = product.description;
        this.categories = product.categories;
        this.manufacturer = product.manufacturer;
        this.name = product.name;
        this.price = product.price;
        this.stock = product.stock;

        this.summary = product.summary;
    }
}