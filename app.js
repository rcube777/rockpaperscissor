let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgContainer = document.querySelector(".msg-container");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const newGameBtn = document.querySelector("#newgame");
const gameContainer = document.querySelector(".newgame-container");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random () * 3);
    return options [randIdx];
}
const compChoice = genCompChoice ();
const drawGame = () => {
    console.log ("game is draw");
    msg.innerText = "Game is draw. Play again"
    msg.style.backgroundColor = "#081B31";
    reset ();

}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `you select ${userChoice} and Computer select ${compChoice} So, You win. Congratulations!!`;
        msg.style.backgroundColor = "green";
        reset ();
        
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lost");
        msg.innerText = `you select ${userChoice} and Computer select ${compChoice} So, you lost the match`;
        msg.style.backgroundColor = "red";
        reset ();

    }
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
            userWin = compChoice === "paper" ? false : true; 
        }
        else if (userChoice === "paper") {
            // rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner (userWin, userChoice, compChoice);
    }

}



choices.forEach((choice) => {
    choice.addEventListener ("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame (userChoice);
        msgContainer.classList.remove("hide");
    })
})
const reset = () => {
    gameContainer.classList.remove("hide");
}

const newGame = () => {
    msgContainer.classList.add ("hide");
    resetScore();
}

let resetScore = () => {
    userScore =0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
}

newGameBtn.addEventListener("click", newGame);
