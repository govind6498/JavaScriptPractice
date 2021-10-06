let number = 189;
console.log("Prime Factor for "+number+" are:")
for(let i=2;i*i<=number;i++){
        if(number%i==0){
            console.log(i+" ");
            number = parseInt(number/i)
        }
    }
if(number>2){
    console.log(number)
}