import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseURl2 = "http://localhost:8111/payments"
  constructor(private http:HttpClient) { }

  createPayment(payment:Payment):Observable<Object>{
    return this.http.post(`${this.baseURl2}`, payment);
  }
}
