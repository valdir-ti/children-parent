import { useState } from "react";
import "./App.css";
import Children from "./components/Children";

const Parent = () => {
  const [parentName, setParentName] = useState("Parent name");

  return (
    <div className="App">
      <header className="App-header">
        <p>{parentName}</p>
        <Children changeName={(name) => setParentName(name)} />
      </header>
    </div>
  );
};

export default Parent;
