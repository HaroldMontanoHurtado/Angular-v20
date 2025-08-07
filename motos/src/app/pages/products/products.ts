import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { Productss } from '../../services/products';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Productos {
  products: Product[] = [];
  constructor(private product:Productss){
    this.products = this.product.getProducts();
  }
}
