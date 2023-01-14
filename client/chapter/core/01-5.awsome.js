







// function earth(){

//   let water = true;
//   let apple = {
//     founder:'Steve Jobs',
//     ceo:'Tim Cook',
//     product: ['iphone','macbook','macStudio','appleWatch']
//   }
//   let o2 = 9999

  
//   function tiger(){
//     console.log( water, o2);
//   }

//   return tiger;

// }


// const ufo = earth();



// IIFE

// 함수 표현 식 

// memoization 패턴  -> 저장 객체 보호 

// const memo = function (){

//   const cache = {}
  
//   return function (key,value){
//     cache[key] = value
//     console.log(cache);
//   }
  
// }()



// memo('name','tiger');








// const span = document.querySelectorAll('span')


// // console.log(span);

// // 함수 선언 문 
//            // 인자, parameter, 매개변수
// function sum(a,b,c,d){ // default parameter 기본 매개변수 
  
  
//   // if(!c) c = 10; 
//   // c ?? 100;
//   // c || 100;

//   // validation 확인


//   // let arr = Array.from(arguments);
//   // let arr = Array.prototype.slice(arguments);

//   // arguments.forEach(()=>{})
//   // console.log(arguments);

//   // for(let value of arguments){
//     // console.log(value);
//   // }
  
  
//   console.log(a + b + c + d);

//   // console.log(args);

//   return  

// }


// let result = sum(10,205,0);

// // return 지시자는 값을 내보낸다. 함수를 종료시킨다.




// console.log( result ) // 인수, arguments





// let arr = [1,2,3,4];

// arr[0] // 1



// // rest parameter  나머지 매개변수 
// const sum2 = (...rest) => {

//   let [first, ,second] = rest;
//   // console.log(rest);
//   // let first =  rest[0];
//   // let second =  rest[1];
 
//   // 구조 분해 할당

//   // console.log('두 수의 합 : ' ,first + second);
 
//   let total = 0;

//   rest.forEach( item => total += item )

//   // console.log('모든 합 : ' ,total);

//   // 첫번째 값과 두번째 값의 합을 구하세요.

//   // 전체의 합을 구하세요.
  
  
// }



// sum2(1,2,3,4,5,6);






// 성능 최적화 : 일반함수는 무겁다.
// 줄여쓰기 

// const sum = (a) => {
//   return a;
// };





// // const a = _ => _ => b  // 클로저 : 잡을 수 없는 녀석 



// sum(1,2,3) // 6







// let movePage = function (주소,성공,실패){
  
//   // 조건에 따라 조건이 잘 맞으면 성공() || 실패()

//   if(주소 === '네이버'){
//     성공();
//   }else{
//     실패();
//   }

// };




// movePage(
//   '네이바',
//   ()=>{
//     console.log('3초후 네이버로 이동합니다.');
//     setTimeout(() => {
//       window.location.href = 'https://www.naver.com'
//     }, 3000);
//   }
//   ,
//   ()=>{
//     console.log('잘못된 주소를 입력했습니다.');
//   })


// arr.forEach(function(){})
// movePage(
//   'https://www.naver.com',
//    (url)=>{
//     console.log(`${url} 해당 페이지로 이동합니다.`);
//   },
//    ()=>{
//     throw new Error('url 입력 정보가 올바르지 않습니다.')
//   }
// )
  




// 함수를 통해 값을 set 하는 애들은 설정만 하고 끝남. return x
// 함수를 통해 값을 get(얻고자) 하는 애들은 값을 뱉어야 함 return o
// 화살표 함수는 콜백함수용으로 많이씀 








// function aa(a,b,c,d){
//   return a+b+c+d;
// }

// // 얘를 실행한 값을 가지고 다른 숫자랑 더하고싶어.

// let f1 = aa(1,2,3,4) // 10



// console.log( f1 + 100 );























let movePage = function (url,resolve,reject){

  if(typeof url === 'string' && url.match(/http.+www/)){
    resolve(url) // 함수의 실행부 인수 arguments -> parameter
  }else{
    reject()
  }
  
};


movePage(
  'https://www.naver.com',
  function (url){
    // console.log(url);
    // console.log(`${url} 해당 페이지로 이동합니다.`);
    window.location.href = url;
  },
  function (){
    throw new Error('url 입력 정보가 올바르지 않습니다.')
  }
)
  


function fetch({} = {}){

}

fetch({
  url : 'naver.com',
  method : 'POST',
  onSuccess: ()=>{
    '네이버ㅏ로 이동 '
  },

  
})


function fetchData({
  url = '',
  method = 'GET',
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'Content-Type': 'application/json',
  },
} = {}) {
  if (!url) typeError('서버와 통신할 url 인자는 반드시 필요합니다.');

  const xhr = new XMLHttpRequest();

  // 비동기 통신 오픈
  xhr.open(method, url);


  xhr.addEventListener('readystatechange', () => {
    const { status, state, readyState, response } = xhr;

    if (status >= 200 && status < 400) {
      if (readyState === 4) onSuccess();
    } else typeError('?');
  });

  // 서버에 요청
  xhr.send(JSON.stringify(body));
}










































