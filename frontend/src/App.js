// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [ counter, setCounter] = useState(0)

  return (
    <>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={() => setCounter(0)}> 
        zero
      </button>
    </>
  )
}

export default App;
