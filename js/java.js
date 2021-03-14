function addition(num1, num2, num3) {

	var convertedNum1 = parseFloat(num1);
	var convertedNum2 = parseFloat(num2);
	var convertedNum3 = parseFloat(num3);

	if (isNaN(convertedNum1) || isNaN(convertedNum2) || isNaN(convertedNum3)) {

		return "invalid argument types";
	}

	return convertedNum1 + convertedNum2 + convertedNum3;
}

var paragraph = document.querySelector("p");

var sum = addition(6, true, "f");

paragraph.innerHTML = sum;