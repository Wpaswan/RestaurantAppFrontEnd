import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../Service/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;
  constructor(private formbuilder: FormBuilder,private service:CustomerService,public toast:ToastrService) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      customerName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cPassword: ['', Validators.required],
      
    })
  }
  onSubmit(){
    this.submitted = true;

    if (this.signupForm.valid) {
      console.log(this.signupForm.value);

      let payload = {    //this payload is a json object

        customerName: this.signupForm.value.customerName, // leftside firstname is exactly same as that of backend API and rightside firstname i.e., ,firstName should be exact same as that of formcontrolname in .html file or same as written above in ngonit 
        
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        cPassword: this.signupForm.value.cPassword,
      }
      this.service.register(payload).subscribe((response: any) => {    //subscribe is a method from observable
        console.log(response)
        this.toast.success('Successfully','Customer Registered')
        

       
      })
    } 
  else {
    console.log("enter data");
  }
  }

}
