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
}

let playerChoiceUn = prompt("Schere, Stein oder Papier?");
let playerChoice = playerChoiceUn.toUpperCase();

playRound(playerChoice, computerPlay());