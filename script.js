const numberValue = document.getElementById("number");
// const numberValueParsed = parseInt(document.getElementById("number"));  this doesn't work and I don't know why
// const numValueFirstDigit = document.getElementById("number[0]")
// const numValueSecondDigit = document.getElementById("number[1]")
const output = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");
const ones = "I";
const fives = "V";
const tens = "X";
const twenties = tens + "X";
const thirties = "XXX";
const forties = "XL";
const fifties = "L";
const sixties = "LX";
const seventies = "LXX"


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
    numberValue.value = "";
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
//    if (parseInt(`${numValueFirstDigit.value}${numValueSecondDigit.value}`) === 10) { this doesn't seem to want to work but maybe revisit later
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
    } else if (parseInt(numberValue.value) >= 20 && parseInt(numberValue.value) <= 23) {
        output.innerText = twenties;
        for (let i = 20; i < numberValue.value; i++) {
            output.innerText += "I";
        }
    } else if (parseInt(numberValue.value) === 24) {
        output.innerText = "XXIV"
    } else if (parseInt(numberValue.value) === 25) {
        output.innerText = "XXV"
    }
      else if (parseInt(numberValue.value) >= 26 && parseInt(numberValue.value) <= 28) {
        output.innerText = twenties + fives;
        for (let i = 25; i < numberValue.value; i++) {
            output.innerText += "I";
        }
    } else if (parseInt(numberValue.value) === 29) {
        output.innerText = "XXIX"
    } else if (parseInt(numberValue.value) >= 30 && parseInt(numberValue.value) <= 33) {
        output.innerText = thirties;
        for (let i = 30; i < numberValue.value; i++) {
            output.innerText += "I";
        }
    } else if (parseInt(numberValue.value) === 34) {
        output.innerText = "XXXIV"
    } else if (parseInt(numberValue.value) === 35) {
        output.innerText = "XXXV"
    }
      else if (parseInt(numberValue.value) >= 36 && parseInt(numberValue.value) <= 38) {
        output.innerText = thirties + fives;
        for (let i = 35; i < numberValue.value; i++) {
            output.innerText += "I";
        }
    } else if (parseInt(numberValue.value) === 39) {
        output.innerText = "XXIX"
    } else if (parseInt(numberValue.value) >= 40 && parseInt(numberValue.value) <= 43) {
        output.innerText = forties;
        for (let i = 40; i < numberValue.value; i++) {
            output.innerText += "I";
        }
    } else if (parseInt(numberValue.value) === 44) {
        output.innerText = "XLIV"
    } else if (parseInt(numberValue.value) === 45) {
        output.innerText = "XLV"
    }
      else if (parseInt(numberValue.value) >= 46 && parseInt(numberValue.value) <= 48) {
        output.innerText = forties + fives;
        for (let i = 45; i < numberValue.value; i++) {
            output.innerText += "I";
        }
    } else if (parseInt(numberValue.value) === 49) {
        output.innerText = "XLIX"
    } else if (parseInt(numberValue.value) >= 50 && parseInt(numberValue.value) <= 53) {
        output.innerText = fifties;
        for (let i = 50; i < numberValue.value; i++) {
            output.innerText += "I";
        }
    } else if (parseInt(numberValue.value) === 54) {
        output.innerText = "LIV"
    } else if (parseInt(numberValue.value) === 55) {
        output.innerText = "LV"
    } else if (parseInt(numberValue.value) >= 56 && parseInt(numberValue.value) <= 58) {
        output.innerText = fifties;
        for (let i = 55; i < numberValue.value; i++) {
            output.innerText += "I";
        }
    } else if (parseInt(numberValue.value) === 59) {
        output.innerText = "LIX"
    } else if (parseInt(numberValue.value) >= 60 && parseInt(numberValue.value) <= 63) {
        output.innerText = sixties;
        for (let i = 60; i < numberValue.value; i++) {
            output.innerText += "I";
        }
    } else if (parseInt(numberValue.value) === 64) {
        output.innerText = "LXIV"
    } else if (parseInt(numberValue.value) === 65) {
        output.innerText = "LXV"
    } else if (parseInt(numberValue.value) >= 66 && parseInt(numberValue.value) <= 68) {
        output.innerText = sixties;
        for (let i = 65; i < numberValue.value; i++) {
            output.innerText += "I";
        }
    } else if (parseInt(numberValue.value) === 69) {
        output.innerText = "LXIX"
    } else if (parseInt(numberValue.value) >= 70 && parseInt(numberValue.value) <= 73) {
        output.innerText = seventies;
        for (let i = 70; i < numberValue.value; i++) {
            output.innerText += "I";
        }
    } else if (parseInt(numberValue.value) === 74) {
        output.innerText = "LXXIV"
    } else if (parseInt(numberValue.value) === 75) {
        output.innerText = "LXXV"
    } else if (parseInt(numberValue.value) >= 76 && parseInt(numberValue.value) <= 78) {
        output.innerText = seventies + fives;
        for (let i = 75; i < numberValue.value; i++) {
            output.innerText += "I";
        }
    } else if (parseInt(numberValue.value) === 79) {
        output.innerText = "LXXIX"
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