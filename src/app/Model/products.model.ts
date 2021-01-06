import { Injectable } from "@angular/core";
//import * as sampledata from "../Data/sampleData.json";
import * as sampledata from "../Data/sampleData.json";

@Injectable()
export class ProductsModel {
  public data: any = sampledata["default"];
  ngOnInit() {
    
  }
}
