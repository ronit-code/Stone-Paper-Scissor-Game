let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")



const genComChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
}


const drawGame = () => {
    msg.innerText = "its a draw";
}

const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {

        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beat ${comChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Loose! Your ${userChoice} beaten by ${comChoice}`;

        msg.style.backgroundColor = "red";

    }
}
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);

    const comChoice = genComChoice();
    console.log("Computer choice = ", comChoice);

    if (userChoice == comChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = comChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = comChoice === "scissor" ? false : true;
        }
        else {
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});