import { useState } from "react";
import "./index.css";

import { Test1 } from "./components/Test1";
import { Test2 } from "./components/Test2";
import { Test3 } from "./components/Test3";
import { Test4 } from "./components/Test4";
import { Test5 } from "./components/Test5";

function App() {
  const [section, setSection] = useState(0);
  const clickHandler = (value) => {
    section === value ? setSection(0) : setSection(value);
  };
  return (
    <div>
      <div className="topbar">SingleStop Skills Test</div>
      <div>
        <div>
          <div>
            <button
              className={section !== 1 ? "buttonTest" : "buttonClose"}
              onClick={() => clickHandler(1)}
            >
              useReducer with useState
            </button>
            <button
              className={section !== 2 ? "buttonTest" : "buttonClose"}
              onClick={() => clickHandler(2)}
            >
              Endpoints methods and naming
            </button>
            <button
              className={section !== 3 ? "buttonTest" : "buttonClose"}
              onClick={() => clickHandler(3)}
            >
              firstNotNull function on typescript
            </button>
            <button
              className={section !== 4 ? "buttonTest" : "buttonClose"}
              onClick={() => clickHandler(4)}
            >
              GIT theory
            </button>
            <button
              className={section !== 5 ? "buttonTest" : "buttonClose"}
              onClick={() => clickHandler(5)}
            >
              Multiple useState with useEffect
            </button>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="container">{section === 1 && <Test1 />}</div>
        <div className="container">{section === 2 && <Test2 />}</div>
        <div className="container">{section === 3 && <Test3 />}</div>
        <div className="container">{section === 4 && <Test4 />}</div>
        <div className="container">{section === 5 && <Test5 />}</div>
      </div>
    </div>
  );
}

export default App;
