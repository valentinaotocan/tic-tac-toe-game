const cells = document.querySelectorAll(".cell");
const restartBtn = document.getElementById("restartBtn");
const textMessage = document.getElementsByClassName("text")[0];
const playerX = "X";
const playerO = "0";
let currentPlayer = playerX;
let board = [];

newGame();

function newGame() {
  cells.forEach((cell) => {
    cell.addEventListener("click", cellClicked);
  });
}

function cellClicked(e) {
  const id = e.target.id;
  if (!board[id]) {
    board[id] = currentPlayer;
    e.target.innerHTML = currentPlayer;

    if (playerWon()) {
      message();
      return;
    }
    // else if (draw()) {
    //   message();
    //   return;
    // }
    
    if (currentPlayer === playerX) {
      return (currentPlayer = playerO);
    } else {
      return (currentPlayer = playerX);
    }
  }
  
}

function playerWon() {
  // horizontally
  if (board[0] === currentPlayer && board[0] === board[1] && board[1] === board[2]) {
    return true;
  }
  if (board[3] === currentPlayer && board[3] === board[4] && board[4] === board[5]) {
    return true;
  }
  if (board[6] === currentPlayer && board[6] === board[7] && board[6] === board[8]) {
    return true;
  }
  //vertically 
  if (board[0] === currentPlayer && board[0] === board[3] && board[3] === board[6]) {
    return true;
  }
  if (board[1] === currentPlayer && board[1] === board[4] && board[4] === board[7]) {
    return true;
  }
  if (board[2] === currentPlayer && board[2] === board[5] && board[5] === board[8]) {
    return true;
  }
  // diagonally
  if (board[0] === currentPlayer && board[0] === board[4] && board[4] === board[8]) {
    return true;
  }
  if (board[6] === currentPlayer && board[6] === board[4] && board[4] === board[2]) {
    return true;
  }
}

// function draw() {
//   if (!playerWon()) {
//     return true;
//   }
// }

function message() {
  textMessage.classList.add('message');
  if (playerWon()) {
    return textMessage.innerHTML = `Player ${currentPlayer} won!`
  } else if (draw()) {
    return textMessage.innerHTML = "Draw!"
  } 
}

restartBtn.addEventListener("click", restartGame);

function restartGame() {
  currentPlayer = playerX;
  board = [];
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
  textMessage.classList.remove('message');
  textMessage.innerHTML = '';
}


