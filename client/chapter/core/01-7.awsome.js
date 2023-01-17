


function outer(){
  let a = 1;


  return ()=>{
    console.log(a);
  }

}


















// 객체의 메서드로서는 일반함수가 좋아요 : this를 찾기가 쉽다. 나를 호출한 대상 객체.메서드(this:객체)
// 객체의 메서드 안에 있는 함수는 화살표 함수가 좋다. : this를 찾기가 쉽다. 애초에 this가 없으니 상위 컨텍스트의 this를 찾는다. 

const user = {
  name:'tiger',
  age:34,
  sayHi(){
    
    // this // user
    const sayHo = () =>{
      console.log(this);
    }
    sayHo.call(this)
  }
}

user.sayHi() 



// console.log( this ); // undefined




const first = document.querySelector('.first');

function handler(){
  console.log(this); // user
}

handler.call(user);  // 실행
handler.apply(user); // 실행
handler.bind(user)(); // 가지고 있음.



first.addEventListener('click',handler.bind(user))






/* 


let obj = {
  n: 12,
  obj2 : {
      n:22,
      f2:()=>{
          console.log(2,this.n);
      }
  }
  
}
obj.obj2.f2(); // 언디파인드...




 */


