import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
      <nav className="navbar navbar-expand-sm navbar-light">
          <h2>DoAble - Todo App</h2>
          <ul className="nav-links navbar-nav navbar-brand">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#link_targets">
            <span className="navbar-toggler-icon"></span>
            </button>
              <div className="collapse navbar-collapse" id="link_targets">
                <Link to='/'>
                    <li className="nav-item">
                        Todos
                    </li>
                </Link>
                <Link to='/contact'>
                    <li className="nav-item">
                        Contact
                    </li>
                </Link>
              </div>
          </ul>
      </nav>
  );
}

export default Nav;
