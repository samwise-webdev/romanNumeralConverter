const numberValue = document.getElementById("number");
// const numberValueParsed = parseInt(document.getElementById("number"));  this doesn't work and I don't know why
const output = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");
const ones = "I";
const fives = "V";
const tens = "X";
// const twenties = tens + "X";
// const thirties = tens + twenties;


// function inputArray() {
//     const userInputArray = []
//     userInputArray.push(numberValue.value);
//     return userInputArray;
// } this is useless lmao


function onClickFunctions() {
    isInputEmpty();
    oneDigit();
    twoDigits();
//    onesPlace();
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
    if(numberValue.value <= 3) { //this does not need to be parsed b/c of type coersion
        output.innerText = ones;
            for (let i = 1; i < numberValue.value; i++) {
                output.innerText += "I";
            }
    }  else if (parseInt(numberValue.value) === 4) { //this requires the input to be parsed because of the strict equality operator 
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

//  function onesPlace() {
//     const inputArray = numberValue.value.split('');
//     const lastIndex = parseInt(inputArray[inputArray.length - 1], 10);
//     console.log("step 1")
//     if (lastIndex <= 3) {
//         for (let i = 0; i < lastIndex; i++ ) {
//             output.innerText += "I";
//         }
//     }
// }



/* I was going to see if using an object would make things easier but I can't figure out how so we're scrapping that for now.
const romanNumerals = {
    1: "I",
    4: "IV",
    5: "V",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
    1000: "M",
    1001: "MI"
} */