// Number Analyzer

// HTML Elements
let numEl = document.getElementById('numInput');

// Add Event Listener
numEl.addEventListener('change', analyzeNumber);

// Event Function
function analyzeNumber() {
    // Get Number from Input Element
    let numInput = Number(numEl.value);

    // Analyze Number and display results
    document.getElementById('sign').innerHTML = getSign(numInput);
    document.getElementById('even-odd').innerHTML = evenOrOdd(numInput);
    document.getElementById('multiple').innerHTML = multipleOf10(numInput);
}


// Analyze Functions
let getSign = input => {
    if(input > 0){
        return "pos";
    }else{
        if(input == 0){
            return "zero";
        }else{
            return "neg";
        }
    }
}

let evenOrOdd = input => {
    if(input % 2 == 0){
        return "even";
    }else{
        return "odd";
    }
}

let multipleOf10 = input => {
    return (input % 10 == 0);
}