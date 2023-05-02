import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <div className="App" data-testid="App">
      DEMAT 
      <Button text="Bejamin" onClick={function(){console.log('hello');}}/>
      <button>Reel</button>
      <button>Reel</button>
      <Button text="button"/>
      <button>Reel</button>

    </div>
  );
}

export default App;
