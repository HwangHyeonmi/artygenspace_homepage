import "./css/Common.css";
import "./css/Tablet.css";
import "./css/Mobile.css";

import Main from "./Main";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>작업중입니다.^^</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ★Artygen Space★
        </a>
      </header> */}
      <Main></Main>
    </div>
  );
}

export default App;
