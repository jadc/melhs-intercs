let roll = () => {
    let rng = Math.random();
    if(rng < 0.25) return "banana";
    if(rng < 0.50) return "green_shell";
    if(rng < 0.65) return "star";
    if(rng < 0.80) return "golden_mushroom";
    if(rng < 1.00) return "bullet_bill";
}

let newRoll = () => {
    let r = roll();
    document.getElementsByTagName("img")[0].src = `images/${r}.png`;
    let quantity = document.getElementById(r).innerHTML;
    quantity++;
    document.getElementById(r).innerHTML = quantity;
}