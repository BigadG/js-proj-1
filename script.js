  let values = ["rock","paper","scissors"]
  let x = 0
  let y = 0
  
  function playRound (selection, computerSelection) {
    computerSelection = values[Math.floor(Math.random() * values.length)];
     let playerSelection = selection.toLowerCase();
  
     if (x >= 3) {
        alert("You won the game!");
        return location.reload();
    }
    else if (y >= 3) {
        alert("You lost the game");
        return location.reload();
    }

     if (playerSelection == "rock") {
         if (computerSelection == "rock") {
             return("It's a tie");
         }
         else if (computerSelection == "paper") {
             return("You lost. Score: " + x + " to " + ++y);
          }
         else if (computerSelection == "scissors") {
             return("You won!! Score: " + ++x + " to " + y);
         }
     }

     else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return("You won!! Score: " + ++x + " to " + y);
     
        }
        else if (computerSelection == "paper") {
            return("It's a tie");
        }
        else if (computerSelection == "scissors") {
            return("You lost. Score: " + x + " to " + ++y);
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return("You lost. Score: " + x + " to " + ++y);
        }
        else if (computerSelection == "paper") {
            return("You won!! Score: " + ++x + " to " + y);
   
        }
        else if (computerSelection == "scissors") {
            return("It's a tie");
        }
    }
    else {
        return("Invalid answer");
    }
 }
 
 computerSelection = values[Math.floor(Math.random() * values.length)];

 const rockButton = document.querySelector('.Rock');
 rockButton.addEventListener('click', () => {
    const rockPlayRound = playRound('rock', computerSelection);
    resultDisplay.textContent = (rockPlayRound);
 });
 
 const paperButton = document.querySelector('.Paper');
 paperButton.addEventListener('click', () => {
    const paperPlayRound = playRound('paper', computerSelection);
    resultDisplay.textContent = (paperPlayRound);
 });

 const scissorsButton = document.querySelector('.Scissors');
 scissorsButton.addEventListener('click', () => {
    const scissorsPlayRound = playRound('scissors', computerSelection);
     resultDisplay.textContent = (scissorsPlayRound);
 });
 
