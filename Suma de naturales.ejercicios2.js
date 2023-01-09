let n = 0, s1 = 0;
let s2=0 ;

n = prompt("Limite");

for(let i=1; i<=n; i+=1){
    s1 = s1 + i;
}
s2= (n**2)/2+n/2;
console.log("S1 = ",s1);
console.log("S2 = ",s2);

if(s1==s2){
    console.log("iguales");
}else{
    console.log("no iguales");
}