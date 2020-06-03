import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  name: string;

  constructor(private router: Router) { }

  ngOnInit() {
     this.name =localStorage.getItem("name")

  }
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
  }}