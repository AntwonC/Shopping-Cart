import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import App from '../App';
import About from './About';
import Store from './Store';

const RouteSwitcher = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitcher;
