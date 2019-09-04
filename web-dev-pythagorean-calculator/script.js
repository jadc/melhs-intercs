function py(a, b){
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(2);
}

let pytha = () => {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    if(a != "" && b != "") document.getElementById("answer").innerHTML = py(a, b);
}