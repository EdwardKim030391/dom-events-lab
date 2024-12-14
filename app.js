/*-------------------------------- Constants --------------------------------*/
const operators = ['+', '-', '*', '/'];

/*-------------------------------- Variables --------------------------------*/
let currentExpression = '';

/*------------------------ Cached Element References ------------------------*/
let display;
let numberButtons, clearButton, equalsButton, operatorButtons;

/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  display = document.querySelector('.display');
  numberButtons = document.querySelectorAll('.number');
  clearButton = document.getElementById('clear');
  equalsButton = document.querySelector('.equals');
  operatorButtons = document.querySelectorAll('.operator');

  numberButtons.forEach(button =>
    button.addEventListener('click', handleNumberClick)
  );

  clearButton.addEventListener('click', handleClear);

  equalsButton.addEventListener('click', handleEquals);

  operatorButtons.forEach(button =>
    button.addEventListener('click', handleOperatorClick)
  );
});
/*-------------------------------- Functions --------------------------------*/
function handleNumberClick(event) {
  const numberClicked = event.target.textContent;
  currentExpression += numberClicked;
  renderDisplay();
}

function handleClear() {
    currentExpression = '0';
    renderDisplay();
}

function handleEquals() {
  try {
    currentExpression = eval(currentExpression).toString();
  } catch (error) {
    currentExpression = 'Error';
  }
  renderDisplay();
}

function handleOperatorClick(event) {
  const operator = event.target.textContent;
  if (currentExpression && operators.includes(operator)) {
    currentExpression += operator;
  }
  renderDisplay();
}

function renderDisplay() {
  display.textContent = currentExpression;
}
