import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const NavBar = props => {
  return props.isAuthenticated ? (
    <div className="nav">
      Logged in lorem ipsum dolor sit amet consectetur adipisicing elit.
      Dolorem aperiam reprehenderit velit quas! Vel labore at, cumque deserunt
      repellendus odio explicabo nam commodi sequi sint eveniet, optio
      excepturi amet harum!
    </div>
  ) : (
    <div className="nav">
      <img src={logo} alt="logo" />
      <div className="nav-links">
        <NavLink className="nav-link" to="/signup">
          Sign Up
        </NavLink>
        <br />
        <NavLink className="nav-link" to="/login">
          Log In
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
