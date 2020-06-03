import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {
  value:any;
  user:any=[
    {name:'santhosh',Age:25,gender:'male'},
    {name:'suresh',Age:25,gender:'male'},
    {name:'shiva',Age:20,gender:'male'},
    {name:'Reddy',Age:26,gender:'male'}

  ];
  constructor(){
  }
Submit(data){

  // this.value=data;
  alert(JSON.stringify(data))
console.log(data)
}


}
