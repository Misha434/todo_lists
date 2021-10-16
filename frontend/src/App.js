// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => () => {
    setValue(newValue)
  }

  return (
    <>
      {value}
      <button onClick={() => setToValue(1000)}>thousand</button>
      <button onClick={() => setToValue(0)}>reset</button>
      <button onClick={() => setToValue(value + 1)}>increment</button>
    </>
  )
}

export default App;
