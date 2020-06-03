import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private router: Router) {}
  admin="";

  onSubmit(value){
    // console.log(value);
  let data1=value.name;
  //  var data =JSON.stringify(value)
   localStorage.setItem('name', data1);
   console.log(data1)
  var data=localStorage.getItem('name');
    var username=value.name;
    var password=value.password;
  if(username=="user"&& password=="user"){
    this.router.navigate(['user']);
  }
  //  else if (username=="stud"&& password=="stud") {
  //   this.router.navigate(['admin']);
    
  // }
  }

}
