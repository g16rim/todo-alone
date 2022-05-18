# timeline
<br>
<h2>2022/05/17</h2>
  <h3>날짜</h3>
   <li>
    getMonth() : 0부터 return, 그래서 우리가 알아보려면 +1 해야된다.
   </li>
   <li>
    일단 시간 함수와 비슷하게 setInterval(getToday, 1000); (다음 날 0시로 넘어가는 것을 대비해서, 더 나은 방법이 있는지 고려해봐야겠다.
  </li>
  
  <h3>시간 초단위로</h3>
  <li>
    setInterval(getClock, 1000); , 1초(1000ms)마다 불러줌.
  </li>
  
  <h3>할 일 추가/삭제</h3>
  <br>
  <h2>2022/05/18</h2>
  <h3>날씨 추가</h3>
  <li>weather.js</li>
  <li>날씨 API</li>
  <li>
    const emo = document.querySelector("img");
  </li>
  <li>
    emo.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  </li>
  <li>
    (weather 스펠링 주의..)
  </li>

  <h3>✔ 누르면 글씨체 선이 그어지도록 & 새로고침에도 계속 유지되게</h3>
  <li>
    style.css에 checked class 추가
  </li>
  <li>
    .checked {
      text-decoratio: line-through;
    }
  </li>
  <li>todo.js</li>
  <li>paintTodo() 함수에 체크 버튼 추가</li>
  <li>checkTodo() 함수 구현</li>
  <li>classList를 이용하여 checked 클래스 추가(add) 또는 삭제(remove)</li>
  <li>todos 배열에도 접근하여 특정 원소의 checked true or false 체크</li>
