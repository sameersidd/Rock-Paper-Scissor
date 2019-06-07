var userScore = 0; 
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div     = document.querySelector(".result");
const rock_div       = document.getElementById("rock");
const paper_div      = document.getElementById("paper");
const scissor_div    = document.getElementById("scissor");

function computerChoice () {
    const choices = ['Rock', 'Paper', 'Scissor'];
    return choices[Math.floor(Math.random() * 3)];
}

function game (userChoice) {
    const compChoice = computerChoice();
    switch (userChoice + compChoice) {
        case "PaperRock":
        case "RockScissor":
        case "ScissorPaper":
            result_div.textContent = `${userChoice} beats ${compChoice}. You win.`;
            userScore++;
            break;
        case "RockPaper":
        case "PaperScissor":
        case "ScissorRock":
            result_div.textContent = `${compChoice} beats ${userChoice}. You lose.`;
            compScore++;
            break;
        case "RockRock":
        case "ScissorScissor":
        case "PaperPaper":
            result_div.textContent = "It's a draw...";
            break;
    }
}

function updateScore () {
    userScore_span.textContent = userScore;
    compScore_span.textContent = compScore;
    //console.log(userScore);
    //console.log(compScore);
}

function main() {
    rock_div.addEventListener('click', function() {
        game('Rock');
        updateScore();
    });
    paper_div.addEventListener('click', function() {
        game('Paper');
        updateScore();
    });
    scissor_div.addEventListener('click', function() {
        game('Scissor');
        updateScore();
    });
    
}

main();