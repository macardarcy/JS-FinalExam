const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Ronderos Darcy Macarena";
const tema = "TEMA 2";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const jsonHelper = require("./jsonHelper");

// A
const gestionDePeliculas = {
    
    // B
    peliculas: jsonHelper.leerJson("peliculas"),

    //C
    listarPeliculas: function(arrayPelis) {
        arrayPelis.forEach(peli => 
            console.log(` ${peli.titulo}, de ${peli.director}. Duración: ${peli.duracion} minutos, ${peli.genero}, (${peli.calificacionIMDB} / 10 en IMDB)`));
    },

    //D
    buscarPorID: function(idPeli) {
        return this.peliculas.find(peli => peli.id === idPeli);
    },

    //E
    peliculasPorGenero: function(generoPeli) {
        return this.peliculas.filter(peli => peli.genero === generoPeli);
    },

    //F
    filtrarPorCalificacion: function(califMin, califMax) {
        return this.peliculas.filter((peli) => peli.calificacionIMDB >= califMin && peli.calificacionIMDB <= califMax);
    },

    //G
    ordenarPorDuracion: function() {
        return this.peliculas.sort((peliMenor, peliMayor) => peliMenor.duracion - peliMayor.duracion);
    },

    //H
    duracionPromedio: function() {
        let promedioDuracion = this.peliculas.reduce((acum, peli) => acum + peli.duracion, 0) / this.peliculas.length;
        return `El promedio de duración de las películas es de: ${promedioDuracion} minutos`;
    },

    //I
    modificarGeneroPorId: function(idPeli, generoNuevo) {
        let peliEncontrada = this.buscarPorID(idPeli);
        if (peliEncontrada){
            peliEncontrada.genero = generoNuevo;
            jsonHelper.escribirJson ("peliculas", this.peliculas)
        } 
    },
};

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculas);
console.log(o);

console.log(v, oo + " .D. Buscar");
console.log(gestionDePeliculas.buscarPorID(8));
console.log(gestionDePeliculas.buscarPorID(125));
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculasPorGenero("Horror"));
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.filtrarPorCalificacion(7,10));
gestionDePeliculas.listarPeliculas(gestionDePeliculas.filtrarPorCalificacion(30,80));
console.log(o);

console.log(v, oo + " .G. Ordenar");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.ordenarPorDuracion())
console.log(o);

console.log(v, oo + " .H. Duracion");
console.log(gestionDePeliculas.duracionPromedio());
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
console.log(gestionDePeliculas.buscarPorID(8));
gestionDePeliculas.modificarGeneroPorId(8, "Ciencia ficcion");
console.log(gestionDePeliculas.buscarPorID(8));
console.log(o);