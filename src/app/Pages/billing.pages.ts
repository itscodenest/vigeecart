import { Component } from '@angular/core';
import { BillingFormModel } from '../Model/billingformfields.model';


@Component({
  template:`
  <app-top-bar></app-top-bar>
  <mat-toolbar>
  </mat-toolbar>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 order-md-1">
        <div class="card">
          <h4 class="card-header bg-info bg-light">Billing Information</h4>
          <div class="card-body">
                <billing-dir 
              [billingFields]="billing.data"
              ></billing-dir>
          </div>
        </div>      
      </div>
      <div class="col-md-4 order-md-2 mb-4">
      <billing-cart
       *ngIf="cartflag"
      ></billing-cart>              
      </div>  

    </div>
  
  </div>
  `,
  styles : [`
  .card-header{
    background-color: #579eaf38!important;
  }
  `]
})

export class BillingPage{
public cartflag:boolean= false;
  constructor(
    public billing:BillingFormModel
  ){

  }

  ngOnInit(){
    this.ref();
  }
  ref(){
    this.cartflag = false;
    setTimeout( () => {
        this.cartflag = true;
    }, 10 )
  }
  
}