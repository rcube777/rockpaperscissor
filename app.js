let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random () * 3);
    return options [randIdx];
}
const drawGame = () => {
    console.log ("game is draw");
}

const showWinner = () => {
    console.log ("")
}

const playGame = (userChoice) => {
    console.log ("userchoice = ", userChoice);
    const compChoice = genCompChoice ();
    console.log ("compchoice = ", compChoice);

    if (userChoice === compChoice){
        // draw
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock"){
            // paper, scissor
            userWin = compChoice === paper ? false : true; 
        }
        else if (userChoice === "paper") {
            // rock, scissor
            userWin = compChoice === rock ? true : false;
        }
        else if (userChoice === "scissor"){
            // rock, paper
            userWin = compChoice === rock ? false : true;
        }
        showWinner (userWin);
    }

}

choices.forEach((choice) => {
    choice.addEventListener ("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame (userChoice);
    })
})