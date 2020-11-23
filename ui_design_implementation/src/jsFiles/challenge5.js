export function replaceDigits(inputData){
let input=inputData.split('');
let i=0;
let temp=[];
while(input.length>i){
    if(input[i]<5){
        temp.push('0')
    }else{
        temp.push('1')
    }
    i++;
}
return(temp.join(''))
}