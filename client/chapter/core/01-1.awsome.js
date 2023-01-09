

/* -------------------------------------------------------------------------- */
/* 자바스크립트의 자료형                                                                */
/* -------------------------------------------------------------------------- */

/* 
number
string
null
Boolean
undefined
symbol
bigInt
objcet (array, function )
 */




// Objcet.prototype.toString()


/* -------------------------------------------------------------------------- */
/* typeof 의 연산자와 함수                                                           */
/* -------------------------------------------------------------------------- */

console.log( typeof ('aa' + 2));

function getNode(node){

  // validation
  if(typeof node === 'objcet'){
     throw new Error('널은 비어있어 ')
  }

  return document.querySelector(node)
}


getNode({})




/* -------------------------------------------------------------------------- */
/* 문과 식의 차이                                                                   */
/* -------------------------------------------------------------------------- */

// 값을 반환하지 않음. 
if문
while문
do.. while문
for문
switch문 

if(...){

  

}

while(){

}

for() {

}


switch(){

}


식
// 값을 반환해요 

삼항연산식 
let result = condition ? valueA : condition2 ? valueB : condition ? valueC : remainder



/* -------------------------------------------------------------------------- */
/* 논리합 과 논리곱 연산자                                                              */
/* -------------------------------------------------------------------------- */


논리 연산 식 
a || b

function rem(pxValue,base = 16){

  // let pxValue = 30;
  // let base = 16;



  typeof pxValue === "string" && (pxValue = parseInt(pxValue, 10));

  if (typeof pxValue === "string") {
    pxValue = parseInt(pxValue, 10);
  }

  return ...

}


rem(30,16)  // 1.875rem



function sum(a,b){

  a ?? 10
  
  return a + b
}


sum(0,10)





/* -------------------------------------------------------------------------- */
/* 함수 작성 순서                                                                   */
/* -------------------------------------------------------------------------- */


function getNode(node){
  if(typeof node !== 'string'){

  }


  return node 
}




getNode(123)





/* -------------------------------------------------------------------------- */
/* 반복문                                                                        */
/* -------------------------------------------------------------------------- */



const user = {
  name:'tiger',
  age: 34,
  tel: '01071690262',
  hasOwnProperty: function (){
    return '메롱'
  }
}
user.hasOwnProperty() // 가짜 

// user.hasOwnProperty()

Object.prototype.hasOwnProperty.call(user,key)


 // 찐 

for..in을 사용하지 않는 이유는 : 일단 정확한 키값을 얻어내기가 힘들어요
정확한 키값을 얻어 내기 위해선 : if(user.hasOwnProperty(key))


for..of 저거 없이도 키값을 잘 가져온다.


자바스크립트는 내부적으로 hasOwnProperty 를 보호해주지 않아요.




for(let key in user){
    
  
  if(user.hasOwnProperty(key)){
      console.log(key)
  }
  
}


//  TypeScript



// 함수.call 📞 

// Function.prototype.call

function aa(a,b){
  return a + b
}

aa(10,30) // 실행  this : window

aa.call(user,10,) // 실행  this : user
 
has(가지고있냐) 
Own(너가)
Property(프로퍼티를)

//  for..in  객체를 순환 

for(let i = 0; i < 10; i++){
  console.log(arr[i]);
}

//  for..of  iterable  string,array,arrayLike [순환 가능한]  / 객체[iterable] 

// Object.keys(user)
// Object.values(user)
// Object.entries(user)
























