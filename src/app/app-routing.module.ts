import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent,
  children: [
    {
      path: 'product',
      component: ProductComponent,
    },
  ],
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
