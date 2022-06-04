import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemService } from '../Service/item.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  itemdata: any;
  itemId: any; 
  item:any[]=[]
  public ItemId$: Observable<any> // 'id' is bad name for variable, remember about code readability;
  | undefined // 'id' is bad name for variable, remember about code readability;
  orderForm!: FormGroup;
  addressForm!:FormGroup;
  submitted = false;
  constructor(private formbuilder: FormBuilder,private items: ItemService, private activatedroute: ActivatedRoute, private route: Router,public toast:ToastrService) { }

  ngOnInit(): void {
    this.itemId = this.activatedroute.snapshot.paramMap.get("ItemId"); // we are getting/storing bookid by using activated route part and not by using local storage as done and commented above
    console.log("itemId",this.itemId)
    this.getItem()
    this.orderForm = this.formbuilder.group({
      quantity: ['', Validators.required],
      pMethod: ['', Validators.required],
     
      
    })
    this.addressForm= this.formbuilder.group({
      colony: ['', Validators.required],
      quarterNumber: ['', Validators.required],
      city:['', Validators.required],
      state:['', Validators.required],
     
      
    })
  }
  getItem() {

    this.items.usergetallItems().subscribe((response: any) => {  // here even though the method is of getbook() we are calling the api integration of usergetallbooks() that is done previously in getallbooks.ts and then we are storing all books data in element by using forEach loop as below
     
      response.data.forEach((element: any) => {  // in element we are storing our entire bookdetails 
           console.log(element.itemId)
           this.item=element.response
           console.log(this.itemId)
        if (element.itemId == this.itemId) {  // here we are comparing entire book id (element._id) with one particular book id(this.bookid)
          this.itemdata = element;  // we are storing our entire book details in element and assigning to this.bookdata that is coming from quickview.html (bookdata.bookName, bookdata.author)
        }

      });

    });
  }
  onSubmit()
  {
    this.submitted = true;
    let payload = {    //this payload is a json object
        
      quantity: this.orderForm.value.quantity,
      pMethod: this.orderForm.value.pMethod,
    
    }
    this.items.orderItem(payload,this.itemId).subscribe((response: any) => {    //subscribe is a method from observable
      console.log(response,'order placed successfully')
     
      console.log(response)
      this.toast.success('Successfully',"Order Placed")
      // window.location.reload()

  })
  }
  AddAddress()
  {
    this.submitted = true;
    let payload = {    //this payload is a json object
        
      colony: this.addressForm.value.colony,
      quarterNumber: this.addressForm.value.quarterNumber,
      city:this.addressForm.value.city,
      state:this.addressForm.value.state
    
    }
    this.items.AddAddress(payload).subscribe((response: any) => {    //subscribe is a method from observable
      console.log(response,'Address added successfully')
     
      console.log(response)
      this.toast.success('Successfully',"Address added")
      

  })

  }
}
