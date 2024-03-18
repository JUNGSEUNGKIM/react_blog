import './App.css';
import {useState} from "react";

// * 컴포넌트 만드는 법
// 1. function 만들고
// return () 안에 html 담기
// 사용하는 곳에서는 <함수명> </함수명> 또는 <함수명/> 쓰기
// * 언제 컴포넌트를 사용하면 좋을까요?
//  - 반복적인 HTML 요소를 재사용할 경우
//  - 큰 페이지
//  - 자주 변경되는 요소


function App() {

    let [posts, setPosts] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
    let [likes, setLikes] = useState([0,0,0]);
    let [date,setdates] =useState(['1월1일','1월3일','8월1일'])

    let [modal, setModal] = useState(false);



  return (
    <div className="App">
      <div className="black-nav">
      <h4 style={ { color:'red', fontSize:'16px' } }>
          리액트 블로그
      </h4>
      </div>
       <button onClick={ ()=>{
           let posts_updated = [...posts]
           posts_updated[0]='여자코트 추천'
           setPosts(posts_updated)}
       }>
            제목수정 테스트
       </button> &nbsp;
        <button onClick={ ()=>{
            let posts_updated = [...posts]
            posts_updated.sort()
            setPosts(posts_updated)}
        }>
            제목정렬 테스트
        </button>
      {/*<div className="list">*/}
      {/*  <h4>*/}
      {/*      {posts[0]}*/}
      {/*      <span onClick={ ()=>{ setLikes(likes+1)} }>👍</span>{likes}*/}
      {/*  </h4>*/}
      {/*  <p> 3월 10일 발행</p>*/}
      {/*</div>*/}
      {/*<div className="list">*/}
      {/*      <h4>*/}
      {/*          {posts[1]}*/}
      {/*      </h4>*/}
      {/*      <p> 3월 10일 발행</p>*/}
      {/*  </div>*/}
      {/*  <div className="list">*/}
      {/*      <h4 onClick={()=>{ setModal(true)} }>*/}
      {/*          {posts[2]}*/}
      {/*      </h4>*/}
      {/*      <p> 3월 10일 발행</p>*/}
      {/*  </div>*/}


        {
            // map에는 index라는 인자는 map 요소에 따라 0부터 증가
            posts.map(function (title,index) {

                    return(
                    <div className="list">
                        <h4 onClick={ ()=>{ setModal(!modal)} }>
                            {/*{title[index]}*/}
                            {title}
                            <span onClick={ ()=>{

                                let copy =[...likes]

                                copy[index] = copy[index]+1
                                setLikes(copy)}
                            }>👍</span>{likes[index]}
                        </h4>
                        <p>{date[index]}</p>
                    </div>
                    )
                }
            )
        }


        {/*<MyModal></MyModal>*/}
        {
            modal == true ? <MyModal posts = {posts}/> : null
        }

        {/* 풀어보세요.
        아래 자리에 div 박스 3개를 반복하여 표시해 보세요.
        map을 활용하세요.
        <div> 안녕 </div>
        */}
        {
            [1, 2, 3].map(function () {
                return <div> 안녕 </div>
        })

        }


    </div>
  );
}



function MyModal(props){
    return (
        <div className='modal'>
            <h4>{props.posts[0]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )

}


// react { } 안에 html 요소를 치환하는 값이
// 들어와야 한다.
// react에서 if문은 반환값이 없기 때문에 사용할 수 없다.
// 게시글을 클릭하면(Modal창의 State가 true이면) 모달창을 보여준다.
// 하지만 아래와 같은 if문은 반환값이 없기 때문에 사용할 수 없다.
// if (modal == true){
//     <MyModal/>
//  }
// 이해가 되지 않는다면 React {} 안에 if문 사용금지.
// 삼항연산자.
// [조건식] ? [조건식이 true이면 반환되는 값] : [조건식이 false이면 반환되는 값]

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


export default App;
