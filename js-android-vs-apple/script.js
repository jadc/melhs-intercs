let img = document.getElementsByTagName("img")[0];
let explore = document.getElementsByClassName("explore")[0].childNodes[1];

let android = () => {
    img.src = "images/Android-Logo.jpg";
    explore.innerHTML = "Android Home";
    explore.style.backgroundColor = "#a4c93b";
    explore.href = "https://www.android.com/";
    document.body.style.backgroundColor = "#a4c93b";
};

let apple = () => {
    img.src = "images/Apple-Logo.jpg";
    explore.innerHTML = "Apple Home";
    explore.style.backgroundColor = "#b6bcca";
    explore.href = "https://www.apple.com/";
    document.body.style.backgroundColor = "#b6bcca";
}