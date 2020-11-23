var inputData = "JoHn";
let upperCnt = 0;
let i=0;
while (inputData.length > i) {
  if (inputData[i].match(/[A-Z]/g)) {
    upperCnt++;
  }
  i++;
}
let lowerCnt = inputData.length - upperCnt;
if (lowerCnt >= upperCnt) {
  console.log(inputData.toLowerCase());
} else {
  console.log(inputData.toUpperCase());
}
