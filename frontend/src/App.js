// import logo from './logo.svg';
import React from 'react';
import Note from './components/Note';
import './App.css';

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
