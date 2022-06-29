import { useState } from "react";

function App() {
  const[title, setTitle] = useState("Doctype!")
  const titleTurner = ()=>{
    setTitle("Doctype!! LLC")
  }
  return (
    <div className="App">
      <h1 onClick={titleTurner}>{title}</h1>
    </div>
  );
}

export default App;
