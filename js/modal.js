
let modals = document.getElementsByClassName("modal");

// Modal을 띄우는 클래스
let btns = document.getElementsByClassName("more__btn");

// Modal을 닫는 close 버튼
let spanes = document.getElementsByClassName("close");

let funcs = [];
 
// Modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
function Modal(num) {
  return function() {
    // 해당 클래스의 내용을 클릭하면 Modal 띄움
    btns[num].onclick =  function() {
        modals[num].style.display = "block";
        console.log(num);
    };
 
    // <span> 태그(X 버튼)를 클릭하면 Modal 닫음
    spanes[num].onclick = function() {
        modals[num].style.display = "none";
    };
  };
}
 
// 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의
for(let i = 0; i < btns.length; i++) {
  funcs[i] = Modal(i);
}
 
// 원하는 Modal 수만큼 funcs 함수를 호출
for(let j = 0; j < btns.length; j++) {
  funcs[j]();
}
 
// Modal 영역 밖을 클릭하면 Modal을 닫음
window.onclick = function(event) {
  if (event.target.className == "modal") {
      event.target.style.display = "none";
  }
};