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

addEventListener("keydown", (key) => {
	console.log(key.key);
	updateCalculator(key.key);
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
			addToResult(addition);
			clearValues();
			break;
		case "-":
			const subtraction = subtract(num1, num2);
			addToResult(subtraction);
			clearValues();
			break;
		case "x":
		case "*":
			const multiplication = multiply(num1, num2);
			addToResult(multiplication);
			clearValues();
			break;
		case "÷":
		case "/":
			const division = divide(num1, num2);
			addToResult(division);
			clearValues();
			break;
	}
}

function updateCalculator(buttonPressed) {
	switch (buttonPressed) {
		case "AC":
		case "c":
		case "C":
			clearCalc(true);
			break;
		case "Del":
		case "Backspace":
			removeLast();
			break;
		case "0":
			if (result.textContent) {
				addToResult("0");
			}
			break;
		case ".":
			if (!result.textContent) {
				addToResult("0.");
			} else if (!result.textContent.includes(".")) {
				addToResult(".");
			}
			break;
		case "÷":
		case "/":
		case "x":
		case "*":
		case "+":
		case "-":
			if (!result.textContent == "") {
				operationPressed(buttonPressed);
			}
			break;
		case "=":
			num2 = result.textContent;
			clearCalc(false);
			operate(num1, operator, num2);
			break;
		default:
			if (isNaN(+buttonPressed)) {
				break;
			} else {
				addToResult(buttonPressed);
				addToMath(buttonPressed);
			}
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

function addToMath(string) {
	maths.textContent = maths.textContent + string;
}

function addToResult(string) {
	result.textContent = result.textContent + string;
}

function removeLast() {
	result.textContent = result.textContent.slice(0, -1);
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
