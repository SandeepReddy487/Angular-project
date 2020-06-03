import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FormComponent } from './form/form.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ExceltableComponent } from './exceltable/exceltable.component';
import { TableComponent } from './table/table.component';
import { SigninComponent } from './signin/signin.component';
import { UserComponent } from './user/user.component';
import { MouseComponent } from './mouse/mouse.component';
import { HttpComponent } from './http/http.component';
import { ExcelComponent } from './excel/excel.component';
import { PiechartComponent } from './piechart/piechart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    FormComponent,
    TodolistComponent,
    ExceltableComponent,
    TableComponent,
    SigninComponent,
    UserComponent,
    MouseComponent,
    HttpComponent,
    ExcelComponent,
    PiechartComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    HttpClientModule,
     ModalModule,
    MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
