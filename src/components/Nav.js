import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
      <nav className="navbar">
          <h2>Doable - React Todo App</h2>
          <ul className="nav-links">
              {/* <Link to='/'> */}
                  <li>Todos</li>
              {/* </Link> */}
              {/* <Link to='/contact'> */}
                  <li>Contact</li>
              {/* </Link> */}
          </ul>
      </nav>
  );
}

export default Nav;
