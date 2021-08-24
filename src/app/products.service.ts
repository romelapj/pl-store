import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Product[]=[
    {
      id:"1",
      name:"Vestido en A",
      price:40000,
      description:"Con estampado floral",
      image:"assets/images/vestidoA.jpeg"
    },
    {
      id:"2",
      name:"Vestido en B",
      price:60000,
      description:"Blusa ombliguera",
      image:"assets/images/vestidoB.jpeg"
    },
    {
      id:"3",
      name:"Vestido en C",
      price:30000,
      description:"Tiras",
      image:"assets/images/vestidoC.jpeg"
    }
  ];

  constructor() { }

  getAllProducts(){
    return this.products;
  }

  getProduct(id:string){
    return this.products.find(item => id=== item.id);
  }
}
