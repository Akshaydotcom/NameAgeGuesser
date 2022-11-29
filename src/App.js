import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Guesser } from './components/guesser';

function App() {
  const [allGuess,setAllGuess]=React.useState([]);
  const [oddFlag,setOddFlag]=React.useState(false);
  const [numGuess,setNumGuess]=React.useState(0);
  const getValuesFromAPI =(data)=>{  
    let oldGuesses=[...allGuess,data]
    setAllGuess(oldGuesses)
  }
  React.useEffect(()=>{
    if(allGuess.length!==0 && allGuess.length%2!==0){
      setOddFlag(true)
    }
    else{
      setOddFlag(false)
    }
    setNumGuess(allGuess.length)
  },[allGuess])
  return (
    <div className="App ">
      <div className="grad-header container-fluid">
        <h3 className="text-center">Name Age Guesser</h3>
      </div>
      <div className='container-fluid col-lg-11 col-md-11 col-sm-4 normalDiv'>Total Guesses: {numGuess}</div>
      {oddFlag && <div className='container-fluid col-lg-11 col-md-11 col-sm-4 smallDiv'>What an odd number of guesses!</div>}
      <br />
      <Guesser update={getValuesFromAPI}/>
      <div className='container-fluid col-lg-11 col-md-11 col-sm-4 pt-4 normalDiv'>All Guesses</div>
      <div className='container-fluid col-lg-11 col-md-11 col-sm-4 pt-2 normalDiv'>
        {allGuess && allGuess.length!==0 && allGuess.map((guess)=>(
          <li>
            {guess.name} - {guess.age}
          </li>
      ))}
      </div>
    </div>
  );
}

export default App;
