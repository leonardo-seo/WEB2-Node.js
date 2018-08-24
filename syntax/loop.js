// 반복문while을 사용하여 불필요한 코드를 단축시키기

console.log('A');
console.log('B');

var i = 0;
while(i < 2){
    console.log('C1');
    console.log('C2');
    i = i + 1;
}

console.log('D');