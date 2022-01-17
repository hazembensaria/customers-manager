export class customer{
    public nom: string;
    public prenom:string ;
    public numtel:number;
    public ville :string
    public image : string

    constructor(nom:string, prenom:string,numtel:number,ville :string,image:string){
        this.nom=nom;
        this.prenom=prenom;
        this.numtel=numtel;
        this.ville= ville;
        this.image=image;
    }



}