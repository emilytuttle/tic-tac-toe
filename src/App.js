import './App.css';
import Square from './components/Square.js'
import React, { useState } from 'react';

function App() {
  const [squares, setSquares] = useState(['', '', '', '', '', '', '', '', ''])
  const [player, setPlayer] = useState(true);

  const handleClick = () => {
    setSquares(['', '', '', '', '', '', '', '', ''])
    setPlayer(true)
  }

  return (
    <div className="App">
      <div className="container">
        {squares.map((value, index) => {
          return (
            <Square 
              squares={squares} 
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer} 
              squareVal={value}
              index={index}
            /> 
          )
        })}
      </div>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
