import React from 'react';
import './App.css';
import Contact from './Contact'
import Nav from './components/Nav'
import Todos from './components/Todos'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/todos" exact component={Todos} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
