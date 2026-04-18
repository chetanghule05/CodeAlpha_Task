let display = document.getElementById("display");

// Add value
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown", function(event) {

    if (!isNaN(event.key) || "+-*/.%".includes(event.key)) {
        appendValue(event.key);
    }

    if (event.key === "Enter") {
        calculate();
    }

    if (event.key === "Backspace") {
        deleteLast();
    }

    if (event.key === "Escape") {
        clearDisplay();
    }
});
