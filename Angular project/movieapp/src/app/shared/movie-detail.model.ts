export class MovieDetails {
    id:number;
    title:string;
    summary:string;
    inTheaters:boolean;
    releaseDate:Date;
    Poster:string;
    
    constructor(id: number, title: string, summary: string, inTheaters: boolean, releaseDate: Date, Poster: string){
        this.id=id;
        this.title=title;
        this.inTheaters=inTheaters;
        this.releaseDate=releaseDate;
        this.summary=summary;
        this.Poster=Poster;
    }


    

}
