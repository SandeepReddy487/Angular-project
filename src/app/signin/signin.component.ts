import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
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
if(username=="admin"&& password=="admin"){
  this.router.navigate(['admin']);
}
 else if (username=="user"&& password=="user") {
  this.router.navigate(['user']);
}
}


}
