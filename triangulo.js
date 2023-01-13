let a =parseFloat(prompt("Ingrese a"));
let b= parseFloat(prompt("Ingrese b"));
let c= parseFloat(prompt("Ingrese c"));
if(a+c>b){
    console.log("Triangulo valido")}
else{console.log("No es un triangulo valido")};

 if (a==b || b==c || c==a){
    console.log("El triangulo es isoseles")
}
else(console.log("El triangulo es escaleno"));