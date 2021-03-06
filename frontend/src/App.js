import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import EditTodo from './components/EditTodo'
// import axios from 'axios'

import './App.css'

const Navbar = styled.nav`
  background: #dbfffe;
  min-height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Logo = styled.div`
  font-weight: bold;
  font: 23px;
  letter-spacing: 3px;
  font-weight: bold;
`

const NavItems = styled.ul`
  display: flex;
  width: 400px;
  max-width: 40%;
  justify-content: space-around;
  list-style: none;
`

const NavItem = styled.li`
  font-size: 19px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  width: 700px;
  max-width: 85%;
  margin: 20px auto;
`

const App = () => {
   
  return (
    <>
      <Navbar>
        <Logo>
          ToDo
        </Logo>
        <NavItems>
          <NavItem>
            <Link to="/todos">
              Todos
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/todos/new">
              Add New Todo
            </Link>
          </NavItem>
        </NavItems>
      </Navbar>
      <Wrapper>
        <Switch>
          <Route exact path="/todos" component={TodoList}/>
          <Route exact path="/todos/new" component={AddTodo}/>
          <Route path="/todos/:id/edit" component={EditTodo}/>
        </Switch>
      </Wrapper>
    </>
  )
}

export default App;
