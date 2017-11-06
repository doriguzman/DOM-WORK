
var outputDiv;

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var operators = ['+', '-', '*', '/'];
var operations = ['add', 'sub', 'mul', 'div']



/**
 * @function calculate
 * @param  {string} mathExp {the expression to calculate}
 * @return {number} {the result of the calculation or NaN if it couldn't be done}
 */
function calculate(mathExp) {
  try {
    return eval(mathExp)
  } catch (e) {
    return NaN
  }
}



document.addEventListener('DOMContentLoaded', function () {
  outputDiv = document.getElementById('output');

  document.addEventListener('click', function(event) {
    var elementId = event.target.innerText;
    outputDiv.innerText += elementId;
    var expression = outputDiv.innerText;
    var lastCharacter= expression[expression.length-1]
    //checking if the last element is equal sign 
    // console.log(elementId)
  
    if (lastCharacter === "=" ) {
      var evaluate= expression.slice(0,expression.length-1);
      outputDiv.innerText=calculate(evaluate);
  }
  if (lastCharacter === "C") {
      outputDiv.innerText = "";
  }




}
)
})


    // here what i want to do is to check the elementId text for a specific value and acting on it 
    //or calling the function to calculate everything 
    // logging the element id for debug purposes



