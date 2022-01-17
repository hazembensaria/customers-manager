import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CustService } from 'src/app/services/cust.service';
import { customer } from '../customer.model';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
   cust!: customer[]
  constructor(private s: CustService, private auth:AuthService) { }
  ngOnInit(): void {
    this.cust =JSON.parse(localStorage.getItem(this.auth.loggedUser)||'{}');
     
  }

}

