const maths = document.getElementById("maths");
const result = document.getElementById("result");

let num1;
let operator;
let num2;

let calculatedAlready = false;

const buttons = document.querySelectorAll("button");

buttons.forEach((element) => {
	element.addEventListener("click", () => {
		updateCalculator(element.textContent);
	});
});

function add(num1, num2) {
	return +num1 + +num2;
}

function subtract(num1, num2) {
	return +num1 - +num2;
}

function multiply(num1, num2) {
	return +num1 * +num2;
}

function divide(num1, num2) {
	return +num1 / +num2;
}

function operate(num1, operator, num2) {
	calculatedAlready = true;
	switch (operator) {
		case "+":
			const addition = add(num1, num2);
			result.textContent = addition;
			clearValues();
			break;
		case "-":
			const subtraction = subtract(num1, num2);
			result.textContent = subtraction;
			clearValues();
			break;
		case "x":
			const multiplication = multiply(num1, num2);
			result.textContent = multiplication;
			clearValues();
			break;
		case "÷":
			const division = divide(num1, num2);
			result.textContent = division;
			clearValues();
			break;
	}
}

function updateCalculator(buttonPressed) {
	switch (buttonPressed) {
		case "AC":
			clearCalc(true);
			break;
		case "Del":
			result.textContent = result.textContent.slice(0, -1);
			break;
		case "0":
			if (result.textContent) {
				result.textContent = result.textContent + "0";
			}
			break;
		case ".":
			if (!result.textContent) {
				result.textContent = "0.";
			} else if (!result.textContent.includes(".")) {
				result.textContent = result.textContent + ".";
			}
			break;
		case "÷":
		case "x":
		case "+":
		case "-":
			operationPressed(buttonPressed);
			break;
		case "=":
			num2 = result.textContent;
			clearCalc(false);
			operate(num1, operator, num2);
			break;
		default:
			result.textContent = result.textContent + buttonPressed;
			maths.textContent = maths.textContent + buttonPressed;
	}
}

function operationPressed(operation) {
	num1 = result.textContent;
	operator = operation;
	if (calculatedAlready) {
		maths.textContent = num1 + operator;
		num2 = 0;
	} else {
		maths.textContent = maths.textContent + operator;
	}
	clearCalc(false);
}

// Clear only result if False
function clearCalc(all) {
	if (all) {
		clearValues();
		result.textContent = "";
		maths.textContent = "";
		calculatedAlready = false;
	} else {
		result.textContent = "";
	}
}

function clearValues() {
	num1 = 0;
	num2 = 0;
}
