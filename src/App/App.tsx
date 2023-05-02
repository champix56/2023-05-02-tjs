import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Button from "./components/ui/Button/Button";

function App() {
  return (
    <div className="App" data-testid="App">
      <Button
        text={'Hello'}
        onClick={function () {
          console.log("hello");
        }}
      >
          <img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-3/16/menu-button-wide-256.png" />
          <br /> 
          hello
      </Button>

      <Button text="button" />
    </div>
  );
}

export default App;
