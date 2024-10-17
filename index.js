const numberBank = [],
    odds = [],
    evens = [];


function captureNumber(e) {
    e.preventDefault();

    let number = document.getElementById("number");

    if (number.value !== "") {
        numberBank.push(number.value);
        number.value = "";

        updateOutput();
    }
}

function sortArrIntoOddsAndEvens(arr) {
    arr.forEach(num => {
        if (num % 2 === 0) {
            evens.push(num);
            updateEvensOutput();
        } else {
            odds.push(num);
            updateOddsOutput();
        }
    });
}

function updateOddsOutput() {
    let output = document.getElementById("oddOutput");
    output.innerHTML = odds.join(", ");
}

function updateEvensOutput() {
    let output = document.getElementById("evenOutput");
    output.innerHTML = evens.join(", ");
}

function updateOutput() {
    let output = document.getElementById("numberOutput");
    output.innerHTML = numberBank.join(", ");
}

function sortOne() {
    let oneArr = numberBank.splice(0, 1);
    updateOutput();
    sortArrIntoOddsAndEvens(oneArr);
}

function sortAll() {
    sortArrIntoOddsAndEvens(numberBank);
    numberBank.length = 0;
    updateOutput();
}


document.getElementById("numberSubmit").addEventListener("click", captureNumber);
document.getElementById("sortOne").addEventListener("click", sortOne);
document.getElementById("sortAll").addEventListener("click", sortAll);