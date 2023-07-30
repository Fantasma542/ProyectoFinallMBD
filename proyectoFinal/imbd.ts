import { Movie } from "./movie";
export class Imbd{
    public peliculas: Movie[];
    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }
    printImbd():void{
        this.peliculas.forEach((pelicula, index) => {
            console.log(`Pelicula ${index+1}:\n${pelicula.printMovie()}\n`);
            
        });
    }
}