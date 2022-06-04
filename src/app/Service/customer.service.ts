import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  token: any;
  constructor(private http:HttpService) {  this.token = localStorage.getItem("token") }
  getHeaders = () => {
    return {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('BookStore')}`,
      }),
    };
  }
  register(req: any){
    console.log("user payload", req);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
        //  'Authorization':'token'
      })
    }
    return this.http.postService('api/Customer/AddCustomers', req, false, header)
  }
  login(data: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'  //request and response are in the format of json means key-value pair
      })
    }
    return this.http.postService('api/Customer/login', data, false, header)
  }
}
