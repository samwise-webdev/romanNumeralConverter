const numberValue = document.getElementById("number");
const output = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");
const ones = "I";
const fives = "V";
const tens = "X";

function onClickFunctions() {
    isInputEmpty();
    oneDigit();
    twoDigits();
}

function isInputEmpty() {
    if (numberValue.value.length <= 0) {
        alert("Please enter a valid number");
    } else if (numberValue.value <= -1){
        alert("Please enter a number greater than or equal to 1");
    } else if (numberValue.value >= 4000) {
        alert("Please enter a number less than or equal to 3999");
    }
}

function oneDigit() {
    if(numberValue.value <= 3) {
        output.innerText = ones;
            for (let i = 1; i < numberValue.value; i++) {
                output.innerText += "I";
            }
    }  else if (parseInt(numberValue.value) === 4) {
        output.innerText = ones + fives;
    } else if (numberValue.value <= 8 && numberValue.value >= 5) {
        output.innerText = fives;
            for (let j = 5; j < numberValue.value; j++) {
                output.innerText += "I";
            }
    } else if (parseInt(numberValue.value) === 5) {
        output.innerText = fives;
    } else if (parseInt(numberValue.value) === 9) {
        output.innerText = "IX";
    }
}

function twoDigits() {
    if (parseInt(numberValue.value) === 10) {
        output.innerText = tens;
    }
    else if(numberValue.value <= 13 && numberValue.value >= 11) {
        output.innerText = tens;
        for (let i = 10; i < numberValue.value; i++) {
            output.innerText += "I";
        }
    } else if(numberValue.value <= 18 && numberValue.value >= 15) {
        output.innerText = tens + fives;
        for (let i = 15; i < numberValue.value; i++) {
            output.innerText += "I";
        }
    } else if(parseInt(numberValue.value) === 14) {
        output.innerText = "XIV"
    } else if(parseInt(numberValue.value) === 19) {
        output.innerText = "XIX"
    }
}