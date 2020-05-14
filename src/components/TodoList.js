import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoList(){
  const [newInput, setNewInput] = useState('')
  const [todoItems, setTodoItems] = useState([])
  const [error, setError] = useState('');
  const [editState, setEditState] = useState(false);

  //Stores the state of input field
  const handleInputChange = (e) => {
    e.preventDefault();
    setNewInput(e.target.value)
  }

  //Stores the state of submitted input in a list
  const handleTodoItems = (e) => {
    //If we are submitting an edit, we want to exit the edit state so buttons are available
    if (editState) {
      setEditState(false)
    }
    e.preventDefault();
    if (newInput==="") {
      setError("Input field cannot be empty");
     //goes through each element of todoItems list and finds the element that's the same as newInput
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
  
  //prevent the default action
  //create a new variable that represents the todo object as a whole
  //delete the todo with the id that was clicked on
  //set the state to be the text of the object from the variable. that returns it to the input field. 
  const editTodo = (id, e) => { 
    //if we aren't in the edit state, run the normal edit function.
    //We are in the edit state when the edit button is pressed
    if(!editState){
      e.preventDefault()
      const todoObject = todoItems.find((todoItem) => todoItem.id === id)
      deleteTodo(id, e)
      setNewInput(todoObject.text)
      //if we run the edit function, edit disabling state is set to true. 
      setEditState(true)
    }
  }


  const generateTodo = todoItems.map((todoItem) => (
    <li className="todo col-md-6 offset-md-3" key={todoItem.id} >
      {todoItem.text}
    <div>
      <button disabled={editState} id="edit-btn"className="btn btn-info" onClick={(e) => editTodo(todoItem.id, e)}>Edit</button>
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