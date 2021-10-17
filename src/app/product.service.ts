import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURl1 = "http://localhost:8111/products"
  constructor(private http:HttpClient) { }
  getProductsList():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseURl1}`);
  }
  createProduct(product:Product):Observable<Object>{
    return this.http.post(`${this.baseURl1}`,product);
  }

getProductById(id:number):Observable<Product>{
  return this.http.get<Product>(`${this.baseURl1}/${id}`);
}
updateProducts(id:number, product:Product): Observable<Object>{
  return this.http.put(`${this.baseURl1}/${id}`, product);
}

deleteProducts(id: number): Observable<Object>{
  return this.http.delete(`${this.baseURl1}/${id}`);
}


}