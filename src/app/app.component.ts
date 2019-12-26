import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventorysite';
  product : Product;
  products: Product[];

  constructor(){

    // single product
    let newProduct = new Product(
      'The Hitler',
      'It is biography of Hitler',
      '../assets/images/hitler.jpg',
      ['gifts', 'paper-pack', 'books'],
      35.49);
    this.product = newProduct;

    // the array of products
    this.products = [];
    let newproducts = [ new Product('The Killer',
      'It is biography of killer',
      '../assets/images/killer.jpeg',
      ['gifts', 'paper-pack', 'books'],
      13.49),
       new Product('The Hitler',
       'It is biography of harryporter',
       '../assets/images/harryporter.jpg',
       ['gifts', 'paper-pack', 'books'],
       35.49),
      new Product('Business & Economics  ',
      'Think and Grow Rich',
      '../assets/images/think.jpeg',
      ['gifts', 'paper-pack', 'books'],
      35.49)];

    this.products = newproducts; // you can directly assign this.products = [--- all products,,...]
  }
  productWasSelected(selcetedProduct: Product): void{
    console.log("Product is selected : ",selcetedProduct);
  }

}
