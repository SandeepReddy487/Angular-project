import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  HttpClient: any;

  constructor(private http:HttpClient) { }
   getData():Observable<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts?userId=1')
  }

}
