const clock = document.querySelector("h3#clock");

function getClock() {
    const date = new Date();
    let hour = date.getHours();
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    let ampm = "오전";
    if(hour > 13) {
        ampm = "오후";
        hour -= 12;
    }
    clock.innerText = `${ampm} ${hour}시 ${min}분 ${sec}초`;
}

getClock();
setInterval(getClock, 1000);

// 남은 시간도 구현..?