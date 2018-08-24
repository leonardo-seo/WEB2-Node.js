// program1,2.js를 조건문을 이용하여 코딩
// 1을 넣으면 c1을 출력 2를 넣으면 c2를 출력하는 코드
var args = process.argv;
console.log(args[2]);
console.log('A');
console.log('B');
if (args[2] === '1'){
    console.log('C1');
} else {
    console.log('C2')
}
console.log('D');