// import logo from './logo.svg';
import React from 'react';
import './App.css';

const Note = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}

const App = (notes) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note.content} />
        )}
      </ul>
    </div>
  )
}


export default App;
