import { Component, OnInit } from '@angular/core';
import { home } from './homemodel';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  home = new home()
  dataarray=[];
  ngOnInit(){
    this.dataarray.push(this.home);
  }
  addForm(){
    this.home = new home()
    this.dataarray.push(this.home);
  
  }
   removeForm(index){
   this.dataarray.splice(index);
  // //   this.dataarray.pop(this.home);
  
   }
  onSubmit(){
    console.log(this.dataarray)
  }
  
}
