
import React,{useState, useEffect} from 'react';
import SquareComponent from './SquareComponent';
const initialState =["", "", "", "", "", "", "", "", "", ""]

function App() {
  const [gameState,updateGameState] = useState(initialState)
const [isXChance, updateIsXChance] = useState(false);

  const onSquareClick=(index)=>{
    let strings=Array.from(gameState)
    strings[index] = isXChance ? "X" : "0";
    updateGameState(strings);
    updateIsXChance(!isXChance);
  }

useEffect(()=>{
const winner = checkWinner();
if(winner){
  alert(`You won ${winner} !`)
  updateGameState(initialState);
}
},[gameState])

const checkWinner = () => {
  const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ];

  
  console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
  for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
          return gameState[a];
      }
  }
  return null;
}


  return (
    <div className="app-header">
    <div className='row jc-center'>
      <SquareComponent className='b-bottom-right' state ={gameState[0]} onClick={()=>onSquareClick(0)}/>
      <SquareComponent className='b-bottom-right' state ={gameState[1]} onClick={()=>onSquareClick(1)}/>
      <SquareComponent className='b-bottom-right'state ={gameState[2]} onClick={()=>onSquareClick(2)}/>
    </div>
    <div className='row jc-center'>
    <SquareComponent className='b-bottom-right'state ={gameState[3]} onClick={()=>onSquareClick(3)}/>
    <SquareComponent className='b-bottom-right'state ={gameState[4]} onClick={()=>onSquareClick(4)}/>
    <SquareComponent className='b-bottom'state ={gameState[5]} onClick={()=>onSquareClick(5)}/>
    </div>
    <div className='row jc-center'>
    <SquareComponent className='b-right'state ={gameState[6]} onClick={()=>onSquareClick(6)}/>
    <SquareComponent className='b-right'state ={gameState[7]} onClick={()=>onSquareClick(7)}/>
    <SquareComponent className='b-right'state ={gameState[8]} onClick={()=>onSquareClick(8)}/>
    </div>
    <button className='clear-button' onClick={()=>updateGameState(initialState)}>Clear Game</button>
    </div>
  );
}

export default App;
