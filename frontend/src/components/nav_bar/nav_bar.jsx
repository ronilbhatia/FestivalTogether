import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-transparent.png';

const NavBar = ({ isAuthenticated, openModal, logoutUser }) => {
  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      { 
        isAuthenticated ? (
          <div className="nav-links">
            <div className="nav-link" onClick={logoutUser}>
              Log Out
            </div>
          </div>
        ) : (
          <div className="nav-links">
            <div className="nav-link" onClick={() => openModal("Register")}>
              Sign Up
            </div>
            <div className="nav-link" onClick={() => openModal("Log In")}>
              Log In
            </div>
          </div>
        )
      }
    </div>
  )
};

export default NavBar;
