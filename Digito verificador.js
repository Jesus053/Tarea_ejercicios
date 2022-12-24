var numero, numero_reves, repetidor;
let multiplos = 2, multiplicacion = 0, suma = 0, resta = 0, Modulo = 0;
numero = prompt("Dame el numero");

numero_reves = numero.split("").reverse().map(Number);
repetidor = numero.length;

for(let i = 0; i < repetidor; i++){
    if(multiplos <= 7){
        multiplicacion = multiplos * numero_reves[i];
    }else{
        multiplos = 2;
        multiplicacion = multiplos * numero_reves[i];
    }
    multiplos++;
    suma = suma + multiplicacion;
}
console.log("Suma:", suma);
Modulo = suma%11;
console.log("Modulo:", Modulo);
resta = 11- Modulo;
console.log("Resta:", resta);
console.log(numero+"-"+resta);
