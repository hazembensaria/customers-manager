import { NgStyle } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CustService } from 'src/app/services/cust.service';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {
  @Output() featureselected = new EventEmitter<string>();
  
  onselect(feature : string){
    this.featureselected.emit(feature)
  }
  constructor( private s :CustService, private routeur: Router) { }

  ngOnInit(): void {
  }
  onclick(arg :string){
    this.routeur.navigate([arg]);
  
  }
a='hazem'
}
