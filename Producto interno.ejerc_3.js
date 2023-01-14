var a = new Array(3);
var b = new Array(3);
var oper = new Array();
for(i = 0; i < 3; i++){
    a[i] =prompt("Ingresa el vector a")   
}
console.log("a:",a);
for(i = 0; i < 3; i++){
  b[i] =prompt("Ingresa el vector b")
}
console.log("b:",b); 
let suma = 0;
let resu = 0;
for(i = 0; i < 3; i++){
    oper = (a[i]*b[i]);
    suma += oper;
}
console.log("producto interno entre a y b:",suma);

if (suma=0){
    console.log("a y b son ortagonales");
}
else{console.log("a y b no son ortagonales");}