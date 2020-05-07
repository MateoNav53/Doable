import React, { useState } from 'react';
import './App.css';
import Contact from './Contact'
import Nav from './components/Nav'
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom'
import TodoForm from './components/TodoForm';
import { v4 as uuidv4 } from 'uuid';

function App(){
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])

  function handleInputChange(e){
    e.preventDefault();
    setNewTodo(e.target.value)
  }

  function handleNewTodo(e){
    e.preventDefault();
    setNewTodo(e.target.value)
    console.log(newTodo)
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
        <form onSubmit={handleNewTodo}>
          <input className="todo-form" placeholder="Enter your todo here" onChange={handleInputChange} />
          <button className="todo-form" type="submit">Add</button>
          <ul>
            <li>Do Laundry</li>
            <li>Go to the bank</li>
          </ul>
        </form>
      </div>
    // </HashRouter>
    
  )
}

// const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

// function App() {
// const [todoItem, setTodoItem] = useState([
//   {
//     text: "Add items to List"
//   },
//   {
//     text: "Mark Items Complete"
//   },
//   {
//     text: "Delete Items"
//   },
// ])

// const addTodo = text => {
//   const newTodos = [...todoItem, {text}]
//   setTodoItem(newTodos);
// }; 

// return (
//   <HashRouter>
//     <div className="App">
//       <div className="todo-list">
//         <Nav />
//         <Switch>
//           <Route path="/" exact component={TodoForm} />
//           <Route path="/contact" component={Contact} />
//         </Switch>
//         <TodoForm addTodo={addTodo} />
//         {todoItem.map((todo, index) => (
//           <Todo
//           key={index}
//           index={index}
//           todo={todo}
//           />
//         ))}
//       </div>
//     </div>
//   </HashRouter>
    
// );


export default App;
