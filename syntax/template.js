// template literal 사용하기

var name = 'thomas';
var letter = 'Dear' + name + 'https://www.inf ' + name + ' learn.com/course Dear ' + name + '-status-2/';
console.log(letter);

var a = '1';

var letter = `Dear ${name}

https://www.inf ${1+1} learn.com/course Dear ' + name + '-status-2/`;
console.log(letter);