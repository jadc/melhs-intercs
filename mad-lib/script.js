let madlib = () => {
    let inputs = document.getElementsByTagName("input");
    let text = [];
    for(let i of inputs){
        if(i.value == "") return;
        text.push(i.value);
    }

    document.getElementsByTagName("blockquote")[0].innerHTML = `There are too many ${text[0]} ${text[1]}  on this ${text[2]} airplane!”, I screamed.  “Somebody has to ${text[3]} on the ${text[4]} to solve this problem!`;
}