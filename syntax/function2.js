// 함수에서 매개변수와 리턴 사용하기
// 함수에서 return을 시키면 함수가 끝남과 동시에 return 뒤에 있는 값을 반환한다.

console.log(Math.round(1.6)); //2
console.log(Math.round(1.4)); //1

function sum(first, second) { //parameter
    console.log('a');
    return first + second;
    console.log('b');
}

console.log(sum(2,4)); // argument

console.log(Math.round(1.6));