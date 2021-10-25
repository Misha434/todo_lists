// todo_list.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Todo app', function() {
  const green = 'rgb(0, 128, 0)'

  it('front page can be opened', function() {
    cy.visit('http://localhost:3000/todos')
    cy.get('h1').should('contain', 'Todo List')
  })

  it('adding task is working from todos/new', function() {
    cy.visit('http://localhost:3000/todos/new')
    cy.get('h1').should('contain', 'New Todo')
    cy.get('input').type('Hello, World')
    cy.get('button').click()
    cy.get('span').should('contain', 'Hello, World')
  })
  
  it('task can be checked', function() {
    cy.visit('http://localhost:3000/todos')
    cy.get('[data-e2e="checkbox-0"]').click()
    .get('[data-e2e="checkbox-0"]').should('have.css', 'color', green)
  })
  it('task can be unchecked', function() {
    cy.visit('http://localhost:3000/todos')
    cy.get('[data-e2e="checkbox-0"]').click()
    .get('[data-e2e="checkbox-0"]').should('not.have.css', 'color', green)
  })
  
  it('task name can be edited', function() {
    cy.visit('http://localhost:3000/todos')

    cy.get('[data-e2e="todo-link-0"]').click()
    cy.get('input').clear().type('Washing dishes')
    cy.contains('Update').click()	
    
    cy.get('span').should('contain', 'Washing dishes')
  })
  it('task status can be changed to Completed', function() {
    cy.visit('http://localhost:3000/todos')
    
    cy.get('[data-e2e="todo-link-0"]').click()
    cy.get('[data-e2e="status"]').should('contain', 'UnCompleted')
    cy.get('button').contains('Completed').click()
    cy.get('[data-e2e="status"]').should('contain', 'Completed')
    
    cy.visit('http://localhost:3000/todos')
    cy.get('[data-e2e="checkbox-0"]').should('have.css', 'color', green)
  })
  it('task status can be changed to UnCompleted', function() {
    cy.get('[data-e2e="todo-link-0"]').click()
    cy.get('button').contains('UnCompleted').click()
    cy.get('[data-e2e="status"]').should('contain', 'UnCompleted')
    
    cy.visit('http://localhost:3000/todos')
    cy.get('[data-e2e="checkbox-0"]').should('not.have.css', 'color', green)
  })
  it('task can be deleted', function() {
    cy.get('[data-e2e="todo-link-0"]').click()
    cy.get('button').contains('Delete').click()
    cy.on('window:confirm', () => true);
    cy.get('[data-e2e="todos"]').should('not.contain', 'Washing dishes')
  })
  
  it('tasks can be filtered 2 tasks with keyword Buy', function() {
    const tasks = ["Buy coffee", "Buy tea", "Pay tax", "Wash car"]
    for (let index = 0; index < tasks.length; index++){
      cy.visit('http://localhost:3000/todos/new')
      cy.get('input').type(`${tasks[index]}`)
      cy.get('button').click()
    }
    
    cy.get('input').type('Buy')
    cy.get('[data-e2e="task-0"]').should('contain', "Buy coffee")
    cy.get('[data-e2e="task-1"]').should('contain', "Buy tea")
  })
  
  it('4 tasks can be deleted from all delete button', function() {
    cy.get('input').clear()

    cy.get('button').contains('Remove All').click()
    cy.on('window:confirm', () => true);
    cy.get('[data-e2e="todos"]').should('not.contain', 'Wash car')
  })

})