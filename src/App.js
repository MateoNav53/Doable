import React from 'react';
import './App.css';
import Contact from './Contact'
import Nav from './components/Nav'
import TodoList from './components/TodoList'
import { BrowserRouter as HashRouter, Switch, Route } from 'react-router-dom'

function App(){
  
  return (
      <div className="App">
        <HashRouter>
          <Nav />
          <Switch>
            <Route path="/" exact component={TodoList} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <footer>
            Copyright Mateo Navarrette 2020
          </footer>
        </HashRouter>
      </div>
  )
}

export default App;

