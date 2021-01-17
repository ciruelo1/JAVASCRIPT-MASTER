/////////////// Ejercicio 1 /////////////////

function numeroParImpar(numero){
    if(numero % 2 == 0){
       var cadena = String(numero);
       return "el numero: " + cadena + " es par";
    } else {
        var cadena = String(numero);
        return "el numero: " + cadena + " es impar";
    }
}

// console.log(numeroParImpar(11));

/////////////// Ejercicio 2 /////////////////

var cadena = "abcdefghijklmnñopqrstuvwxyz";

function buscarPosicion(caracter){
    caracterDevuelto = cadena.indexOf(caracter);
    return caracterDevuelto;
}

// console.log(buscarPosicion("a"));

/////////////// Ejercicio 3 /////////////////

function obtenerPrecioConIva(precio){
    iva =  precio * 0.19;
    precio = precio + iva;
    return precio;
}

// console.log(obtenerPrecioConIva(10000));

/////////////// Ejercicio 4 /////////////////

function nuevoDado(nombre){

    return function(){
        var resultado = Math.floor(Math.random()*6)+1;
        return nombre + " tiró un dado y salió " + resultado;
    }
}

var dadoTiago = nuevoDado("tiago");

// console.log(dadoTiago());

/////////////// Ejercicio 5 /////////////////

function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

Persona.prototype.guardarEnLocalStorage = function(){
    var nombrecompleto = this.nombre + " " + this.apellido;
    localStorage.setItem(nombrecompleto, nombrecompleto);
    localStorage.setItem(this.edad, this.edad);
}

Persona.prototype.guardarEnSessionStorage = function(){
    var nombrecompleto = this.nombre + " " + this.apellido;
    sessionStorage.setItem(nombrecompleto, nombrecompleto);
    sessionStorage.setItem(this.edad, this.edad);
}

var tiago = new Persona("tiago", "alcazar", 25);