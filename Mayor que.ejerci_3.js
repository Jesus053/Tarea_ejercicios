let limite = (prompt("ingresa el limite"));
let lectura = new Array(limite);

for(i=0; i<limite; i++){
     lectura[i] = prompt("Ingresa los numeros a leer");
console.log(lectura)
}
let numcomparar= prompt("Ingresa el numero con cual comparar");
let mayor = 0; 
for(i=0; i<lectura.length; i++){
    if (lectura[i] > numcomparar)
    {mayor++;}}
console.log("De tu lista",mayor,"valores son mayor a",numcomparar);