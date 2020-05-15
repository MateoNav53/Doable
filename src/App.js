import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Nav from './components/Nav';
import TodoList from './components/TodoList';
import { HashRouter, Switch, Route } from 'react-router-dom';

function App(){
  
  return (
      <div className="App">
        <HashRouter>
          <Nav />
          <Switch>
            <Route path="/" exact component={TodoList} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <footer className="sticky-bottom">
            Copyright Mateo Navarrette 2020
          </footer>
        </HashRouter>
      </div>
  )
}

export default App;

