import { Injectable } from '@angular/core';
import { customer } from '../home/customers/customer.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustService {
  customers:customer[]=[
  ];
  
  
  constructor(private auth:AuthService) { }

  addcust(cust:customer){
    if(localStorage.getItem(this.auth.loggedUser)){
    this.customers= JSON.parse(localStorage.getItem(this.auth.loggedUser)||'{}') ;}
    this.customers.push(cust)
    console.log(this.customers)
      // localStorage.setItem("highscores", JSON.stringify(highScores));
    localStorage.setItem(this.auth.loggedUser,JSON.stringify(this.customers))
    // this.det = JSON.parse(localStorage.getItem('d')||'{}');
    // console.log(this.det)
  }
  getitem !:customer
}
