import { ProductService } from './product.service';
import { Product } from './product.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  id:number;
  product:Product = new Product();
  htmlStr: string = '<strong>The Tortoise</strong> &amp; the Hare';

  constructor( private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
      this.productService.getProductById(this.id).subscribe(
        (data) => {
          this.product.setProduct(data);
          this.htmlStr = this.product.description;
        },
        (error) => {
          console.log('Error: ' + error);
      });
  
    })
  }

  goHome(){
    console.log("redirect home");
    this.router.navigate(['/'], {relativeTo: this.route});
  }

  buyProduct(product:Product){
    //todo
  }

}
