window.onload = function () {
  // Get the references of the DOM nodes of numbers / function buttons / cancel button / result button
  const numericButtons = document.querySelectorAll(".numeric-button");
  const functionButtons = document.querySelectorAll(".function-button");
  const cancelButton = document.querySelector(".cancel-button");
  const resultButton = document.querySelector(".result-button");
  console.log(numericButtons);
  for (let button of numericButtons) {
    button.addEventListener("click", addNumberToResult);
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
