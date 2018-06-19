

//Module
var fs = require('fs');
//Handlers
var boardHandler = require('./boardHandler');


var board = [
    [
        0,
        0,
        2,
        9,
        0,
        8,
        0,
        1,
        0
    ],
    [
        7,
        0,
        0,
        0,
        6,
        0,
        5,
        0,
        0
    ],
    [
        0,
        0,
        9,
        5,
        0,
        0,
        0,
        0,
        7
    ],
    [
        0,
        4,
        1,
        0,
        2,
        6,
        0,
        5,
        0
    ],
    [
        0,
        8,
        7,
        0,
        0,
        0,
        3,
        4,
        0
    ],
    [
        0,
        6,
        0,
        4,
        8,
        0,
        1,
        9,
        0
    ],
    [
        1,
        0,
        0,
        0,
        0,
        5,
        2,
        0,
        0
    ],
    [
        0,
        0,
        8,
        0,
        4,
        0,
        0,
        0,
        5
    ],
    [
        0,
        7,
        0,
        6,
        0,
        2,
        8,
        0,
        0
    ]
];


sudokuSolver(board);

/** 
 * Handle the board and solve is
*/
function sudokuSolver(board) {

    var i = 0;
    var j = 0;

    var optionsObject = {};

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
                    break;
                }
            }
        }
        optionsObject = boardHandler.cellOptions(board, i, j);
        console.log(optionsObject);


        for (let k = 1; k < 10; k++) {
            if (optionsObject != 0) {
                board[i][j] = optionsObject[k];
                // fs.writeFileSync('try.json', JSON.stringify(board));
                sudokuSolver(board);
            }
        }
        //backtracking
        board[i][j] = 0;
    }
}