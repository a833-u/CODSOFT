const display = document.getElementById('display');

// Function to display number
function appendNumber(number) {
    display.value += number;
}

// function to display operator
function appendOperator(operator) {
    display.value += operator;
}

// function to clear display
function clearDisplay() {
    display.value = '';
}

// function to calculate result
function calculate() {
    const expression = display.value;
    let result = eval(expression);
    display.value = result;
}