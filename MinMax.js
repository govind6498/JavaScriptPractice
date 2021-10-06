let a = 12;
let b = 16;
let c = 10;
let first = a+b*c;
let second = c+a/b;
let third = a%b+c
let fourth = a*b+c;
if(first>second && first>third && first>fourth){
    console.log("Max Number is:"+first);
}
else if(second>first && second>third && second>fourth){
    console.log("Max Number is:"+second);
}
else if(third>first && third >second && third>fourth){
    console.log("Max Number is:"+third);
}
else if(fourth>first && fourth>second && fourth>third){
    console.log("Max Number is:"+fourth);
}
if(first<second && first<third && first<fourth){
    console.log("Min Number is:"+first);
}
else if(second<first && second<third && second<fourth){
    console.log("Min Number is:"+second);
}
else if(third<first && third <second && third<fourth){
    console.log("Min Number is:"+third);
}
else if(fourth<first && fourth<second && fourth<third){
    console.log("Min Number is:"+fourth);
}
