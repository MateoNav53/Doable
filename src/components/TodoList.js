import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoList(){
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
    if (newInput==="") {
      return (alert("Input field cannot be empty"))
    }
    setTodoItems([...todoItems, {id: uuidv4(), text: newInput}]);
    e.target.reset();
    setNewInput("");
  }

  function deleteTodo(id) {
    setTodoItems(todoItems.filter((todoItem) => todoItem.id !== id))
  }
  
  return (
      <div className="App">
        <h1>Manage Your Todo List</h1>
        <form className="todo-list" onSubmit={handleTodoItems}>
          <input className="todo-form" placeholder="Enter your todo here" onChange={handleInputChange} />
          <button className="todo-form btn btn-success" type="submit">Add</button>
          <ul>
            {todoItems.map((todoItem) => (
            <li className="todo col-4 offset-4" key={todoItem.id}>{todoItem.text}
            <button className="btn btn-danger" onClick={() => deleteTodo(todoItem.id)}>Delete</button>
            </li>
              
            ))}
          </ul>
        </form>
      </div>
  )
}

export default TodoList