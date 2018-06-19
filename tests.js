

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
    ]
]

var neta = {};
for (let i = 1; i < 10; i++) {
    neta[i] = 0
}

board[0][0] = 15;
console.log(neta);
