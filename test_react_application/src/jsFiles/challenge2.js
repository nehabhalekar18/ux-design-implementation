export function squareSum(inputData){
let i=0;
let eleSum=[];
while(inputData.length>i){
    eleSum.push(Math.pow(inputData[i],2));
    i++;
}
return (eleSum.reduce(reducerFunc))
}
function reducerFunc(a, b) {
    return a + b;
  }