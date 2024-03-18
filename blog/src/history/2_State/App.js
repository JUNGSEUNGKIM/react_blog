import './App.css';
import {useState} from "react";

function App() {
    // let post = '강남 우동 맛집'
    let [post,postChange] = useState(['강남 우동 맛집','남자코트 추천','파이썬독학'])
    // Alt +엔터  치면  아래 뜸 그거 누르면 import 됨
    /*

    state 사용 방식
    1. import {useState} from "react";
    2. let [state명, state 변경을 도와주는 함수명 ] =


    State를 변경하게 되면 State변경 함수와 함게
    HTML 화면 갱신이 일어나도록 설계가 되어있다.
    결론] 동적으로 자주 변경될 것ㅇ라레ㅐ흫제ㅐㅡ제ㅐㄷㅎ프데ㅐㄹ푸ㅡ메ㅐ

    */
  return (
      // 주석이있음   //문법 3가지가 중요 !!!!!!!!!!!!
      <div className="App">

          <div className="black-nav">
              <h4>
                  블로그임
              </h4>
          </div>
          <div className="list">
              <h4 style={{color: 'red', fontSize: '16px'}}>
                  {post[0]}👍
              </h4>
              <p>3월 10일 발행</p>
          </div>
          <div className="list">
              <h4 style={{color: 'red', fontSize: '16px'}}>
                  {post[1]}🤢
              </h4>
              <p>3월 10일 발행</p>
          </div>
          <div className="list">
              <h4 style={{color: 'red', fontSize: '16px'}}>
                  {post[2]}😎👍
              </h4>
              <p>3월 10일 발행</p>
          </div>


      </div>
  );
}

export default App;
