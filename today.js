const h2today = document.querySelector("h1#today");

function getToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth()+1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");   
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const idx = today.getDay();
    h2today.innerText = `${year}/${month}/${date} ${days[idx]}요일`;
}

getToday();
setInterval(getToday, 1000); // 1초마다 함수부름, 12시 대비하여...
// if절로도 가능? 
// js 파일을 계속 load 하나..?