// 객체가 필요한 상황에서 객체를 사용하기

var members = ['thomas', 'choco', 'hoya'];
console.log(members[1]); // choco
var i = 0;
while(i < members.length) {
    console.log('arry loop', members[i]);
    i = i + 1;
}

var roles = {
    'programmer' : 'thomas',
    'designer' : 'choco',
    'manager' : 'hoya',
}
console.log(roles.designer); // choco
console.log(roles['designer']); // choco

for(var n in roles){
    console.log('object =>', n, 'value => ', roles[n]);
}