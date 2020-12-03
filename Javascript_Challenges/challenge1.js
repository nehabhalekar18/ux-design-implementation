var inputData = "1990-09-26";
let reduceData = inputData.split("-");
let i = 0;
let pathNumber = 0;
let dateEle = 0;
while (reduceData.length > i) {
  dateEle = reduceData[i]
    .split("")
    .map((x) => +x)
    .reduce(
      (reducerFunc = (a, b) => {
        return a + b;
      })
    );
  pathNumber = pathNumber + dateEle;
  i++;
}

console.log(
  "PathNumber :: " +
    pathNumber
      .toString()
      .split("")
      .map((x) => +x)
      .reduce(
        (reducerFunc = (a, b) => {
          return a + b;
        })
      )
);
