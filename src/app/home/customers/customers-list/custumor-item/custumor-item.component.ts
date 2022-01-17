import { Component, Input, OnInit, Output } from '@angular/core';
import { customer } from '../../customer.model';
import { Router } from '@angular/router';
import { CustService } from 'src/app/services/cust.service';

@Component({
  selector: 'app-custumor-item',
  templateUrl: './custumor-item.component.html',
  styleUrls: ['./custumor-item.component.css']
})
export class CustumorItemComponent implements OnInit {
 @Input() customer! :customer
 
  constructor(private s: CustService,private router: Router) { }

  ngOnInit(): void {
  }
  onclick(){
    this.router.navigate(['details']);
    this.s.getitem=this.customer
  }

}
