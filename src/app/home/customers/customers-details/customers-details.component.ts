import { Component, OnInit } from '@angular/core';
import { CustService } from 'src/app/services/cust.service';
import { customer } from '../customer.model';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.css']
})
export class CustomersDetailsComponent implements OnInit {
custumer !: customer
  constructor(private s :CustService) { }
  
  ngOnInit(): void {
    this.custumer=this.s.getitem
  }

}
