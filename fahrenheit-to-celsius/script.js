let conv = fahrenheit => {
    return (fahrenheit - 32) * (5 / 9);
}

let convertInput = () => {
    let input = document.getElementsByTagName("input")[0].value;
    if(input != ""){
        document.getElementsByTagName("blockquote")[0].innerHTML = `Temperature in Celsius: ${conv(input)}.`;
    }
}