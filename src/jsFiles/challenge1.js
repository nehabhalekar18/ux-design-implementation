export function lifePathNumber(inputData) {
  if(inputData==null)
  return false;
  let reduceData = inputData.split("-");
  let i = 0;
  let pathNumber = 0;
  let dateEle = 0;
  while (reduceData.length > i) {
    dateEle = reduceData[i]
      .split("")
      .map((x) => +x)
      .reduce(reducerFunc);
    pathNumber = pathNumber + dateEle;
    i++;
  }

  pathNumber = pathNumber
    .toString(10)
    .split("")
    .map(Number)
    .reduce(reducerFunc);
  return pathNumber;
}

function reducerFunc(a, b) {
  return a + b;
}
