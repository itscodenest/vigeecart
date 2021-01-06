import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsModel } from "../Model/products.model";
import { CartService } from "../Service/cart.service";
import { StorageService } from "../Service/storage.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  selector: string = ".main-panel";
  id: string;
  public cartflag:boolean= false;
  public sortBy: string = "";
  public sortOption: string = "Price|htl";
  public searchText: string = "";
  sortedProduct = this.products;
  isFullListDisplayed: boolean;
  page = 0;
  @Output() refresh:EventEmitter<string> = new EventEmitter();
  //scroll
  public noOfItemsToShowInitially: number = 12;
  private itemsToLoad: number = 12;
  itemsToShow; 
  constructor(
    public products: ProductsModel,
    private route: ActivatedRoute,
    private router: Router, public storage: StorageService,
    public cart: CartService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.queryParamMap.get("sortType");
    this.ref();
   
    //sort by filter logic

    if (this.id == "lowtohigh") {
      this.sortedProduct.data.sort(function(a, b) {
        return parseFloat(a.Price) - parseFloat(b.Price);
      });
      this.sortOption = "Price|lth";
      this.router.navigate(["/list"], {
        queryParams: { sortType: "lowtohigh" }
      });
    } else {
      this.sortedProduct.data.sort(function(a, b) {
        return parseFloat(b.Price) - parseFloat(a.Price);
      });
      this.sortOption = "Price|htl";
      this.router.navigate(["/list"], {
        queryParams: { sortType: "hightolow" }
      });
    }
    this.getData({pageIndex: this.page, pageSize: this.itemsToLoad});
    
  }
 

  //change url based on filter
  dataChanged() {
    if (this.sortOption == "Price|lth") {
      this.sortedProduct.data.sort(function(a, b) {
        return parseFloat(a.Price) - parseFloat(b.Price);
      });
      this.router.navigate(["/list"], {
        queryParams: { sortType: "lowtohigh" }
      });
    } else {
      this.sortedProduct.data.sort(function(a, b) {
        return parseFloat(b.Price) - parseFloat(a.Price);
      });
      this.router.navigate(["/list"], {
        queryParams: { sortType: "hightolow" }
      });
    }
  }

  
  //pignator
  getData(obj) {
    let index=0,
        startingIndex=obj.pageIndex * obj.pageSize,
        endingIndex=startingIndex + obj.pageSize;

        this.itemsToShow  = this.sortedProduct.data.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }
//add to cart
addToCart(productId,productQty){  
 
  this.cart.allItems = this.products.data;
  this.cart.addToCart(productId,productQty,'');
  this.refresh.emit('true');
  
}
ref(){
  this.cartflag = false;
  setTimeout( () => {
      this.cartflag = true;
  }, 10 )
}

}
