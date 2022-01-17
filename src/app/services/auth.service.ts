import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { InscrptionComponent } from '../inscrption/inscrption.component';
import { NewUser } from '../new-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
   users =[JSON.parse( localStorage.getItem('users')||'{}')
   ];
 
   us=JSON.parse( localStorage.getItem('users')||'{}')
   public loggedUser!:string;
   public isLoggedIn:boolean=false;
   public userRole!:string;
   
  constructor() { }

  SingnIn(user: User):boolean{
    let validuser :boolean=false;

    this.users.forEach((curuse: any) =>{
      if(user.mail===curuse.mail && user.password===curuse.password ){
        validuser=true;
        this.loggedUser=curuse.mail;
        this.isLoggedIn=true;
        this.userRole=curuse.role;
        localStorage.setItem('loggedUser',this.loggedUser);
        localStorage.setItem('loggedIn',String(this.isLoggedIn));
    }
  });
  return validuser;
}
}

