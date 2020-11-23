let inputData=[1,2,3,4,5];
let i=0;
let eleSum=[];
while(inputData.length>i){
    eleSum.push(Math.pow(inputData[i],2));
    i++;
}
console.log(eleSum.reduce(reducerFunc=(a,b)=>{return a + b}))