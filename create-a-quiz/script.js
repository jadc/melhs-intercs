let mark = () => {
    let score = 0;
    // Score count and color change
    for(let i of document.getElementsByTagName("label")){
        if(i.className == "answer"){
            i.style.backgroundColor = "rgb(65, 238, 88)";
            if(i.childNodes[0].checked) score++;
        }else{
            i.style.backgroundColor = "rgb(238, 65, 65)";
        }
    }
    // Score
    let feedback;
    if(score / 4 == 0.00) feedback = "I have no words for you.";
    if(score / 4 == 0.25) feedback = "Not surprised.";
    if(score / 4 == 0.50) feedback = "That's alright.";
    if(score / 4 == 0.75) feedback = "Pretty good.";
    if(score / 4 == 1.00) feedback = "You used inspect element, didn't you?";
    alert(`You scored ${score} out of the 4 questions. (${(score/4)*100}%) \n${feedback}`);
    
    // Make all descriptions visible
    for(let i of document.getElementsByTagName("p")) i.style.display = "block";
}