let currentPlayer = "X";
let timesClicked = 0;



let cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);

}

let winner = document.getElementById("Winner");
let draw = document.getElementById("Winner");

function cellClicked(event) {
    timesClicked++;
    if (event.target.textContent == "") {
        event.target.textContent = currentPlayer
        if (currentPlayer == "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }
    } // Wins by X in horizontal rows
    if (
        ((cells[0].textContent == "X") && (cells[1].textContent == "X") && (cells[2].textContent == "X")) ||
        ((cells[3].textContent == "X") && (cells[4].textContent == "X") && (cells[5].textContent == "X")) ||
        ((cells[6].textContent == "X") && (cells[7].textContent == "X") && (cells[8].textContent == "X")) ||
        //Wins by X in vertical rows
        ((cells[0].textContent == "X") && (cells[3].textContent == "X") && (cells[6].textContent == "X")) ||
        ((cells[1].textContent == "X") && (cells[4].textContent == "X") && (cells[7].textContent == "X")) ||
        ((cells[2].textContent == "X") && (cells[5].textContent == "X") && (cells[8].textContent == "X")) ||
        // Wins by X in slanted??? rows, yeah sure   
        ((cells[0].textContent == "X") && (cells[4].textContent == "X") && (cells[8].textContent == "X")) ||
        ((cells[2].textContent == "X") && (cells[4].textContent == "X") && (cells[6].textContent == "X"))) {

        //    winner.innerHTML ="X wins"
        gameResetX();

    }


    else if (
        ((cells[0].textContent == "O") && (cells[1].textContent == "O") && (cells[2].textContent == "O")) ||
        ((cells[3].textContent == "O") && (cells[4].textContent == "O") && (cells[5].textContent == "O")) ||
        ((cells[6].textContent == "O") && (cells[7].textContent == "O") && (cells[8].textContent == "O")) ||
        //Wins by O in vertical rows
        ((cells[0].textContent == "O") && (cells[3].textContent == "O") && (cells[6].textContent == "O")) ||
        ((cells[1].textContent == "O") && (cells[4].textContent == "O") && (cells[7].textContent == "O")) ||
        ((cells[2].textContent == "O") && (cells[5].textContent == "O") && (cells[8].textContent == "O")) ||
        // Wins by O in slanted??? rows, yeah sure   
        ((cells[0].textContent == "O") && (cells[4].textContent == "O") && (cells[8].textContent == "O")) ||
        ((cells[2].textContent == "O") && (cells[4].textContent == "O") && (cells[6].textContent == "O"))) {

        // winner.innerHTML ="O wins!"
        gameResetO();
    } else if (timesClicked == 9) {
        gameResetNa();

    }
}

function gameResetX() {
    timesClicked = 0;
    winner.innerHTML = "X wins, New game";
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    }
}

function gameResetO() {
    timesClicked = 0;
    winner.innerHTML = "O wins, New game";
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    }
}

function gameResetNa() {
    timesClicked = 0;
    winner.innerHTML = "No one wins, New game";
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    }
}

// function stopListening() {
//     if (event.target.textContent == "X", "O") {
//         for (let i = 0; i < cells.length; i++) {
//             cells[i].removeEventListener('click', cellClicked)
//         }
//     }
// }
