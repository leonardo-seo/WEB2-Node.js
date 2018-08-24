//  Node.js에서 require로 sample.txt 파일 읽기

var testFolder = './data/';
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist) {
    console.log(filelist);
}) 