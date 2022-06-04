import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../Service/customer.service';
import {  Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;
  constructor(private formbuilder: FormBuilder,private service:CustomerService,private route:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
        })
  }
  onSubmit(){
    this.submitted = true;
//  localStorage.getItem()
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);

      let payload = {    //this payload is a json object
        
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
      
      }
      this.service.login(payload).subscribe((response: any) => {    //subscribe is a method from observable
        console.log(response,'login successfully')
        localStorage.setItem('token', response.token);  // this accessToken is coming from swagger and we can see inside console also
        console.log(response)
         
        this.route.navigateByUrl("/dashboard")  //by doing this after clicking on login button we will get redirected to dashboard

       
      })
    } 
  else {
    console.log("enter data");
  }
  }

}
