import './App.css';
import {useState} from "react";

function App() {

  const [playerName, setPlayerName] = useState('');
  const [playerNumber, setPlayerNumber] = useState(null);

  const [gameDisplay, setGameDisplay] = useState(null);


  const changePlayerName = (e) => {
      setPlayerName(e.target.value);
  }

  const changePlayerNumber = (e) => {
    setPlayerNumber(e.target.value);
  }

  const submitForm = (e) => {
    const max = 4;
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * max);
    const numberFromStr = parseInt(playerNumber); 

    console.log(typeof(randomNumber));
    console.log(typeof(playerNumber));
    

    console.log(randomNumber);
    setGameDisplay(`The generated number was ${randomNumber}. ${ numberFromStr === randomNumber ? 'You win' : 'You lose' } `);
  }

  return (
    <div className="App">
        <form action="" onSubmit={submitForm}>

          <div className="form-row">
              <label htmlFor="playerName">Your name</label>
              <input type="text" name="playerName" id="playerName"  value={playerName} onChange={changePlayerName}/>
          </div>

          <div className="form-row">
              <label htmlFor="playerNumber">Guess a number</label>
              <input 
                type="number" 
                name="playerNumber" 
                id="playerNumber"  
                value={playerNumber} 
                onChange={changePlayerNumber} 
                min={0}
                max={3} 
              />
          </div>

          <button type="submit">Play</button>
          
        </form>

        <div className="game-display">
          <p>
            <span>Your number: </span>
            {playerNumber}
          </p>

          <p>
            {gameDisplay}
          </p>
         

        </div>
    </div>
  );
}

export default App;
