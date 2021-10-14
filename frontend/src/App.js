// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [ counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <>
      <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text='+'
      />
      <Button
        onClick={setToZero}
        text='0'
      />     
      <Button
        onClick={decreaseByOne}
        text='-'
      />   
    </>
  )
}

export default App;
