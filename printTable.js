let number = 31;
if(number>0 && number <32){
    for(let i=0;i<=number;i++){
        let value = parseInt(Math.pow(2,i))
        console.log(value);
    }
}
else{
    console.log("Please Enter valid input")
}
