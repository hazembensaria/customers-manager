import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private routeur: Router) { }
  @Output() featureselected = new EventEmitter<string>();
  onselect(feature : string){
    this.featureselected.emit(feature)
  }

  ngOnInit(): void {
  }
onclick(arg:string){
  this.routeur.navigate([arg]);

}
}
