import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private REST_API_SERVER = "http://localhost:4301/api/";
  constructor(private http: HttpClient) { }

  public getAllProducts(){
    console.log(this.REST_API_SERVER+'products');
    return this.http.get(this.REST_API_SERVER+'products');
  }

  public getProductById(code:number){
    return this.http.get(this.REST_API_SERVER+code);
  }
}