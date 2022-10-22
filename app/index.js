// we use global variables as temporary memory for our calculator
let lastOperation = null; // we save the operation symbol
let lastResult = null; // we save the first number that was inputted

window.onload = function () {
  // Get the references of the DOM nodes of numbers / function buttons / cancel button / result button
  const numericButtons = document.querySelectorAll(".numeric-button");
  const functionButtons = document.querySelectorAll(".function-button");
  const cancelButton = document.querySelector(".cancel-button");
  const resultButton = document.querySelector(".result-button");
  console.log(numericButtons);

  // attaching events to number buttons
  for (let button of numericButtons) {
    button.addEventListener("click", addNumberToResult);
  }

  // attaching events to function buttons
  for (let func of functionButtons) {
    func.addEventListener("click", saveOperationAndValue);
  }
};
// feature1/concatenating the values of the clicked buttons
const addNumberToResult = function (event) {
  console.log(`the node for the corresponding clicked button is: `, event.target);
  console.log(`the node for the corresponding clicked button has the following value: `, event.target.innerText);
  const inputNode = document.getElementById("result");
  const buttonNode = event.target;
  const numberPressed = buttonNode.innerText;
  if (inputNode.value === "0") {
    inputNode.value = numberPressed;
  } else {
    inputNode.value += numberPressed;
  }
};

// feature2/save input value and operation
const saveOperationAndValue = function (event) {
  const functionNode = event.target;
  const inputNode = document.getElementById("result");
  lastOperation = functionNode.innerText; // the symbol that is pressed is saved in the global variable
  console.log(lastOperation);

  lastResult = inputNode.value; // saving the inputted value in the global variable
  console.log(lastResult);

  inputNode.value = "0"; //we reset the input value to 0
};
