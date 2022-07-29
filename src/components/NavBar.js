/* eslint-disable max-len */
import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/Navbar.css';
import ShoppingCartImage from '../images/shopping-cart.png';

const NavBar = () => {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    // const navigate = useNavigate();
    navigate('/About');
  };

  const navigateToStore = () => {
    navigate('/Store');
  };

  const navigateToHome = () => {
    navigate('/');
  };


  return (
    <div>
      <nav className="navbar-container">
        <nav className="navbar-links-container">
          <a className="navbar-element" onClick={navigateToHome}>Home</a>
          <a className="navbar-element" onClick={navigateToStore}>Store</a>
          <a className="navbar-element" onClick={navigateToAbout}>About</a>
          <img className="navbar-element" src={ShoppingCartImage} alt="pinkShoppingCart"/>
        </nav>
      </nav>
    </div>
  );
};

export default NavBar;
