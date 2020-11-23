export function calculateTime(inputData){
    if(inputData<0){
        return 0
    }
let speed=5;
let time=80;
let dist = speed*time;
speed=inputData;
time=dist/speed;
return time.toFixed(2);
}