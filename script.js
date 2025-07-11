// Get the display input and all buttons
const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
const numberButtons = document.querySelectorAll('#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine');
const operatorButtons = document.querySelectorAll('#add, #subtract, #multiply, #divide');

// Initialize variables
let currentNumber = '';
let previousNumber = '';
let operator = '';

// Function to update the display
function updateDisplay(number) {
  currentNumber += number;
  display.value = currentNumber;
}

// Function to handle operator selection
function selectOperator(op) {
  previousNumber = currentNumber;
  currentNumber = '';
  operator = op;
}

// Function to calculate the result
function calculateResult() {
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
    default:
      result = 0;
  }
  display.value = result;
  currentNumber = result.toString();
  previousNumber = '';
  operator = '';
}

// Add event listeners to buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    updateDisplay(button.textContent);
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectOperator(button.textContent);
  });
});

clearButton.addEventListener('click', () => {
  currentNumber = '';
  previousNumber = '';
  operator = '';
  display.value = '';
});

equalsButton.addEventListener('click', calculateResult);
