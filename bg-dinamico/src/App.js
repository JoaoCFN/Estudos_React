import React, { useState } from 'react';
import './App.css'

function App() {
  const [color, Setcolor] = useState("#000000");
  document.body.style.backgroundColor = color;

  return (
    <div className="App">
      <button className = "btn btn-black">Black</button>
      <button className = "btn btn-blue">Blue</button>
      <button className = "btn btn-green">Greeen</button>
    </div>
  );
}

export default App;
