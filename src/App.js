import React, { useState } from 'react';
import './App.css';
import Contact from './Contact'
import Nav from './components/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TodoForm from './components/TodoForm';


const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

function App() {
  const [todoItem, setTodoItem] = useState([
    {
      text: "Struggle with React"
    },
    {
      text: "Flail around blindly on the computer"
    },
    {
      text: "Become master programmer"
    },
  ])

  const addTodo = text => {
    const newTodos = [...todoItem, {text}]
    setTodoItem(newTodos);
  };

  return (
    <Router>
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
    </Router>
    
  );
}

export default App;
