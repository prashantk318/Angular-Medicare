import { LoginService } from './../../login.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginData = {
  username: '',
  password:'',
}
  constructor(private snack:MatSnackBar, private login:LoginService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
  formSubmit(){
    console.log("login button clicked");
    if(this.loginData.username.trim()==''|| this.loginData.username==null){
this.snack.open("username is required",'',{
  duration: 3000,
});
return;
    }
    if(this.loginData.password.trim()==''|| this.loginData.password==null){
      this.snack.open("password is required",'',{
        duration: 3000,
      });
      return;
          }

          //request to server to generate token
          this.login.generateToken(this.loginData).subscribe(
            (data:any) =>{
              console.log(data);
              this.login.loginUser(data.token);
              this.login.getCurrentUser().subscribe(
                (user:any) =>{
                  this.login.setUser(user);
                  console.log(user);
                  //redirect
                  if(this.login.getUserRole() =="ADMIN"){
                 
                   //window.location.href='/admin';
                   this.router.navigate(['manage-products']);
                   this.login.loginStatusSubject.next(true);
                  }else if(this.login.getUserRole() =="NORMAL"){
                      
                    //normal user dashboard
                    //window.location.href='/user-dashboard';
                    this.router.navigate(['product-list']);
                    this.login.loginStatusSubject.next(true);
                    
                  }else{
                    this.login.logout();
                    
                    
                  }
                }
              )
              
            }, (error)=>{
              console.log('Error');
              console.log(error);
              this.snack.open("Invalid Details !! try again", '',{
                duration:3000
              })
              
            }
          )
  }

}
