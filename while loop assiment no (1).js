let n1=0; n2=1; n3=n1+n2;
count=0;

console.log(n1);
console.log(n2);



const N=10;

while(count<=N){
    n3=n1+n2;
    console.log(n3)
    n1=n2;
    n2=n3;
    count++;
}
