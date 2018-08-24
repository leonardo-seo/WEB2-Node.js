// callback의 형식

// function a() {
//   console.log('A');
// }
var a = function() {
  console.log('A');
}

function slowfunc(callback) {
  callback();
}

slowfunc(a);
