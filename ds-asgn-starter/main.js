// Get data
let map = {};
(_ => {
    // Get raw data into array
    fetch("grocery-data.txt")
    .then(r => { return r.text() })
    .then(d => { return d.split("\r\n") })
    .then(a => {
        // Create map with array
        for(let i = 0; i < a.length; i++){
            let productName = a[i].split(";").shift();
            let priceAndLocation = a[i].split(";").slice(1);
            map[productName] = {
                "price": priceAndLocation[0],
                "location": priceAndLocation[1]
            }
        }
        // This map has keys for every products
        // and values of an array of index 2
        // which holds the price and location
    });
})();

// DOM Elements
let out = document.getElementById('output');

// Main Menu & Go Button
document.getElementById('go').addEventListener('click', mainMenu);

let t = 0;
let displayTotal = total => {
    let totalEl = document.createElement("h3");
    totalEl.innerHTML = `Retrieved ${total} products...`
    out.prepend(totalEl);
}
let displayProduct = product => {
    let p = document.createElement("p");
    p.innerHTML = `<u>${product}</u><br><b>$${map[product].price}</b> from <i>${map[product].location}</i></b>`;
    out.append(p);
}

function mainMenu() {
    // Get value of menu select element
    let selection = document.getElementById('menu').value;

    // Clear previous output
    out.innerHTML = "";
    t = 0;

    // Display All
    if(selection == 'option1') {
        for(let product in map){
            displayProduct(product);
            t++;
        }
        displayTotal(t);
    }

    // Display Price Range
    if(selection == 'option2') {
        let min = Number(prompt("What is the lowest you want to pay?"));
        let max = Number(prompt("What is the highest you want to pay?"));

        if(isNaN(min) || isNaN(max) || min == "" || max == "") return alert("Invalid input.");

        for(let product in map){
            if(map[product].price > min && map[product].price < max){
                displayProduct(product);
                t++;
            }
        }
        displayTotal(t);
    }

    // Display Country of Origin
    if(selection == 'option3') {
        let country = prompt("From which country?");

        for(let product in map){
            if(map[product].location.toLowerCase() == country.toLowerCase()) displayProduct(product);
            t++;
        }
        displayTotal(t);
    }

    // Display Random
    if(selection == 'option4') {
        
    }

    // Inflation
    if(selection == 'option5') {
        
    }

    // Price Stats
    if(selection == 'option6') {
        
    }

    // Add Product
    if(selection == 'option7') {
        
    }

    // Remove Products
    if(selection == 'option8') {
        
    }

    // Remove Specific Product
    if(selection == 'option9') {
        
    }
}