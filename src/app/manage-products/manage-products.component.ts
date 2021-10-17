import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductComponent implements OnInit {
  products:Product[];

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
  }
private getProducts(){
  this.productService.getProductsList().subscribe(data =>{
    this.products = data;
  })
}

updateProduct(id:number){
this.router.navigate(['update-product', id]);

}

deleteProduct(id:number){
this.productService.deleteProducts(id).subscribe(data=>{
  console.log(data);
  this.getProducts();
})
}

}
