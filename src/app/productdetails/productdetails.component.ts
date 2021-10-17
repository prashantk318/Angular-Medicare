import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  id:number;
  product:Product;

  constructor(private activatedRoute:ActivatedRoute, private productsService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.product = new Product();
    this.productsService.getProductById(this.id).subscribe(data =>{
      this.product = data;
    })

  }

  PaymentDetails(){
    this.router.navigate(['paymentdetails'])

  }

}
