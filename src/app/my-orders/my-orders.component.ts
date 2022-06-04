import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../Service/item.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  

  constructor(private service:ItemService,private activatedroute: ActivatedRoute) { }
myOrders:any[]=[]
orderItemId:any
  ngOnInit(): void {
    this.getOrders()
   
  }
  getOrders()
  {
     this.service.getMyOrders().subscribe((Response:any)=>
  {
    console.log(Response)
    this.myOrders=Response.data
    console.log(this.orderItemId)

    console.log('Myorders',this.myOrders)
  })
}
deleteOrder(order:any)
  {
    console.log(order.orderItemId)
    this.service.deleteOrder(order.orderItemId).subscribe((Response:any)=>{
      console.log("item deleted succcessfully")
      window.location.reload()

    })
   

  }

  

}
