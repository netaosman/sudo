


/** 
 * The function checking 
 * if the board if full.
*/
function isFullBoard(board) {
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            if (board[x][y] == 0) {
                return false;
            }
        }
    }
    return true;
}

/** 
 * Validator function.
*  Checking the options numbers through the rows,
*  columns, and the 3x3 squares.
*/
function cellOptions(board, i, j) {

    var options = {};
    for (let t = 1; t < 10; t++) {
        options[t] = 0;
    }

    //Horizontal checking
    for (let y = 0; y < 9; y++) {
        if (board[i][y] != 0) {
            options[board[i][y]] = 1;
        }
    }

    //Verticle checking
    for (let x = 0; x < 9; x++) {
        if (board[x][j] != 0) {
            options[board[x][j]] = 1;
        }
    }

    //Square 3X3
    let first = 0;
    let second = 0;

    if (i >= 0 && i <= 2) {
        first = 0;
    } else if (i >= 3 & i <= 5) {
        first = 3;
    } else {

        first = 6;

        if (j >= 0 && j <= 2) {
            second = 0;
        } else if (j >= 3 & j <= 5) {
            second = 3;
        } else {
            second = 6;
        }
    }

    for (let x = first; x < first + 3; x++) {
        for (let y = second; y < second + 3; y++) {

            if (board[x][y] != 0) {
                options[board[x][y]] = 1;
            }
        }
    }

    for (let k = 1; k < 10; k++) {

        if (options[k] == 0) {
            options[k] = k;
        } else {
            options[k] = 0;
        }
    }

    return options;
}

//Building an empty 2d array for the options 
function getEmptyBoard() {
    var newArray = [];
    for (let i = 0; i < 9; i++) {
        newArray[i] = [];
        for (let j = 0; j < 9; j++) {
            newArray[i][j] = 0;
        }
    }
    return newArray;
}

module.exports = {
    isFullBoard,
    cellOptions
} 