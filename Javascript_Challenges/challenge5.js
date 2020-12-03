let inputData="34561113256";
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
console.log(temp.join(''))