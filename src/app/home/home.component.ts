import { Price } from './../price/price.model';
import { Product } from './../product/product.model';
import { ProductService } from './../product/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = true;
  listProducts:Product[] = [];
  cheapperProduct:Product = new Product();

  @ViewChild('mycarousel', {static : true}) carousel: NgbCarousel;


  constructor(
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.cheapperProduct = new Product();
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.setListProducts(data);
      },
      (error) => {
        console.log('Error: ' + error);
    });

    
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
  /*  console.log(slideEvent.source);
    console.log(NgbSlideEventSource.ARROW_LEFT);
    console.log(slideEvent.paused);
    console.log(NgbSlideEventSource.INDICATOR);
    console.log(NgbSlideEventSource.ARROW_RIGHT);*/
  }

  getImage(product:Product){
    
    //this.cheapperProduct
    var img = 'http://localhost:4301/assets/'+product.code.toString()+'.jfif';
    console.log("this.getImage", product,img, product.imageUrl);
    return img;
  }


}
