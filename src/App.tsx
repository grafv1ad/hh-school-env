import { useState } from "react";

import viteLogo from "../public/vite.svg";
import hhLogo from "./assets/hh.svg";
import reactLogo from "./assets/react.svg";
import vladFace from "./assets/vlad.png";

import "./App.less";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://hh.ru" target="_blank">
          <img src={hhLogo} className="logo hh" alt="HH logo" />
        </a>
        <a href="https://vladpetrov.me" target="_blank">
          <img src={vladFace} className="logo vlad" alt="Vlados :)" />
        </a>
      </div>
      <h1>Vite + React + HH + Vlad</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div className="wow">＼(^ o ^)／</div>
        <p>Во славу бандлеров!</p>
      </div>
    </>
  );
}

export default App;
