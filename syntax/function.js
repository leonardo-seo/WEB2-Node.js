// 함수를 생성해서 중복된 코드 대신 함수를 사용

f123();
console.log('A');
console.log('B');
console.log('C');
f123();
console.log('D');
console.log('E');
console.log('F');
f123();
console.log('G');
console.log('H');
console.log('I');
f123();


function f123() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
}