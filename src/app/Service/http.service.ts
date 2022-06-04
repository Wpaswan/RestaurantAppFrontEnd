import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl=environment.baseurl
  constructor(private http:HttpClient) {
  }
  // postService1(url: string, reqdata: any = {}, token: boolean = false, httpOptions: any = {}) {
  //   console.log(reqdata)
  //   return this.Httpclient.post(this.baseUrl + url, reqdata, token && httpOptions)

  // }
postService(url:string,req:any={},token=true,httpAuthoptions:any={}){
  
  return this.http.post(this.BaseUrl + url, req, token && httpAuthoptions)// here data:any is used in context of whatever data we are sending to backend through post operation
}

getService(url:string,token=false,httpAuthoptions:any={}){
  return this.http.get(this.BaseUrl + url, token && httpAuthoptions)
}
putService(url: any, data: any, token: boolean = false, httpOptions: any) {   // here data:any is used in context of whatever data we are sending to backend through post operation
  console.log(data)
  return this.http.put(this.BaseUrl + url, data, token && httpOptions)
}

deleteService(url: any, data: any, token: boolean = false, httpOptions: any) {   // here data:any is used in context of whatever data we are sending to backend through post operation
  console.log(data)
  return this.http.delete(this.BaseUrl + url, token && httpOptions)
}



}
