import './App.css';
import {useState} from "react";

function App() {

    let [posts, setPosts] = useState(['남자코트 추천','강남 우동맛집','파이썬독학'])
    let [likes, setLikes] = useState(0)

    // function changeLikes(){
    //     setLikes(likes+1)
    // }
    // let []
  return (
    <div className="App">
      <div className="black-nav">
      <h4 style={ { color:'red', fontSize:'16px' } }>
          리액트 블로그
      </h4>
      </div>
       {/* 세 개의 State가 리스트로 있기 때문에 문법에 맞지 않음
       <button onClick={ ()=>{ setPosts('여자코트추천')} }>*/}
       <button onClick={ ()=>{ setPosts(['여자코트 추천','강남 우동맛집','파이썬독학'])} }>
            제목수정 테스트
       </button>
      <div className="list">
        <h4>
            {posts[0]}
            <span onClick={ ()=>{ setLikes(likes+1)} }>👍</span>{likes}
        </h4>
        <p> 3월 10일 발행</p>
      </div>
      <div className="list">
            <h4>
                {posts[1]}
            </h4>
            <p> 3월 10일 발행</p>
        </div>
        <div className="list">
            <h4>
                {posts[2]}
            </h4>
            <p> 3월 10일 발행</p>
        </div>
    </div>
  );
}

export default App;
