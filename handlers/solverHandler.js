

//Module
var fs = require('fs');
//Handlers
var boardHandler = require('./boardHandler');

/** 
 * Handle the board and solve is
*/
function sudokuSolver(board) {

    var i = 0;
    var j = 0;
    var breakFlag = false;

    var options = {};
    let boardStatus = boardHandler.isFullBoard(board);
    if (boardStatus) {
        console.log('Board is solved Successfully');
        fs.writeFileSync('./solution.json', JSON.stringify(board));

    } else {

        for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {

                if (board[x][y] == 0) {
                    i = x;
                    j = y;
                    breakFlag = true;
                    break;
                }
            }
            if (breakFlag) { break };
        }
        options = boardHandler.cellOptions(board, i, j);

        for (let k = 1; k < 10; k++) {
            if (options[k] != 0) {
                board[i][j] = options[k];
                // fs.writeFileSync('try.json', JSON.stringify(board));
                sudokuSolver(board);
            }
        }

          //backtracking
          board[i][j] = 0;
    }
}

module.exports = sudokuSolver;