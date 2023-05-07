function getComputerChoice() {
    let values = ["rock","paper","scissors"],
    choice = values[Math.floor(Math.random() * values.length)];
    return choice;
  }
  let computerSelection = getComputerChoice();
  let selection = prompt("Rock, paper, or scissors?");
  let x = 0
  let y = 0
  
  
  function playRound (selection, getComputerChoice) {
     let playerSelection = selection.toLowerCase();
  
  
     if (playerSelection == "rock") {
         if (getComputerChoice == "rock") {
             alert("It's a tie")  
         }
         else if (getComputerChoice == "paper") {
             alert("You lost. Score: " + x + " to " + ++y)
          }
         else if (getComputerChoice == "scissors") {
             alert("You won! Score: " + ++x + " to " + y)   
         }
     }


     else if (playerSelection == "paper") {
        if (getComputerChoice == "rock") {
            alert("You won! Score: " + ++x + " to " + y)
     
        }
        else if (getComputerChoice == "paper") {
            alert("It's a tie")
        }
        else if (getComputerChoice == "scissors") {
            alert("You lost. Score: " + x + " to " + ++y)
        }
    }
    else if (playerSelection == "scissors") {
        if (getComputerChoice == "rock") {
            alert("You lost. Score: " + x + " to " + ++y)
        }
        else if (getComputerChoice == "paper") {
            alert("You won! Score: " + ++x + " to " + y)
   
        }
        else if (getComputerChoice == "scissors") {
            alert("It's a tie")
        }
    }
    else {
        alert("Invalid answer")
    }
    return (x + " to " + y)
 }
 
 
 function gameResult() {
    let playRoundVar = playRound(selection, getComputerChoice());
    let playRoundX = Number(playRoundVar.charAt(0))
    let playRoundY = Number(playRoundVar.charAt(5))
 
 
    if (playRoundX >= 2) {
        alert("You won the game!")
        location.reload()
        return
        }
        else if (playRoundY >= 2) {
            alert("You lost the game")
           location.reload()
            return
            }
     }
     
        