import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FormComponent } from './form/form.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TableComponent } from './table/table.component';
import { ExceltableComponent } from './exceltable/exceltable.component';
import { SigninComponent } from './signin/signin.component';
import { UserComponent } from './user/user.component';
import { HttpComponent } from './http/http.component';
import { ExcelComponent } from './excel/excel.component';
import { MouseComponent } from './mouse/mouse.component';
import { PiechartComponent } from './piechart/piechart.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'signin',component:SigninComponent},
  {path:"",redirectTo:"signin",pathMatch:"full"},
  {path:'admin',component:AdminComponent,children:[
    {path:'form',component:FormComponent},
    {path:'todolist',component:TodolistComponent},
    {path:'exceltable',component:ExceltableComponent},
    {path:'table',component:TableComponent},
    {path:'piechart',component:PiechartComponent}

  ]},

      {path:'user',component:UserComponent,children:[
        {path:'http',component:HttpComponent},
      {path:'excel',component:ExcelComponent},
      {path:'mouse',component:MouseComponent},
       {path:'dashboard',component: DashboardComponent},
       
      
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
