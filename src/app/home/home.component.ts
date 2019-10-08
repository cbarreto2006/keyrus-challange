import { Product } from './../product/product.model';
import { ProductService } from './../product/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbSlideEvent, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = true;
  listProducts:Product[] = [];
  cheapperProduct:Product = new Product();

  @ViewChild('mycarousel', {static : true}) carousel: NgbCarousel;

  snapshotParam = "initial value";
  subscribedParam = "initial value";

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.cheapperProduct = new Product();
    this.getAllProducts();
    this.snapshotParam = this.route.snapshot.paramMap.get("id");

    // Subscribed
    this.route.paramMap.subscribe(params => {
      this.subscribedParam = params.get("id");
    });
  }

  getAllProducts(){
    let listProd = null;
    this.productService.getAllProducts().subscribe(
      (data) => {
        listProd = data;
        this.setListProducts(data);
        
      },
      (error) => {
        console.log('Error: ' + error);
    });
    return listProd;
  }

  setListProducts(data:any){
    // test return empty
    if(data.products===undefined || data.products.length==0){
       return this.listProducts = [];
    }

    // load return 
    var product:Product;
    var productCheap:Product = new Product();
    var i=0;
    this.listProducts = data.products.filter(function(element){
      product = new Product();
      product.setProduct(element);
      if (i==0 || element.price.value < productCheap.price['value']  ){
         productCheap.setProduct(element);      
         i++;
      }
       return product;
    });
    this.cheapperProduct = productCheap;
    return this.listProducts;

  }

  startCarousel() {
    this.carousel.cycle();
  }

  pauseCarousel() {
    this.carousel.pause();
  }

  moveNext() {
    this.carousel.next();
  }

  getPrev() {
    this.carousel.prev();
  }

  goToSlide(slide) {
    this.carousel.select(slide);
  }

  onSlide(slideEvent: NgbSlideEvent) {
  }

  getImage(product:Product){
    var img = 'http://localhost:4301/assets/'+product.code.toString()+'.jfif';
    return img;
  }

  getImageBanner(product:Product){
    var img = 'http://localhost:4301/assets/'+product.code.toString()+'A.png';
    return img;
  }

  goDetailProduct(product:Product){
    this.router.navigate(['product/'+product.code], {relativeTo: this.route});
  }

  isToSell(product:Product){
    return product.stock.stockLevelStatus=='inStock';
  }

  buyProduct(product:Product){
    //todo
  }

}
