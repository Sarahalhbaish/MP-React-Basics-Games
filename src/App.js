import logo from './logo.svg';
import './App.css';
import GamePage from './Views/GamePage';
import PlayPage from './Views/PlayPage';
import { useState } from 'react';


function App() {
  const [gamestart, setGameStart]= useState(false)
  
  return (
    <div>
      {gamestart ? <h1><PlayPage/></h1> : <h1><GamePage handleclick={setGameStart}/></h1>}
    {/* <GamePage/>
    <PlayPage/> */}
    </div>
  );
}

export default App;
