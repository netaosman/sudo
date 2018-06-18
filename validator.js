


/** 
 * The function checking 
 * if the board if full.
*/
function isFullBoard(board) {
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {

            if (board[x][y] == 0) {
                return false;
            } else {
                return true;
            }
        }
    }
}

/** 
 * Validator function.
*  Checking the options numbers through the rows,
*  columns, and the 3x3 squares.
*/
function options(board, i, j) {

    let optionsArray = {};

    //Horizontal checking
    for (let y = 0; y < 9; y++) {
        if (board[i][y] != 0) {
            optionsArray[board[i][y]] == 1;
        }
    }

    //Verticle checking
    for (let x = 0; x < 9; y++) {
        if (board[x][j] != 0) {
            optionsArray[board[i][y]] == 1;
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
                optionsArray[board[x][y]] = 1;
            }
        }
    }

    for (let k = 1; k < 10; k++) {

        if (optionsArray[k] == 0) {
            optionsArray[k] = k;

        } else {

            optionsArray[k] = 0;
        }
    }

    return optionsArray;
}