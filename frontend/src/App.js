// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import Notification from './components/Notification'

import './App.css'

import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('some error happened...')


  useEffect(() => {
    noteService
      .getAll()
      .then(initalNotes => {
        setNotes(initalNotes)
      })
    }, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService
      .update(id, changedNote).then(returnNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnNote))
      })
      .catch(error => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server `
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const changedNote = { ...notes, important: !notes.important }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)
  
  const Footer = () => {
    const footerStyle = {
      color: 'green',
      fontStyle: 'italic',
      fontSize: 16
    }
    return (
      <div style={footerStyle}>
        <br />
        <em>Note app</em>
      </div>
    )
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </>
      <ul>
        {notesToShow.map(note => 
          <Note 
            key={note.id}
            note={note}
            toggleImportance={()=> toggleImportanceOf(note.id)}
          />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button> 
      </form>
      <Footer />
    </div>
  )
}


export default App;
