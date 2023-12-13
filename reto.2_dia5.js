// Copia en dicha carpeta el reto 2 del día anterior (día 5).

let op1 = 5;
let op2 = 6;


const subs = op1 => op1 - op2;
console.log(subs(op1));

const mult = (op1, op2) => op1 * op2;
console.log(mult(op1, op2));

const div = (op1, op2) => {
    if (op2 === 0){
        return "Error, no se puede dividir por cero";
    } 
    return op1/op2;
    };  
    
console.log(div(op1, op2));

// Añade a este archivo de funciones, una nueva función que haga el cuadrado de un numero.

function numberCuadrado(n){
    return n * n;
}

let n = 5;
const resultado = numberCuadrado(n) 
console.log(resultado);