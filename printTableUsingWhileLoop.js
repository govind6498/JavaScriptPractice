let maxNumber = 256
let table = 0;
let i=0
while(maxNumber>=table){
    table = parseInt(Math.pow(2,i))
    if(table<=maxNumber){
        console.log(table)
        i=i+1;
    }
}