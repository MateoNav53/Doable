import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
        <h3>Cross-Off - React Todo App</h3>
        <ul className="nav-links">
            <Link to='/todos'>
                <li>Todos</li>
            </Link>
            <Link to='/contact'>
                <li>Contact</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
