
let previous_guess = document.getElementById("answer")
let remaining_guess = document.getElementById("gear")

let total_guess = 10
let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);

function Guess(){
    total_guess = total_guess -1;
    remaining_guess.innerHTML = total_guess;
    let input = document.getElementById("guessInput").value
    previous_guess.innerHTML = input
    if(input==randomNumber){
        alert("Congratulations! You guessed the correct number.")
    }
    else if(input>randomNumber){
        alert("Too high! Try again.")
    }
    else if(input<randomNumber){
        alert("Too low! Try again.")
    }
    if(total_guess<=0){
        alert("Game Over! You lost. The correct number was " + randomNumber)
    }

}