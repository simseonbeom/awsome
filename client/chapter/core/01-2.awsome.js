
const user = {
  name:'tiger',
  age: 34,
  tel: '01071690262',
  hasOwnProperty: function (){
    return '메롱'
  }
}


function sum(a,b){
 console.log(this);
 console.log(a + b);
//  return a + b
}

// 함수는 this 나를 호출한 대상을 this로 잡는다.

sum(10,30)

console.log('--------------');

let another3 = sum.call(user,10,30)


console.log('--------------');

let arr = [10,50]
let another2 = sum.apply(user,[10,50])

console.log('--------------');


let another = sum.bind(user,10,40)

// 클로저 

another()


// call
// apply
// bind












