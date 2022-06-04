import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  token: any;

  constructor(private httpService: HttpService) { // Here we create the object of http service in constructor because we are declaring our base url in httpservice.ts so by doing this we are accesing our base url in bookservice.ts
    this.token = localStorage.getItem("token")  // this token is taken from backend that is generated & stored in our local storage after we login & we are setting this token in our login.ts as localstorage.setitems
  }
  usergetallItems() {
console.log("get all books is called")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService('api/Item/getAllItems', true, header)
  }
  orderItem(data: any,itemid:any){
   
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
        Authorization:'Bearer '+ this.token

      })
    }
   
     return this.httpService.postService('api/OrderItem/AddOrder?itemId='+itemid,data, true, header) 
  }
  AddAddress(req: any){
    console.log("user payload", req);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization:'Bearer ' + this.token
      })
    }
    return this.httpService.postService('api/Address/AddAddress', req, true, header)
  }
  getMyOrders() {
    console.log("get all books is called")
        let header = {
          headers: new HttpHeaders({
            'Content-type': 'application/json',
            Authorization:'Bearer ' + this.token
          })
        }
        return this.httpService.getService('api/OrderItem/getOrders', true, header)
      }
      deleteOrder(data:any)
      {
        let header = {
          headers: new HttpHeaders({
            'Content-type': 'application/json',
            Authorization:'Bearer ' + this.token
          })
          
        }
        return this.httpService.deleteService("api/OrderItem/deleteOrder/"+data,{},true,header)

      }
}
