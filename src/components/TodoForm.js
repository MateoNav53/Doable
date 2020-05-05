import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };


  return (
      <div>
        <h1>Manage Your Todos Here</h1>
        <form onSubmit={handleSubmit}>
          <input className="todo-form" type="text" value={value} placeholder="Add Todo items here" onChange={e => setValue(e.target.value)}/>
          <button className="todo-form" type="submit">Add</button>
        </form>
      </div>
    
  );
}

export default TodoForm;
