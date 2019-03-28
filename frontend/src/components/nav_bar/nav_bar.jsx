import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return props.isAuthenticated ? (
    <div className="nav">
      Logged in lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
      aperiam reprehenderit velit quas! Vel labore at, cumque deserunt
      repellendus odio explicabo nam commodi sequi sint eveniet, optio excepturi
      amet harum!
    </div>
  ) : (
      <div className="nav">
        <NavLink to="/signup">Sign Up</NavLink>
        <br />
        <NavLink to="/login">Log In</NavLink>
      </div>
    );
};

export default NavBar;
