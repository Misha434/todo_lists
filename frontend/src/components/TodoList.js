import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
import { AiFillEdit } from 'react-icons/ai'

const SearchAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SearchForm = styled.input`
  font-size: 20px;
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 10px;
`

const RemoveAllButton = styled.button`
  width: 16%;
  height: 40px;
  background: #f54242;
  border: none;
  font-weight: 500;
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
`

const TodoName = styled.span`
  font-size: 27px;
  ${({ done }) => done && `
    opacity: 0.4;
  `}
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 7px auto;
  padding: 10px;
  font-style: 25px;
`

const CheckedBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 7px;
  color: green;
  cursor: pointer;
`

const UncheckedBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 7px;
  cursor: pointer;
`

const EditButton = styled.span`
  display: flex;
  align-items: center;
  margin: 0 7px;
`

function TodoList() {
  const [todos, setTodos] = useState([])
  const [searchName, setSearchName] = useState('')

  useEffect(()=> {
  axios.get('http://localhost:3001/api/v1/todos')
    .then(response => {
      console.log(response.data)
      setTodos(response.data)
    })
    .catch(e => {
      console.log(e)
    })
  }, [])

  const removeAllTodos = () => {
    const sure = window.confirm('Are you sure?')
    if (sure) {
      axios.delete('http://localhost:3001/api/v1/todos/destroy_all')
      .then(response => {
        setTodos([])
      })
      .catch( e => {
        console.log(e)
      })
    }
  }

  const updateIsCompleted = (index, val) => {
    const data = {
      id: val.id,
      task: val.task, 
      done: !val.done
    }
    axios.patch(`http://localhost:3001/api/v1/todos/${val.id}`, data)
    .then( response => {
      const newTodos = [...todos]
      newTodos[index].done = response.data.done
      setTodos(newTodos)
    })
  }

  return (
    <>
      <h1>Todo List</h1>
      <SearchAndButton>
        <SearchForm
          type='text'
          placeholder='Search todo...'
          onChange={event =>{
            setSearchName(event.target.value)
          }}
        />
        <RemoveAllButton onClick={removeAllTodos}>
          Remove All
        </RemoveAllButton>
      </SearchAndButton>
      <div>
        {todos.filter((val) => {
            if (searchName === "") {
              return val
            } else if (val.task.toLowerCase().includes(searchName.toLowerCase())) {
              return val
            } 
          }).map((val, key) => {
          return (
            <Row key={key}>
              {val.done ? (
                <CheckedBox>
                  <ImCheckboxChecked onClick={() => updateIsCompleted(key, val)} />
                </CheckedBox>
              ) : (
                <UncheckedBox>
                  <ImCheckboxUnchecked onClick={() => updateIsCompleted(key, val)} />
                </UncheckedBox>
              )}
              <TodoName done={val.done}>
                {val.task}
              </TodoName>
              <Link to={`/todos/${val.id}/edit`}>
                <EditButton>
                  <AiFillEdit />
                </EditButton>
              </Link>
            </Row>
          )
        })}
      </div>
    </>
  )
}

export default TodoList
