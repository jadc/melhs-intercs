// DS ASGN STARTER TEMPLATE

// DOM Elements
let outputEl = document.getElementById('output');

// Main Menu & Go Button
document.getElementById('go').addEventListener('click', mainMenu);

function mainMenu() {
    // Get value of menu select element
    let selection = document.getElementById('menu').value;

    // Take action based on menu selection
    if (selection == 'option1') {
        outputEl.innerHTML = 'You selected Option 1';
    } else if (selection == 'option2') {
        outputEl.innerHTML = 'You selected Option 2';
    } else if (selection == 'option3') {
        outputEl.innerHTML = 'You selected Option 3';
    }
}