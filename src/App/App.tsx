import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/ui/Button/Button';
import Button2 from './Button/Button';

function App() {
  return (
    <div className="App" data-testid="App">
      <Button text="Bejamin" onClick={function(){console.log('hello');}}/>
      <Button2 text="button"/>
    </div>
  );
}

export default App;
