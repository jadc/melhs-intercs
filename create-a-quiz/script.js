let mark = () => {
    let score = 0;
    for(let i of document.getElementsByTagName("label")){
        if(i.className == "answer"){
            i.style.backgroundColor = "rgb(65, 238, 88)";
            if(i.checked) score++;
        }else{
            i.style.backgroundColor = "rgb(238, 65, 65)";
        }
    }
    alert(score + "/4");
}