import './App.css';

function App() {
    let post = '강남 우동 맛집'
  return (
      // 주석이있음   //문법 3가지가 중요 !!!!!!!!!!!!
      <div className="App">

          <div className="black-nav">
              <h4>
                  블로그임
              </h4>
          </div>
          <h4 style={{color:'red',fontSize: '16px'}}>
              {post}👍
          </h4>


      </div>
  );
}

export default App;
