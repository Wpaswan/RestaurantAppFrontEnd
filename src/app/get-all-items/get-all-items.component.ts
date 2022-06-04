import { Component, OnInit } from '@angular/core';
import { ItemService } from '../Service/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../Service/DataService/data.service';

@Component({
  selector: 'app-get-all-items',
  templateUrl: './get-all-items.component.html',
  styleUrls: ['./get-all-items.component.scss']
})
export class GetAllItemsComponent implements OnInit {
  page:number = 1;
itemId:any
searchword: any;  // done for search pipe part
  constructor(private item:ItemService, private router:Router,private activatedroute: ActivatedRoute, private dataservice:DataService) { }
  itemArray:any[]=[];
  ngOnInit(): void {
    this.getItems()
    this.itemId = this.activatedroute.snapshot.paramMap.get("itemId"); 
    this.dataservice.receivedData.subscribe((response:any)=>{  //this is done for search pipe part & this received Data is coming from data service.ts for unrelated data sharing as our dashboard.ts and getallItems don't have any relationship
      console.log(response)
    
          this.searchword = response;
          console.log(this.searchword);
     
   });
  }
  getItems()
  {
   this.item.usergetallItems().subscribe((Response:any)=>{
     console.log(Response)
     this.itemArray=Response.data
     console.log('item array=',this.itemArray)
   }
   ) 
  }
  quickview(items:any){  //used as a variable to store id of books used below in localstorage as book._id

    localStorage.setItem('itemId', items.itemId);  // _id is coming from console means from backend we are setting our _id of book in book variable declared above and in parenthesis of quickview() annd we will get it in quick view.ts component
    this.router.navigateByUrl('/dashboard/quickview/'+items.itemId) //due to this after clicking on any book image in getallbooks we will be redirected to the quickview of that particular book 

  }
  getMyOrders()
{
  this.router.navigateByUrl("/dashboard/my-orders")
 
}

}
