const buttons = document.querySelectorAll(".button-input");
const display = document.getElementById("display");
const backspace = document.getElementById("backspace");
const clear = document.getElementById("clear");
const percent = document.getElementById("percent");
const divide = document.getElementById("divide");
const equals = document.getElementById("equals");

// Function for Input
display.addEventListener("input", function (event) {
	let value = event.target.value;
	if (!value.match(/^[0-9]/)) {
		event.target.value = "";
		return;
	}
	event.target.value = value.replace(/[^0-9+\-*/.]/g, "");
});
display.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		result();
	}
});

// Input Button
function inputButton() {
	let buttonValue = this.getAttribute("data-value");
	display.value += buttonValue;
}
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", inputButton);
}

// Backspace Button
function backspaceButton() {
	display.value = display.value.slice(0, -1);
}
backspace.addEventListener("click", backspaceButton);

// Clear Button
function clearButton() {
	display.value = "";
}
clear.addEventListener("click", clearButton);

// Count Result
function result() {
	display.value = eval(display.value);
}
equals.addEventListener("click", result);
