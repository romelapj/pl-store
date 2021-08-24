import { Component, OnInit } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:Product[]=[]

  constructor() { }

  ngOnInit(): void {
  }

  clickProduct(id:string){
    console.log('product');
    console.log(id);
  }
}
