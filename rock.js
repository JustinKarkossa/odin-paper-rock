function computerPlay() {
    let computerChoice = ["Rock", "Paper", "Schere"];
    let computerResult = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    console.log(computerResult);
}

computerPlay();