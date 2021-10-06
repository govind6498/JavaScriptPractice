let number = 19;
let count=0
for(let i = 2; i < 19;i++){
    if(number%i==0){
        count++;
    }
}
if(count==0){
    console.log(number+" is prime");
}
else{
    console.log(number+" is not Prime")
}