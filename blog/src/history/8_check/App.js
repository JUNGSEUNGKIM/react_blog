/* props
- props란?
  React 컴포넌트 간에 데이터를 전달하는 데 사용되는 객체
  props는 "properties"의 줄임말로, 부모 컴포넌트로부터
  자식 컴포넌트로 데이터를 전달하는 방법 중 하나
  부모 컴포넌트 - 자식 컴포넌트의 관계는 데이터를 전송하는 컴포넌트가 부모 컴포넌트이며
  데이터를 받는 컴포넌트가 자식 컴포넌트이다.
- 문법
 1. 부모 컴포넌트에서
 <자식컴포넌트 [넘겨줄 데이터명]={state이름}>
  보통 state이름과 동일하게 지어준다.
 2. 자식 컴포넌트에서
 props 파라미터 등록 후 props.[부모에서 넘겨준 데이터명] 사용

*/

import './App.css';
import {useState} from "react";

function App() {

    let [posts, setPosts] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
    let [likes, setLikes] = useState([0,0,0]);
    let [dates, setDates] = useState(['2월 17일 발행', '3월 12일 발행', '3월 16일 발행'])
    let [modal, setModal ] = useState(false);

    // 게시글 제목 선택시 해당 게시글에 대한 인덱스 정보
    let [selectedPostIndex, setSelectedPostIndex] = useState(0)

  return (
    <div className="App">
      <div className="black-nav">
      <h4 style={ { color:'red', fontSize:'16px' } }>
          리액트 블로그
      </h4>
      </div>

        {
           //  map에 index라는 인자는 map의 요소에 따라
           // index 0 부터 값을 증가
           posts.map( function(title, index){
               return(
               <div className="list">
                   {/* !연산을 활용하여 제목을 클릭할 때마다 state를 토글시킨다. */}
                   <h4 onClick={
                       ()=> {
                           setModal(!modal);
                           setSelectedPostIndex(index);
                       }
                   } >
                       {title}
                       <span onClick={
                           ()=>{
                               // 좋아요는 index를 통하여 posts의 index와 동일하게 맞춘다.
                               // 좋아요의 갱신은 카피본에서 진행을 한다.
                                // likes[index] = likes[index]+1;
                                let copy = [...likes]
                               copy[index] = copy[index] +1;
                               setLikes(copy)
                               // setLikes(likes+1)
                           }
                       }>👍</span>{likes[index]}
                   </h4>
                   <p> { dates[index]} </p>
               </div>
               )
               }
           )
        }

        {
            modal === true ?
                <MyModal
                    color={'skyblue'}
                    posts={posts}
                    dates={dates}
                    likes={likes}
                    setPosts = {setPosts}
                    selectedPostIndex = {selectedPostIndex}
                />: null
        }
    </div>
  );
}

function MyModal(props) {
    const { color,posts, dates, likes, setPosts, selectedPostIndex } = props;
    const post = posts[selectedPostIndex];
    const date = dates[selectedPostIndex];
    const like = likes[selectedPostIndex];

    return(
        <div className="modal" style={ {background: color} }>
            <h4> 제목: { post } </h4>
            <p> 날짜: {date} </p>
            <p> 상세내용: {post}의 컨텐츠로 좋아요를 현재 {like}개 받았습니다. </p>

        </div>
    )
}

export default App;
