import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth.guard";
import { HomeComponent } from "./home/home.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { FilterPipe } from "./pipe/searchText";
import { ProductsModel } from "./Model/products.model";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material/select";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatPaginatorModule} from '@angular/material/paginator';
import { SortPipe } from "./pipe/sort.pipe";
import { StorageService } from "./Service/storage.service";
import { CartService } from "./Service/cart.service";
import { dirConfig } from "./dir.config";
import { BillingDir } from "./Directives/billing.dir";
import { CheckOutDir } from "./Directives/checkout.dir";
import { CheckoutPage } from "./Pages/checkout.pages";
import { BillingPage } from "./Pages/billing.pages";
import { BillingFormModel } from "./Model/billingformfields.model";
import { CompanyDetailsModel } from "./model/companydetails.model";



@NgModule({
  imports: [
    BrowserModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatListModule,
    MatToolbarModule,

    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forRoot([
      { path: "", component: LoginComponent },
      { path: "list", component: HomeComponent, canActivate: [AuthGuard] },
      { path: "feedback", component: FeedbackComponent },
      { path : 'billing' , component : BillingPage },
      { path : 'checkout' , component : CheckoutPage },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    HomeComponent,
    FeedbackComponent,
    FilterPipe,
    SortPipe,CheckoutPage,BillingPage,
    dirConfig
  ],
  bootstrap: [AppComponent],
  providers: [ProductsModel,BillingFormModel,CompanyDetailsModel, StorageService,CartService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
