import './App.css';
import Square from './components/Square.js'
import React, { useState } from 'react';

function App() {
  const calculateWinner = array => {
    let lines = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7],[2,5,8], [0,4,8], [2,4,6]]
    for (let i=0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
        if (
          array[a] &&
          array[a] === array[b] &&
          array[a] === array[c]
      ) {
          return `${array[a]} won!`;
      }
    }
    return "Who will win?"
  }
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
        <span>{calculateWinner(squares)}</span>
      </div>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
