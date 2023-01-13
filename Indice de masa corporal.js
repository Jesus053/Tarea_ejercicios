let peso = prompt("ingresa tu peso en kilogramos");
let estatura = prompt("ingresa tu estatura en metros");
let edad = prompt("ingresa tu edad");
let indma;
    indma= peso/estatura;
if(edad<45 && indma<22){
        console.log("bajo riesgo")}
else if(edad<45 && indma>=22){
    console.log("medio riesgo")}
else if(edad>=45 && indma<22){
    console.log("medio riesgo")}
    else{console.log("alto riesgo")}
    
console.log("tu indice de masa corporal es "+ indma);
