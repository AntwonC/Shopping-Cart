/* eslint-disable max-len */
import './App.css';
import {useState, useEffect} from 'react';
import React from 'react';
import NavBar from './components/NavBar';
import homePageImage from './images/home_page_image.jpeg';

const App = () => {
  return (
    <div className="home-container">
      <div>
        <h1>Welcome to the Bubble Gun store!</h1>
        <p>We provide you and your friends and family a good time with bubbles!</p>
      </div>
      <img src={homePageImage} className="home-page-image" alt="home-page-bubble-image"/>
    </div>
  );
};

export default App;
