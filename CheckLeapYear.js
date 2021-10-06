// if(Year%4==0 && Year%100!=0||Year%400==0)
let year = 2021;
if(year.toString().length!=4){
    console.log("Please Enter Four digit year:")
}
else{
    if(year%4==0 && year%100!=0 || year%400==0){
        console.log("Year is Leaf year")
    }
    else{
        console.log("Year is not Leaf Year");
    }
}
