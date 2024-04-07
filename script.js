function empty() {
    if (number.value.length <= 0) {
        alert("Please enter a valid number");
    } else if (number.value <= -1){
        alert("Please enter a number greater than or equal to 1")
    }
}