import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private snack:MatSnackBar) { }
public user ={
  username : '',
  password : '',
  firstName:'',
  lastName:'',
  email:'',
  phone:'',

}
  ngOnInit(): void {}
    formSubmit()
    {
      console.log(this.user);
      if(this.user.username == ''|| this.user.username == null){
        this.snack.open('user name is required', '',{
          duration:3000,
          verticalPosition:'top',
          horizontalPosition:'right'
        });
        //duration: 3000,
        //alert("user is required");
        return;
      }

      //validate 
    this.userService.addUser(this.user).subscribe(
      (data:any) =>{
 console.log(data)
// alert('success')
Swal.fire('success', 'user id is' + data.id, 'success')
      }, (error) =>{

        console.log(error);

        this.snack.open('something went wrong', '',{
          duration:3000,
        })
        //alert("something went wrong")
      }
    )
    }
  

}
