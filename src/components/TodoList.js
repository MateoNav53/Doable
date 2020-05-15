import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoList(){
  const [newInput, setNewInput] = useState('')
  const [todoItems, setTodoItems] = useState([])
  const [error, setError] = useState('');
  const [editDisable, setEditDisable] = useState(false);

  const handleInputChange = (e) => {
    e.preventDefault();
    setNewInput(e.target.value)
  }

  const handleTodoItems = (e) => {
    if (editDisable) {
      setEditDisable(false)
    }
    e.preventDefault();
    if (newInput==="") {
      setError("Input field cannot be empty");
    } else if ( (typeof todoItems.find( ({text}) => text === newInput)) !== 'undefined'  ) {
      setError('Todo List item cannot be duplicate')
    } else {
      setTodoItems([...todoItems, {id: uuidv4(), text: newInput}]);
      setError('')
      e.target.reset();
      setNewInput("");
      }
  }

  const deleteTodo = (id, e) => {
    e.preventDefault()
    setTodoItems(todoItems.filter((todoItem) => todoItem.id !== id))
  }
  
  const editTodo = (id, e) => { 
    if(!editDisable){
      e.preventDefault()
      const todoObject = todoItems.find((todoItem) => todoItem.id === id)
      deleteTodo(id, e)
      setNewInput(todoObject.text)
      setEditDisable(true)
    }
  }


  const generateTodo = todoItems.map((todoItem) => (
    <li className="todo col-md-6 offset-md-3" key={todoItem.id} >
      {todoItem.text}
    <div>
      <button disabled={editDisable} id="edit-btn"className="btn btn-info" onClick={(e) => editTodo(todoItem.id, e)}>Edit</button>
      <button className="btn btn-danger" onClick={(e) => deleteTodo(todoItem.id, e)}>Delete</button>
    </div>
    </li>
    ));
  
  return (
      <div className="App text-center">
        <h1>Manage Your Todo List</h1>
        <form className="todo-list text-center" onSubmit={handleTodoItems}>
          <input size="30"className="todo-form" placeholder="Enter your todo here" value={newInput} onChange={handleInputChange} />
          <button className="todo-form btn btn-success" type="submit">Add</button>
          <div className="error-message">{error}</div>
          <ul className="remove-default-padding">
            {generateTodo}
          </ul>
        </form>
      </div>
  )
}

export default TodoList