window.onload = function () {
    var boxes = document.getElementsByClassName("box");
    for (const ele of boxes) {
      ele.addEventListener("click", marker);
    }
  
    var player1 = "X";
    var player2 = "O";
    var chance = 1;
    var board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
  
    function marker(e) {
      if (e.target.innerText != "") {
        alert("Already Marked");
        return;
      }
  
      const cur = e.target;
      var x = parseInt(cur.id / 3);
      var y = parseInt(cur.id % 3);
  
      if (chance == 1) {
        e.target.innerText = player1;
        board[x][y] = player1;
        chance = 2;
      } else {
        e.target.innerText = player2;
        board[x][y] = player2;
        chance = 1;
      }
  
      if (checkWinner()) {
        var message = (chance == 2 ? "Player 1" : "Player 2") + " won the game!";
        setTimeout(function () {
          alert(message);
          window.location.reload(); 
        }, 1000);
      }
    }
  
    function checkWinner() {
      // Check rows
      for (let i = 0; i < 3; i++) {
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != "") {
          return true;
        }
      }
  
      // Check columns
      for (let i = 0; i < 3; i++) {
        if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != "") {
          return true;
        }
      }
  
      // Check diagonal (left to right)
      if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != "") {
        return true;
      }
  
      // Check diagonal (right to left)
      if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != "") {
        return true;
      }
  
      return false;
    }
  };
  