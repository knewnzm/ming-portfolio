


let greet = document.querySelector(".greet");


function greetByDay() {
    const week_array = ['일', '월', '화', '수', '목', '금', '토'];
    const today_num = new Date().getDay();
    
    switch(today_num) {
      case 0:
        greet.textContent = `${week_array[today_num]}요일은 일 없이 웃는 날! 좋은 하루 보내세요.`;
        break;
      case 1:
        greet.textContent = `${week_array[today_num]}요일은 원래 웃는 날! 좋은 하루 보내세요.`;
        break;
      case 2:
        greet.textContent = `${week_array[today_num]}요일은 화사하게 웃는 날! 좋은 하루 보내세요.`;
        break;
      case 3:
        greet.textContent = `${week_array[today_num]}요일은 수수하게 웃는 날! 좋은 하루 보내세요.`;
        break;
      case 4:
        greet.textContent = `${week_array[today_num]}요일은 목 아프게 웃는 날! 좋은 하루 보내세요.`;
        break;
      case 5:
        greet.textContent = `${week_array[today_num]}요일은 금방 웃는 날! 좋은 하루 보내세요.`;
        break;
      case 6:
        greet.textContent = `${week_array[today_num]}요일은 토 나오게 웃는 날! 좋은 하루 보내세요.`;
        break;
      default:
        console.log('에러 발생');
        break;
    }
  }

  window.onload = function() {
    greetByDay();
  };





