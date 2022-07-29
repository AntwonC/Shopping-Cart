/* eslint-disable max-len */
import React from 'react';
import NavBar from './NavBar';
import '../styles/Store.css';
import greenBubbleGunImage from '../images/green-bubble-gun.jpeg';
import blueBubbleGunImage from '../images/blue-bubble-gun.jpeg';

const Store = () => {
  return (
    <div className="store-container">
      <NavBar />
      <div className="grid-layout">
        <div id="grid-header">
          <h1>This is the Store!!!</h1>
        </div>
        <div id="grid-sidebar">
          <ul className="bubble-gun-list">
            <li>Pistols</li>
            <li>Shotguns</li>
            <li>Launchers</li>
          </ul>
        </div>
        <div id="grid-main">
          <img id="green-bubble-gun" src={greenBubbleGunImage} alt="greenBubbleGun"/>
          <img id="blue-bubble-gun" src={blueBubbleGunImage} alt="blueBubbleGun" />
        </div>
      </div>
    </div>
  );
};

export default Store;
