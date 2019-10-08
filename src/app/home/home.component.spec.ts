import { Product } from './../product/product.model';
import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('must exists 6 products list', () => {
    const listLength = 6;
    const listLengthRet = component.getAllProducts().length;
    expect(listLengthRet).toEqual(listLength);
  });

  it('teste image products', () => {
    let product = new Product();
    product.code = '123456';
    const prodImg = 'http://localhost:4301/assets/123456A.jfif';
    const bannerImg = 'http://localhost:4301/assets/123456A.png';
    const prodImgRet = component.getImage(product);
    const bannerbannerImgRet = component.getImage(product);
    expect(prodImg).toEqual(prodImgRet);
    expect(bannerImg).toEqual(bannerbannerImgRet);
  });


  it('teste cheappest product', () => {
     tick(6000);
     expect(component.cheapperProduct.price['value']).toBe(150.69);
  });



});
