import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  payment:Payment = new Payment();
  constructor(private paymentService:PaymentService, private router:Router, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  savePayment(){
    this.paymentService.createPayment(this.payment).subscribe(data =>
      {
        console.log(data);
        this.goToPaymentList();
      },(error) =>{

        console.log(error);

        this.snack.open('something went wrong', '',{
          duration:3000,
          verticalPosition:'top'
        })
        //alert("something went wrong")
      }
      );
  }

  goToPaymentList(){
    this.router.navigate(['payment-success'])

  }
  onSubmit(){
    if(this.payment.name == '' || this.payment.cardNumber == null||this.payment.securityCode == null || this.payment.name == null){
this.snack.open('fill all required information to complete payment','',{
  duration:3000,
  verticalPosition:'top',
  horizontalPosition:'right'
},)
      //alert("card Owner is required")
return;
    }
    else{
    console.log(this.payment);
    this.savePayment();
    this.goToPaymentList();
    }
  }

}
