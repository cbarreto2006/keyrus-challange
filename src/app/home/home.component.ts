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

  @ViewChild('mycarousel', {static : true}) carousel: NgbCarousel;


  constructor(
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      (data) => {
        console.log("data", data);
        this.setListProducts(data);
      },
      (error) => {
        console.log('Error: ' + error);
    });
  }

  setListProducts(data:any){
    console.log("tamanho",  data.products, data.products.length);
    // test return empty
    if(data.products===undefined || data.products.length==0){
       return this.listProducts = [];
    }

 
    // load return 
    this.listProducts = data.products.filter(function(element){
       return new Product(element);
    });
    console.log("carregou",this.listProducts[0]);
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


}
