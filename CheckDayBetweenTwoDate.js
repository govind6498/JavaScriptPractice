let dateFrom = "03/20";
let dateTo = "06/20 ";
let dateCheck = "5/23";

var from = Date.parse(dateFrom);
var to = Date.parse(dateTo);
var check = Date.parse(dateCheck);
if(check>=from && check<=to){
    console.log("True")
}
else{
    console.log("False")
}
