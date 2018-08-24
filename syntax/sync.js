// sample.txt에서 문자를 읽어서 sync.js에서 출력하기

var fs = require('fs');



//readFileSync
// console.log('A');
// var result = fs.readFileSync('sample.txt', 'utf8');
// console.log(result);
// console.log('C');


console.log('A');
fs.readFile('sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');
