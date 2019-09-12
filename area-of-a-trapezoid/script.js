let calc = (top, bottom, height) => {
    return (1/2) * (top + bottom) * height;
}

let calcInput = () => {
    let inputs = document.getElementsByTagName("input");
    for(let i of inputs){
        if(i.value == "") return;
    }
    let a = inputs[0].value;
    let b = inputs[1].value;
    let h = inputs[2].value;
    document.getElementsByTagName("blockquote")[0].innerHTML = `The area of the trapezoid is ${calc(a, b, h)}.`;
}