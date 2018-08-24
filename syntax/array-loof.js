// 배열에 있는 number값을 모두 더해서 출력하기

var number = [1,400,12,34,7];
var i = 0;
var total = 0;

while(i < number.length) {
    total = total + number[i];
    i = i + 1;
}
console.log(`total : ${total}`);