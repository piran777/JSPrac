
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button') //we only have 3 butttons and have no plan to add more so we jsut use quereyselectorall
let userChoice
let computerChoice
let result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => { 
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    generateResult()
})) 

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) +1  // its length is 3
    

    if (randomNumber ===1){
        computerChoice = 'rock'

    }
    if (randomNumber ===2){
    computerChoice = 'scissors'
}

    if (computerChoice ===3){
        computerChoice= ' paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function generateResult(){
    if (computerChoice === userChoice){
        result = 'draw'
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'you lost'
}
if (computerChoice === 'paper' && userChoice === 'scissors'){
    result = 'you win'
}
if (computerChoice === 'paper' && userChoice === 'rock'){
    result = 'you lost'
}
if (computerChoice === 'scissors' && userChoice === 'rock'){
    result = 'you win'
}
if (computerChoice === 'scissors' && userChoice === 'papers'){
    result = 'you lost'
}
resultDisplay.innerHTML = result
}