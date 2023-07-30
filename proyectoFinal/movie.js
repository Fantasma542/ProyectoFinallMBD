"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.actors = [];
    }
    //------- Métodos públicos ------
    Movie.prototype.printMovie = function () {
        var printActors = "";
        for (var _i = 0, _a = this.actors; _i < _a.length; _i++) {
            var actor = _a[_i];
            printActors += actor.impIMBD();
        }
        var director = this.director.impIMBD();
        var writer = this.writer.impIMBD();
        var print = "Title: ".concat(this.title, " \n        Release year: ").concat(this.releaseYear, " \n        Actors: ").concat(printActors, " \n        Nacionality: ").concat(this.nacionality, "\n        Director: \n").concat(director, "\n\n        Writer: \n").concat(writer, "\n\n        Language: ").concat(this.language, "\n        Plataforma: ").concat(this.plataforma, "\n        Is MCU: ").concat(this.isMCU, "\n        Main Character Name: ").concat(this.mainCharacterName, "\n        Producer: ").concat(this.producer, "\n        Distributor: ").concat(this.distributor, "\n        Genre: ").concat(this.genre);
        console.log(print);
    };
    return Movie;
}());
exports.Movie = Movie;
