import './App.css';
import {useState, useEffect} from 'react';
import React from 'react';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
      <NavBar />
      <div>Welcome to the Home Page!</div>
    </div>
  );
};

export default App;
