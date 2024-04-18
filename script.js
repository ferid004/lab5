let displayValue = '';

function addToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculate() {
  const expression = displayValue.split(/(\+|\-|\*|\/)/);
  let result = parseFloat(expression[0]);

  for (let i = 1; i < expression.length; i += 2) {
    const operator = expression[i];
    const operand = parseFloat(expression[i + 1]);

    if (isNaN(operand)) {
      document.getElementById('display').value = 'Error';
      return;
    }

    switch (operator) {
      case '+':
        result += operand;
        break;
      case '-':
        result -= operand;
        break;
      case '*':
        result *= operand;
        break;
      case '/':
        if (operand === 0) {
          document.getElementById('display').value = 'Error';
          return;
        }
        result /= operand;
        break;
    }
  }

  displayValue = result.toString();
  document.getElementById('display').value = displayValue;
}
