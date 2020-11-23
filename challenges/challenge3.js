export function toggleCase(inputData) {
  let upperCnt = 0;
  let i = 0;
  while (inputData.length > i) {
    if (inputData[i].match(/[A-Z]/g)) {
      upperCnt++;
    }
    i++;
  }
  let lowerCnt = inputData.length - upperCnt;
  if (lowerCnt >= upperCnt) {
    return inputData.toLowerCase();
  } else {
    return inputData.toUpperCase();
  }
}
