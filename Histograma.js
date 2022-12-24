let n, negativ = 0, positiv = 0;
let Texto = "";

while(n != 0){
    n = prompt("Almacena un numero");
    console.log(n);

    if(n < 0){
        negativ++;
    }else{
        positiv++;
    }
}

for (let i=1; i<=positiv; i+=1){
    Texto += "*";
}
console.log("Positivos: ",Texto);

Texto = "";

for (let j=1; j<=menos; j+=1){
    Texto += "*";
}
console.log("Negativos: ",Texto);