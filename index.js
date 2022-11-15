//Create variables
let playerChoice = "rock"
let machineChoice = ""
let playerPoints = 0
let machinePoints = 0
let comment = document.getElementById("comment")
let isAlive = true 
let rockBtn = document.getElementById("rock-btn")
let paperBtn = document.getElementById("paper-btn")
let scissorsBtn = document.getElementById("scissors-btn")
let playerEl = document.getElementById("player-el")
let machineEl = document.getElementById("machine-el")
let randomEl = document.getElementById("random-el")


//Create random machineChoice
function randomChoice() {
    let choices = ["rock", "paper", "scissors"]
    let i = Math.floor(Math.random()*3)
    machineChoice = choices[i]
    randomEl.textContent = machineChoice

}

//Rules of the game
function rules() {
    if (playerChoice == "rock" && machineChoice == "paper") {
        comment.textContent = "Machine win! Paper cover the rock"
        machinePoints += 1
    }else if (playerChoice == "rock" && machineChoice == "scissors") {
        comment.textContent = "You win! Rock smashes scissors"
        playerPoints += 1
    }else if (playerChoice == "rock" && machineChoice == "rock") {
        comment.textContent = "Try again!"
    }else if (playerChoice == "paper" && machineChoice == "rock") {
        comment.textContent = "You win! Paper cover the rock"
        playerPoints += 1
    }else if (playerChoice == "paper" && machineChoice == "paper") {
        comment.textContent = "Try again!"
    }else if (playerChoice == "paper" && machineChoice == "scissors") {
        comment.textContent = "Machine win! Scissors cut paper"
        machinePoints += 1
    }else if (playerChoice == "scissors" && machineChoice == "rock") {
        comment.textContent = "Machine win! Rock smashes scissors"
        machinePoints += 1
    }else if (playerChoice == "scissors" && machineChoice == "paper") {
        comment.textContent = "You win! Scissors cut paper"
        playerPoints += 1
    }else if (playerChoice == "scissors" && machineChoice == "scissors") {
        comment.textContent = "Try again!"
    }
    playerEl.textContent = playerPoints
    machineEl.textContent = machinePoints
}

//Invoking JS functions on clicked buttons:
//Rock button
rockBtn.addEventListener("click", function() {
    playerChoice = "rock"
    randomChoice();
    rules();
})

//Paper button
paperBtn.addEventListener("click", function() {
    playerChoice = "paper"
    randomChoice();
    rules();
})

//Scissors button
scissorsBtn.addEventListener("click", function () {
    playerChoice = "scissors"
    randomChoice();
    rules();
}
)