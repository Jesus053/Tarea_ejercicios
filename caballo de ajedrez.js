let x, y;
let derecha, izquierda, arriba, abajo;
let derecha_abajo, derecha_arriba, izquierda_abajo, izquierda_arriba;
let arriba_derecha, arriba_izquierda, abajo_derecha, abajo_izquierda; 

x = parseInt(prompt("cordenada en x"));
y = parseInt(prompt("cordenada en y"));

if (x + 2 <= 8){ //derecha
    derecha = x + 2;
    if(y + 1 <= 8){
        derecha_arriba = y + 1;
        console.log("posiscion:", derecha,",",derecha_arriba);
    }
    if(y - 1 > 0){
        derecha_abajo = y - 1;
        console.log("posiscion:", derecha,",",derecha_abajo);
    }
}
if (x - 2 > 0){ //izquierda
    izquierda = x - 2;
    if(y + 1 <= 8){
       izquierda_arriba = y + 1;
       console.log("posiscion:", izquierda,",",izquierda_arriba);
    }
    if(y - 1 > 0){
        izquierda_abajo = y - 1;
        console.log("posiscion:", izquierda,",",izquierda_abajo);
    }
}
if (y + 2 <= 8){ //arriba
    arriba = y + 2;
    if(x + 1 <= 8){
        arriba_derecha = x + 1;
        console.log("posiscion:", arriba_derecha,",",arriba);
    }
    if(x - 1 > 0){
        arriba_izquierda = x - 1;
        console.log("posiscion:", arriba_izquierda,",",arriba);
    }
}
if (y - 2 > 0){ //abajo
    abajo = y - 2;
    if(x + 1 <= 8){
       abajo_derecha = x + 1;
       console.log("posiscion:", abajo_derecha,",",abajo);
    }
    if(x - 1 > 0){
        abajo_izquierda = x - 1;
        console.log("posiscion:", abajo_izquierda,",",abajo);
    }
}