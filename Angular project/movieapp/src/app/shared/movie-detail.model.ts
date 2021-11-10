export class MovieDetails {
    id:number;
    title:string;
    summary:string;
    inTheaters:boolean;
    releaseDate:Date;
    
    constructor(id: number, title: string, summary: string, inTheaters: boolean, releaseDate: Date){
        this.id=id;
        this.title=title;
        this.inTheaters=inTheaters;
        this.releaseDate=releaseDate;
        this.summary=summary;
    }


    

}
