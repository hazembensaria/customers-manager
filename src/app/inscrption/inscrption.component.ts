import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { NewUser } from '../new-user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inscrption',
  templateUrl: './inscrption.component.html',
  styleUrls: ['./inscrption.component.css']
})
export class InscrptionComponent implements OnInit {

  user = new User();
  constructor(private authService:AuthService,private router:Router) { }

  onLoggedin(){
     console.log(this.user);
    let isvaliduser :boolean  =this.authService.SingnIn(this.user);
    if(isvaliduser ){
    this.router.navigate(['home']);}
   else if(isvaliduser && this.authService.userRole==="user"){
    this.router.navigate(['user']);}
    else
    alert('login ou mot de passe incorrect!');
    console.log(this.authService.users)
  }
static newuser=new Array<NewUser>();
  addUser(mail:string,password:string,role:string){
    let user = new NewUser(mail,password,role);
    InscrptionComponent.newuser.push(user);
    alert(user.getEmail())

  }

  onsignin(){
    this.user.role="admin"
    this.authService.users.push(this.user)

    localStorage.setItem('users',JSON.stringify(this.authService.users))

  }

 

  ngOnInit(): void {
  }

}
