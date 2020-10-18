import React from 'react';
import './App.css';
import Boardgame from './modules/Boardgame/Boardgame.js';


function App() {
  return (
    <div className="App">
        <h1>Play mastermind online</h1>
        <div className="gameboard">
      		<Boardgame></Boardgame>
    	</div>
    </div>
  );
}

export default App;
