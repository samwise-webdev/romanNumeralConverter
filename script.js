const numberValue = document.getElementById("number");
const output = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn")
const ones = "I";
const fives = "V"

function isInputEmpty() {
    if (numberValue.value.length <= 0) {
        alert("Please enter a valid number");
    } else if (numberValue.value <= -1){
        alert("Please enter a number greater than or equal to 1");
    } else if (numberValue.value >= 4000) {
        alert("Please enter a number less than or equal to 3999");
    }
}

function firstDigit() {
    if(numberValue.value.length === 1 && numberValue.value <= 3) {
        output.innerText = ones;
            for (let i = 1; i < numberValue.value; i++) {
                output.innerText += "I";
            }
    }  else if (numberValue.value.length === 1 && parseInt(numberValue.value) === 4) {
        output.innerText = ones + fives;
    } else if (numberValue.value.length === 1 && numberValue.value <= 8 && numberValue.value >= 5) {
        output.innerText = fives;
            for (let j = 5; j < numberValue.value; j++) {
                output.innerText += "I"
            }
    } else if (numberValue.value.length === 1 && parseInt(numberValue.value) === 5) {
        output.innerText = fives;
    }
}