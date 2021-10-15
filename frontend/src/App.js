// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

// const Display = ({counter}) => {
//   return (
//     <div>{counter}</div>
//   )
// }

// const Button = (props) => {
//   return (
//     <button onClick={props.onClick}>
//       {props.text}
//     </button>
//   )
// }

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
    </>
  )
}

export default App;
