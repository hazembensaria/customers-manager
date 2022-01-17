import { Component, OnInit } from '@angular/core';
import { customer } from '../home/customers/customer.model';
import { CustService } from '../services/cust.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customer =new customer("sdgf","sdf",2555,"asdf",'../../../../../assets/users-icon-png-15.jpg')
  

  constructor(private s :CustService) { }

  ngOnInit(): void {
    
  }
  onsubmit(){
    this.s.addcust(this.customer)
  }
 
}
