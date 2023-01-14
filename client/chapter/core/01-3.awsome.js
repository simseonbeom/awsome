



// IIFE (즉시 실행 함수) -> 오늘날 잘 사용하지 x / 클로저에선 사용할수 o 






// ?????

// scope  블록 / 함수 

// var 함수 
// let 블록



// {
//   var x = 1;
//   let y = 10;
// }


// console.log(x);
// console.log(y);

//  캡슐화 => IIFE
//  캡슐화 => 모듈 

// 함수 : 인수,인자, 리턴값



function getNode(node){
  return document.querySelector(node)
}







(function ($){


  $('.first')



})(getNode)





function aaa(g){

  g


}

aaa(window)


















