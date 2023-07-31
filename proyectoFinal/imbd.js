"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imbd = void 0;
var Imbd = /** @class */ (function () {
    function Imbd(peliculas) {
        this.peliculas = peliculas;
    }
    Imbd.prototype.addMovie = function (movie) {
        this.peliculas.push(movie);
    };
    Imbd.prototype.printImbd = function () {
        this.peliculas.forEach(function (pelicula, index) {
            console.log("Pelicula ".concat(index + 1, ":\n").concat(pelicula.printMovie(), "\n"));
        });
    };
    return Imbd;
}());
exports.Imbd = Imbd;
