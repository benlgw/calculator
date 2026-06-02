function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function operate(num1, operator, num2) {
	switch (operator) {
		case "+":
			const addition = add(num1, num2);
			break;
		case "-":
			const subtraction = subtract(num1, num2);
			break;
		case "*":
			const multiplication = multiply(num1, num2);
			break;
		case "/":
			const division = divide(num1, num2);
			break;
	}
}
