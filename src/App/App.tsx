import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Button from "./components/ui/Button/Button";


function App() {
  const [counter, setcounter] = useState(0);
  
  useEffect(() => {
    console.log(`voici la value de counter:${counter}`);
  }, [counter]);


  return (
    <div className="App" data-testid="App">
      <div style={{textAlign:'center'}}>Counter value : {counter}</div>
      <hr/>
      <Button backgroundColor={'skyblue'}  onClick={()=>{setcounter(counter+1);console.log(counter);}}>+</Button>
      <Button backgroundColor={'tomato'} onClick={()=>{setcounter(counter-1);console.log(counter);}}>-</Button>
    </div>
  );
}

export default App;
