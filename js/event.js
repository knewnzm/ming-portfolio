// 인터넷 스크롤 이동 시 이벤트
window.onscroll = function() {createPrograssBar()}; 
        
function createPrograssBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("indicator").style.height = scrolled + "%";
}

const topBtn = document.querySelector(".moveBtn");


// 버튼 클릭시 페이지 상단으로 이동
topBtn.onclick = () => {
    window.scrollTo({top:0, behavior: "smooth"});
}