// Get data
let map = {};
(_ => {
    // Get raw data into array
    fetch("grocery-data.txt")
    .then(r => { return r.text() })
    .then(d => { return d.split("\r\n") })
    .then(a => {
        // Create object with array
        for(let i = 0; i < a.length; i++){
            let productName = a[i].split(";").shift();
            let priceAndLocation = a[i].split(";").slice(1);
            map[productName] = {
                "price": Number(priceAndLocation[0]),
                "location": priceAndLocation[1]
            }
        }
        // The 'map' object has properties for every product
        // and value of an array of index 2
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
let displayMsg = msg => {
    let msgEl = document.createElement("h3");
    msgEl.innerHTML = msg;
    out.prepend(msgEl);
}
let displayProduct = product => {
    let p = document.createElement("p");
    p.innerHTML = `<u>${product}</u><br><b>$${map[product].price.toFixed(2)}</b> from <i>${map[product].location}</i></b>`;
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
            if(map[product].location.toLowerCase() == country.toLowerCase()){
                displayProduct(product);
                t++;
            }
        }
        displayTotal(t);
    }

    // Display Random
    if(selection == 'option4') {
        let array = Object.keys(map);
        displayProduct(array[Math.floor(array.length * Math.random())]);
        displayTotal(1);
    }

    // Inflation
    if(selection == 'option5') {
        displayMsg("All prices have increased by 7%. Sweet, sweet capitalism...");
        for(let product in map){
            map[product].price *= 1.07;
            displayProduct(product);
            t++;
        }
        displayTotal(t);
    }

    // Price Stats
    if(selection == 'option6') {
        // This function is a little confusing. Imagine 'a' and 'b' are
        // neighbouring elements in an array. If the function returns a negative,
        // the 'a' element is placed after the 'b' element, if the function returns
        // positive, the 'a' element is placed before the 'b' element. Zero keeps their position.
        // I use this to sort the map lowest to highest price, which would not be possible
        // with just .sort() and no arguments.
        let array = Object.keys(map).sort((a, b) => {
            if(map[a].price < map[b].price) return -1;
            if(map[a].price > map[b].price) return 1;
            return 0;
        });
        let min = map[array[0]].price;
        let max = map[array[array.length - 1]].price;
        let avg = 0;
        for(let product in map){
            avg += map[product].price;
        }
        avg = avg / array.length; 

        displayMsg(`Minimum product price is $${min.toFixed(2)}`);
        displayMsg(`Maximum product price is $${max.toFixed(2)}`);
        displayMsg(`Average product price is $${avg.toFixed(2)}`);
    }

    // Add Product
    if(selection == 'option7') {
        let name = prompt("What is the name of the product?");
        let price = Number(prompt("What is the price of the product, in dollars?"));
        let country = prompt("What is the country of origin of the product?");
        if(name == "") return alert("Invalid name.");
        if(isNaN(price) || price == "") return alert("Invalid price.");
        if(country == "") return alert("Invalid country.");

        map[name] = {
            "price": price,
            "location": country
        }

        displayMsg(`A new product with a name of ${name}, price of $${price.toFixed(2)} and country of origin of ${country} was added.`);
    }

    // Remove Products
    if(selection == 'option8') {
        let deleted = 0;
        for(let product in map){
            if(map[product].price < 15) {
                delete map[product];
                deleted++;
            }
        }
        displayMsg(`${deleted} products were under $15, and were removed.`);
    }

    // Remove Specific Product
    if(selection == 'option9') {
        let choice = prompt("Which product would you like to removed?");
        for(let product in map){
            if(choice.toLowerCase() == product.toLowerCase()){
                displayMsg(`"${product}" was removed.`);
                return delete map[product];
            }
        }
        displayMsg("The product was not found.");
    }
}