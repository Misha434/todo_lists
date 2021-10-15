// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <>
        the app is used bt pressing the buttons
      </>
    )
  }
  return (
    <>
      button press history: {props.allClicks.join(' ')}
    </>
  )
}

const Button = ({ handleClick, text}) => (

  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat("R"))
    setRight(right + 1)
  }

  return (
    <>
      {left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
    </>
  )
}

export default App;
