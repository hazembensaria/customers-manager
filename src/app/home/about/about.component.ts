import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'mini-projet';

  loadedfeature = 'customer'
  onnavigate(feature : string){
   this.loadedfeature=feature;
  }
}
