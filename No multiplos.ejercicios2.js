let n = 0;

n = prompt("Dame un limite");

for(let i=0; i<=n; i+=1){
    if(i%3==0 || i%7==0){}else{
        console.log(i);
    }
}