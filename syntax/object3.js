// 데이터와 처리 방법을 담는 그릇으로서 객체
var q = {
  v1: 'v1',
  v2: 'v2',
  f1:function() {
    console.log(this.v1);
  },
  f2:function() {
    console.log(this.v2);
  }
}

q.f1();
q.f2();