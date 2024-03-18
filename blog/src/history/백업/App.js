import './App.css';
import {useState} from "react";

function App() {
    // let post = '강남 우동 맛집'
    let [posts,setPosts] = useState(['강남 우동 맛집','남자코트 추천','파이썬독학'])
    let [Likes,setLikes] = useState(0)

    // function changeLikes(){
    //     setLikes(Likes +1)
    // }

  return (

      <div className="App">

          <div className="black-nat">
              <h4 style={{color: 'red', fontSize: '16px'}}>
                  리엑트 블로그
              </h4>
          </div>
          {/*<button onClick={() => {setPosts('여자코트추천')}}>*/}
          <button onClick={ ()=>{
              posts[0] = '여자코트 추천'
              setPosts(posts)}
          }>
              제목수정 테스트
          </button>
          <div className="list">
              <h4>
                  {posts[0]}
                  <span style={{cursor: "pointer"}} onClick={() => {
                      setLikes(Likes + 1)
                  }}>wdw </span>{Likes}
              </h4>
              <p>3월 12일 발행</p>
          </div>
          <div className="list">
              <h4>
                  {posts[1]}🤢
              </h4>
              <p>3월 10일 발행</p>
          </div>
          <div className="list">
              <h4>
                  {posts[2]}👍
              </h4>
              <p>3월 10일 발행</p>
          </div>


      </div>
  );
}

export default App;
