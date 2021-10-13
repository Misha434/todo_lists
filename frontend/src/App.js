// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [ counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}> 
        zero
      </button>
    </>
  )
}

export default App;
