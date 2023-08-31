let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById("display").value = displayValue;
}



let memoryValue = 0;

function calculateSquareRoot() {
    try {
        displayValue = Math.sqrt(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function memoryStore() {
    memoryValue = eval(displayValue);
    clearDisplay();
}

function memoryRecall() {
    displayValue += memoryValue;
    document.getElementById("display").value = displayValue;
}

function memoryClear() {
    memoryValue = 0;
}



function calculateSin() {
    try {
        displayValue = Math.sin(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateCos() {
    try {
        displayValue = Math.cos(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateTan() {
    try {
        displayValue = Math.tan(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateLog() {
    try {
        displayValue = Math.log(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateExp() {
    try {
        displayValue = Math.exp(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function memorySubtract() {
    memoryValue -= eval(displayValue);
    clearDisplay();
}





function calculateAsin() {
    try {
        displayValue = Math.asin(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateAcos() {
    try {
        displayValue = Math.acos(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateAtan() {
    try {
        displayValue = Math.atan(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateLog10() {
    try {
        displayValue = Math.log10(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateFactorial() {
    try {
        displayValue = factorial(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateAbsolute() {
    try {
        displayValue = Math.abs(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculatePowerOfTen() {
    try {
        displayValue = Math.pow(10, eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}



function calculateE() {
    displayValue += Math.E;
    document.getElementById("display").value = displayValue;
}

function calculateCeil() {
    try {
        displayValue = Math.ceil(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateFloor() {
    try {
        displayValue = Math.floor(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateRound() {
    try {
        displayValue = Math.round(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateMin() {
    try {
        displayValue = Math.min(...parseArray(eval(displayValue)));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateMax() {
    try {
        displayValue = Math.max(...parseArray(eval(displayValue)));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateMemoryClear() {
    memoryValue = 0;
}



function calculateRandom() {
    try {
        displayValue = Math.random();
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateMemorySubtract() {
    memoryValue -= eval(displayValue);
    clearDisplay();
}

function calculateMemoryRecallSubtract() {
    displayValue = memoryValue - eval(displayValue);
    document.getElementById("display").value = displayValue;
}




function parseArray(input) {
    return input.split(',').map(Number);
}


