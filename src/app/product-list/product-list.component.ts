import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 

  products:Product[];
  constructor(private productService:ProductService , private router:Router) { }

  ngOnInit(): void {
    
    this.getProducts();
  }
private getProducts(){
  this.productService.getProductsList().subscribe(data =>{
    this.products = data;

  })
}




ProductDetails(id:number){
this.router.navigate(['product-details', id]);
}

filteredStatus='';
}
