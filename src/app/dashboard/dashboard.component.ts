import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Service/DataService/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isSearch = false; 
  token:any
  constructor(private route: Router, private dataservice: DataService) { }

  ngOnInit(): void {
 
  }
getMyOrders()
{
  this.route.navigateByUrl("/dashboard/my-orders")
 
}
clearFilter(search: any) {  // This is done for search pipe part in getallItems and dashboard
  console.log(search);  //this .target.value is coming from console
  this.dataservice.sendData(search) // done for search pipe & this .target.value is coming from console
}
Logout() {
  localStorage.clear();
  this.route.navigateByUrl('/login')
}
}
