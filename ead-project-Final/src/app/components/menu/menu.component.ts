import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products:Product[] = [];
  async ngOnInit(){
    await this.loadProducts();

  }

  constructor(private productService:ProductService) {
    
  }


   async loadProducts(){
     this.productService.getProducts().then(products=>{
      products.subscribe(products=>{
        this.products = products;
      })
    })
  }

}
