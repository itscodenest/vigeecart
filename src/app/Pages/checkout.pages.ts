import { Component } from '@angular/core';
import { ProductsModel } from '../Model/products.model';

import { CartService } from '../Service/cart.service';


@Component({
  template:`
  <app-top-bar></app-top-bar>
  <mat-toolbar>
  </mat-toolbar>
  <div class="container mt-1">
   
     <checkout-dir 
     [allProductList]="products.data"
     ></checkout-dir>
  </div>
`
})

export class CheckoutPage{
  public cartflag:boolean= false;
  constructor(   
    public cart: CartService,
    public products: ProductsModel

  ){

  }

  ngOnInit(){
    this.ref();
  }
  ref(){
    this.cartflag = false;
    setTimeout( () => {
        this.cartflag = true;
    }, 1000 )
  }

  
}