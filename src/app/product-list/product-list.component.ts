import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  /**
   *  @input productList - the Product[] passed to us */

  @Input() productList: Product[];

  currentProduct;

  /**
   @output onProductSelected - outputs the current Product whenever a new Product is selected */

   @Output() onProductSelected : EventEmitter<Product>;

   clicked(product:Product){
    this.currentProduct  = product;
    this.onProductSelected.emit(product);
   }
   isSelected(product:Product){
    if(!product || !this.currentProduct){
      return false;
    }
    return product.sku === this.currentProduct.sku;
   }


  constructor() {
    this.onProductSelected = new EventEmitter();
   }

  ngOnInit() { }
}
