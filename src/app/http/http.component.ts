import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../http/data.service';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
   getData:any[]=[];
   constructor(private data:DataService) { }

   ngOnInit() {
    this.data.getData().subscribe((res)=>{
   this.getData=res
   console.log(res);

     });
   }

   }
  