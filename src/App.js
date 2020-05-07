import React, { useState } from 'react';
import './App.css';
import Contact from './Contact'
import Nav from './components/Nav'
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom'
import TodoForm from './components/TodoForm';
import { v4 as uuidv4 } from 'uuid';


const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

function App() {
  const [todoItem, setTodoItem] = useState([
    {
      text: "Add items to List"
    },
    {
      text: "Mark Items Complete"
    },
    {
      text: "Delete Items"
    },
  ])

  const addTodo = text => {
    const newTodos = [...todoItem, {text}]
    setTodoItem(newTodos);
  }; 

  return (
    <HashRouter>
      <div className="App">
        <div className="todo-list">
          <Nav />
          <Switch>
            <Route path="/" exact component={TodoForm} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <TodoForm addTodo={addTodo} />
          {todoItem.map((todo, index) => (
            <Todo
            key={index}
            index={index}
            todo={todo}
            />
          ))}
        </div>
      </div>
    </HashRouter>
    
  );
}

export default App;
