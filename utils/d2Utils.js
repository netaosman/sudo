var fs = require('fs');

var data = fs.readFileSync('../data.json', 'utf8');
data = JSON.parse(data);

var firstArray = data.sudokuArray;
build2dArray(firstArray);


function build2dArray(array) {

    newArray = [];
    while (array.length) {
        newArray.push(array.splice(0, 9));
    }
    console.log('good');
    fs.writeFileSync('2d.json', JSON.stringify(newArray));
    return newArray;

}



module.exports = build2dArray;