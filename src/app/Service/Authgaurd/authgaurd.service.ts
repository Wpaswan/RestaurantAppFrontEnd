import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService {
  constructor() { }
  gettoken(){
    return !!localStorage.getItem("token");
  } 
}
