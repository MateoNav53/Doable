import React from 'react';

const Todos = (props) =>{
  return (
      <div>
        <h1>Manage Your Todo List</h1>
        <form>
          <input className="todo-form" type="text" placeholder="Add Todo items here"/>
          <button className="todo-form" type="submit">Add</button>
        </form>
      </div>
    
  );
}

export default Todos;
