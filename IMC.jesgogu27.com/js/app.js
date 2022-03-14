console.log("Hola a todos");

var firstname = 'Grove';
var edad = 37;
var sueldo = 6000000;
var jobs = true;

console.log(firstname);
console.log(edad);
console.log(sueldo);
console.log(jobs);

var x = null;
console.log(x);

function limpiar(){
    document.getElementById('calc').reset();
}

function Sumar(){

    var alt, pe, rslt;

    alt = parseFloat(document.getElementById('a').value);
    pe = parseFloat(document.getElementById('p').value);

    rslt = pe/(alt*alt);
    
    document.getElementById('Mostrar').innerHTML = rslt;
}


