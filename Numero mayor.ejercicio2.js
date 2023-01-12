let n = 0, num = 0;

n = prompt("Ingrese n");

for(let i = 0; i<=n; i+=1){
    let mayor = -999;
    num = prompt("Ingrese numero");
    console.log(n);

    if(num> mayor){
        mayor = num;
    }
    
}

console.log("el mayor es: "+ mayor);    