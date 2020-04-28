import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, Setcolor] = useState("#000000");
  const colors = { 
    black: "#000000",
    blue: "#3297bf",
    green: "#3d8025"
  }

  const body = document.querySelector("body");
  body.style.backgroundColor = color;
  body.style.transition = `1s`;

  return (
    <div className="App">
      <h1 className="titulo">Background Dinâmico</h1>    
      <button className = "btn btn-black" onClick={() => Setcolor(colors.black)}>Black</button>
      <button className = "btn btn-blue" onClick={() => Setcolor(colors.blue)}>Blue</button>
      <button className = "btn btn-green" onClick={() => Setcolor(colors.green)}>Greeen</button>
    </div>
  );
}

export default App;
