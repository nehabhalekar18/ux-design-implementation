import "./style.css"
export function testComponent  ()  {
    console.log("Test Component")
  const element = document.createElement("p");
  element.innerHTML = "Hello World";
  return element;
};
