import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { ProductsService } from "./../products.service";
import { Product } from './../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products?:Product[]

  constructor(
    private route:ActivatedRoute,
    private productsService:ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      const id= params.id;
      this.products=this.productsService.getAllProducts();
    });
  }

  clickProduct(id:string){
    console.log('product');
    console.log(id);
  }
}
