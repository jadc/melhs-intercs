// ROCK PAPER SCISSORS

// Global Vars (you may add more global vars, but you don't need to)
let count = 3;
let pPick = '';
let cPick = '';
let turns = 0;

// Event Listeners 
// All necessary listeners added for you. Note that the first three have arguments that are used in the event function's parameter variable.
// DO NOT ALTER THIS SECTION
document.getElementById('rock').addEventListener('click', () => pick('rock'));
document.getElementById('paper').addEventListener('click', () => pick('paper'));
document.getElementById('scissors').addEventListener('click', () => pick('scissors'));
document.getElementById('name-btn').addEventListener('click', setNames);

// Event Functions

// When the appropriate picture is selected, pPick and cPick
// are set, then a countdown timer begins.
// DO NOT ALTER THIS FUNCTION
function pick(playerClicked){
    pPick = playerClicked;
    cPick = computerChooses();
    document.getElementById("turns").innerHTML = ++turns;
    countdown();
}

// Allows a 3, 2, 1 countdown before displaying the results of the round.
// DO NOT ALTER THIS SECTION
function countdown() {
    document.getElementById('countdown-area').style.visibility = "visible";
    if (count > 0) {
        document.getElementById('countdown-area').innerHTML = count
        count--;
        setTimeout(countdown, 70);
    }
    else {
        count = 3;
        document.getElementById('countdown-area').style.visibility = "hidden";
        showPicks(pPick, cPick);
        updateScoreArea(getWinner());
    }
}
/*---------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------*/

// Helper Functions

// Prompt the user for player and computer names, then display them in the appropriate area
// Parameters: none
// Return value: none
// Appx lines of code: 4
function setNames(){
    // Prompt user for input
    let playerName = prompt("What is your name?");
    let compName = prompt("What would you like the name of the CPU to be?");
    // If user presses "OK" without inputting anything, set names to null
    if(playerName == "") playerName = null;
    if(compName == "") compName = null;
    // If names are not null (if they didn't press cancel OR they didn't press OK with no input) then set the HTML.
    if(playerName != null) document.getElementById("p-name").innerHTML = playerName;
    if(compName != null) document.getElementById("c-name").innerHTML = compName;
}

// Read the players name from the appropriate section in the HTML ()
// Parameters: none
// Return value: the player's name
// Appx lines of code: 1
function getPlayerName(){
    return document.getElementById("p-name").innerHTML;
}

// Read the computer's name from the appropriate section in the HTML
// Parameters: none
// Return value: the computer's name
// Appx lines of code: 1
function getCompName(){
    return document.getElementById("c-name").innerHTML;
}

// Simulate the computer randomly choosing between rock, paper or scissors at 0.33 chance for each.
// Parameters: none
// Return value: A string - 'rock' , 'paper', or 'scissors'
// Appx lines of code: 8
function computerChooses(){
   let rand = Math.random();
   if(rand < 0.33) return "rock";
   if(rand < 0.66) return "paper";
   return "scissors";
}

// Compare player pick and computer pick to see who wins
// Parameters: none
// Return value: The name of the player who won, or the string 'tie'
// Appx lines of code: 10
function getWinner(){
    if(pPick == cPick) return "tie";
    if(pPick == "rock"){
        if(cPick == "paper"){ 
            return getCompName(); // Player: Rock, Computer: Paper
        }else{ return getPlayerName(); }
    }else if(pPick == "paper"){
        if(cPick == "scissors"){
            return getCompName(); // Player: Paper, Computer: Scissors
        }else{ return getPlayerName(); }
    }else if(pPick == "scissors"){
        if(cPick == "rock"){
            return getCompName(); // Player: Scissors, Computer: Rock
        }else{ return getPlayerName(); }
    }
}

// Show the updated player/computer score in the table and display in text who won in the 'winner-text' area of the HTML
// Parameters: The name of the winner (you must use this parameter in your code, and not a global variable)
// Return value: none
// Appx lines of code: 12
function updateScoreArea(){
    if(getWinner() == getPlayerName()){
        document.getElementById("p-score").innerHTML++;
        document.getElementById("p-win").innerHTML = getWinRate(getPlayerName());
        return;
    } 
    if(getWinner() == getCompName()){
        document.getElementById("c-score").innerHTML++;
        document.getElementById("c-win").innerHTML = getWinRate(getCompName());
        return;
    }
}

// Update the display area to show what the player/computer chose for this round
// Parameters: none
// Return value: none
// Appx lines of code: 2
function showPicks(){
    document.getElementById('p-move').src = 'images/' + pPick + '.png';
    document.getElementById('c-move').src = 'images/' + cPick + '.png';  
}

// Creativity Function. Add your own unique aspect to this project by coding
// your own function(s). Your function must have either parameters or return values
// or both. Change the name of the function to indicate what it will do.

// This function calculates the chances of the player winning the next round
// based on their average wins in the game. Note that it does not treat ties as a loss.
function getWinRate(person){
    person = person.toLowerCase();
    let score;
    if(person == getPlayerName().toLowerCase()){
        score = document.getElementById("p-score").innerHTML;
    }else 
    if(person == getCompName().toLowerCase()){
        score = document.getElementById("c-score").innerHTML; 
    }
    else { 
        throw `Invalid argument: Name "${person}" not found.`; 
    }
    if(turns <= 0) return "0.00%";
    let winRatePercent = (score / turns) * 100;
    return `${winRatePercent.toFixed(2)}%`;
}