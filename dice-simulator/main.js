// Function regarding dice rolls
let rollDie = () => {
    // Make the rolls, max 6, min 1
    let houseRoll = Math.round(Math.random() * 5 + 1);
    let homeRoll = Math.round(Math.random() * 5 + 1);

    // Gets bets. If bets is not between 100 and 1000, ask for new input
    if(document.getElementById("bet-input").value < 100 || document.getElementById("bet-input").value > 1000) return alert("You must have a bet between $100 and $1000");
    let bet = parseInt(document.getElementById("bet-input").value);
    
    // Change dice to reflect roll
    document.getElementById("house-die").src = `images/${houseRoll}.png`;
    document.getElementById("player-die").src = `images/${homeRoll}.png`;

    let feedback = document.getElementById("feedback");

    // If player wins
    if(homeRoll > houseRoll){
        incFunds(bet);
        feedback.style.color = "green";
        feedback.innerHTML = `You won! +$${bet}`;
    // If player loses
    }else if(homeRoll < houseRoll){
        incFunds(-bet);
        feedback.style.color = "red";
        feedback.innerHTML = `You lost! -$${bet}`;
    // If player ties
    }else{
        feedback.style.color = "inherit";
        feedback.innerHTML = `A tie! No change.`;
    }
}

// Funds Functions
let setFunds = funds => {
    // Set funds
    document.getElementById("funds").innerHTML = funds;
    // Changes page title to funds
    document.title = "Funds: $" + document.getElementById("funds").innerHTML;
    // Set funds color
    let color = "inherit";
    if(funds > 0) color = "green";
    if(funds < 0) color = "red";
    document.getElementById("funds").style.color = color;
}

let getFunds = () => {
    return parseInt(document.getElementById("funds").innerHTML);
}

let incFunds = inc => {
    setFunds(getFunds() + inc);
}

// Life of Luxury
let purchase = () => {
    // Creates a new <img> element and follows criteria to choose random image based off of funds
    let item = document.createElement("img");
    item.className = "item";
    let rng = Math.random();
    if(getFunds() <= 1000){
        item.src = "images/socks.png";
    }else if(getFunds() > 1000 && getFunds() < 5000){
        if(rng > 0) item.src = "images/ring.png";
        if(rng > (1/3)) item.src = "images/bike.jpg";
        if(rng > (2/3)) item.src = "images/trip.jpg";
        setFunds(getFunds() - 1000);
    }else if(getFunds() >= 5000){
        if(rng > 0) item.src = "images/motorcycle.jpg";
        if(rng > (1/4)) item.src = "images/house.png";
        if(rng > (2/4)) item.src = "images/boat.png";
        if(rng > (3/4)) item.src = "images/car.png";
        setFunds(getFunds() - 5000);
    }

    // Inserts and appends new <img> to <p id="loot"></p> element
    document.getElementById("loot").appendChild(item);

    // Click an item to remove it (this is my extra 20% >:[)
    let items = document.getElementsByClassName("item");
    for(let i = 0; i < items.length; i++){
        items[i].addEventListener("click", e => {
            e.target.style.transform = "scale(0.1)";
            setTimeout(() => {
                e.target.remove();
            }, 100);
        });
    }
}

(() => {
    // Event Listeners
    document.getElementById("play-btn").addEventListener("click", rollDie);
    document.getElementById("purchase-btn").addEventListener("click", purchase);
})();