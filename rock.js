function computerPlay() {
    let computerChoice = ["STEIN", "PAPIER", "SCHERE"];
    let computerResult = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    console.log(computerResult)
    return computerResult;
}

function playRound(playerChoice, computerChoice) {

    
    let result = ((playerChoice == "STEIN") && (computerChoice == "PAPIER")) ? "Du verlierst!"
        : (playerChoice =="STEIN" && computerChoice == "SCHERE") ? "Du gewinnst!"
        : (playerChoice =="SCHERE" && computerChoice == "STEIN") ? "Du verlierst!"
        : (playerChoice == "SCHERE" && computerChoice == "PAPIER") ? "Du gewinnst!"
        : (playerChoice == "PAPIER" && computerChoice == "STEIN") ? "Du gewinnst!"
        : (playerChoice == "PAPIER" && computerChoice == "SCHERE") ? "Du verlierst!"
        : "Gleichstand!"
    console.log(result);
    return result;
}

function game() {
    let userScore = 0;
    let compScore = 0;
    for (let i = 0; i<5; i++) {
        let playerChoiceUn = prompt("Schere, Stein oder Papier?");
        let playerChoice = playerChoiceUn.toUpperCase();
        let round = playRound(playerChoice, computerPlay());
        if (round == "Du gewinnst!") {
            userScore++;
        } else if (round =="Du verlierst!") {
            compScore++;
        } else {
            continue;
        }
    }
    alert("Endstand:" + userScore +":" +compScore);
        


}

game();