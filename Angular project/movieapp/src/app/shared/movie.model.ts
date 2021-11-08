export class MovieDetails {
    id:number=0;
    title:string;
    summary:string;
    inTheaters:boolean;
    releaseDate:Date;
    
    constructor(id: number, title: string, summary: string, inTheaters: boolean, releaseDate: Date){
        this.id=0;
        this.title="";
        this.summary="";
        this.inTheaters=inTheaters ;
        this.releaseDate=releaseDate;
    }


    

}
