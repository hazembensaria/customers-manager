export class NewUser {
   
    constructor(private email:string,private password:string, private role :string){}

    public setEmail(email:string){
        this.email=email;
    }
    public setPassword(password:string){
        this.password=password;
    }
    public setRole(role:string){
        this.role=role;
    }

    public getEmail(){
        return this.email
    }

    public getPassword(){
        return this.password
    }

    public getRole(){
        return this.role
        
    }
}

