import React, { useState } from 'react';
import './App.css';
import Contact from './Contact'
import Nav from './components/Nav'
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom'
import TodoForm from './components/TodoForm';
import { v4 as uuidv4 } from 'uuid';

function App(){
  const [newInput, setNewInput] = useState('')
  const [todoItems, setTodoItems] = useState([])

  //Stores the state of input field
  function handleInputChange(e){
    e.preventDefault();
    setNewInput(e.target.value)
  }

  //Stores the state of submitted input in a list
  function handleTodoItems(e){
    e.preventDefault();
    if (newInput === "") {
      return (alert("Input field cannot be empty"))
    }
    setTodoItems([...todoItems, {id: uuidv4(), text: newInput}])
    e.target.reset()
    setNewInput("")
  }
  
  function deleteTodo(id) {
    setTodoItems(todoItems).filter((todoItem) => todoItem.id !== id)
  }
  
  return (
    // <HashRouter>
      <div className="App">
      {/* <Switch>
         <Route path="/" exact component={App} />
         <Route path="/contact" component={Contact} />
      </Switch> */}
        <Nav />
        <h1>Manage Your Todo List</h1>
        <form className="todo-list" onSubmit={handleTodoItems}>
          <input className="todo-form" placeholder="Enter your todo here" onChange={handleInputChange} />
          <button className="todo-form btn btn-success" type="submit">Add</button>
          <ul>
            {todoItems.map((todoItem) => (
              <li className="todo" key={todoItem.id}>{todoItem.text}
              <button className="btn btn-danger" onClick={() => deleteTodo(todoItem.id)}>Delete</button>
              </li>
              
            ))}
          </ul>
        </form>
        <footer>
          Copyright Mateo Navarrette 2020
        </footer>
      </div>
  )
}

export default App;

