// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/api/v1/todos')
      .then(response => {
        console.log('promise fulfilled')
        setTodos(response.data)
      })
  }, [])

  return (
    <>
      <p>hello</p>
    </>
  )
}

export default App;
