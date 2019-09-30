let cone = document.getElementsByTagName("td")[0];
let sphere = document.getElementsByTagName("td")[1];

let choose = (wantCone) => {
    let img = document.getElementsByTagName("img")[0];

    // If chose cone
    if(wantCone){
        cone.style.display = "block";
        sphere.style.display = "none";
        img.src = "cone.png";
    }else{
        cone.style.display = "none";
        sphere.style.display = "block";
        img.src = "sphere.png";
    }
}

let calcCone = () => {
    let radius = cone.childNodes[3].childNodes[1].value;
    let height = cone.childNodes[5].childNodes[1].value;
    let answer = cone.childNodes[9].childNodes[1];

    answer.innerHTML = round((1 / 3) * Math.PI * Math.pow(radius, 2) * height);
}

let calcSphere = () => {
    let radius = sphere.childNodes[3].childNodes[1].value;
    let answer = sphere.childNodes[7].childNodes[1];

    answer.innerHTML = round((4 / 3) * Math.PI * Math.pow(radius, 3));
}

let round = input => {
    return Math.round(input * 100) / 100;
}