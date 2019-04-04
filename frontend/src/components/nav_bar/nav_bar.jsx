import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-transparent.png';

const NavBar = ({ isAuthenticated, openModal }) => {
  return isAuthenticated ? (
    <div className="nav">
      Logged in lorem ipsum dolor sit amet consectetur adipisicing elit.
      Dolorem aperiam reprehenderit velit quas! Vel labore at, cumque deserunt
      repellendus odio explicabo nam commodi sequi sint eveniet, optio
      excepturi amet harum!
    </div>
  ) : (
    <div className="nav">
      <Link to="/"><img src={logo} alt="logo" /></Link>
      <div className="nav-links">
        <div className="nav-link" onClick={() => openModal('Register')}>
          Sign Up
        </div>
        <br />
        <div className="nav-link" onClick={() => openModal('Log In')}>
          Log In
        </div>
      </div>
    </div>
  );
};

export default NavBar;
