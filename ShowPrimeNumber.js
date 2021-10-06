let range = 100;
for(let i=2;i<=range ;i++){
    isPrime = true;
    for(let j=2;j<i;j++){
        if(i%j==0 && i!=j){
            isPrime = false;
            break;
        }
    }
    if(isPrime == true){
        console.log(i)
    }
}