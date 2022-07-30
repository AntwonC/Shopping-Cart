/* eslint-disable max-len */
import React from 'react';
import NavBar from './NavBar';
import ItemCard from './ItemCard';
import '../styles/Store.css';
import {useState, useEffect} from 'react';
import greenBubbleGunImage from '../images/green-bubble-gun.jpeg';
import blueBubbleGunImage from '../images/blue-bubble-gun.jpeg';
import purpleBubbleGunImage from '../images/purple-bubble-gun.jpg';

const Store = () => {
  // Call the function from the child component, but get the counter for that item
  return (
    <div className="store-container">
      <NavBar />
      <div className="grid-layout">
        <div id="grid-header">
          <h1>This is the Store!!!</h1>
        </div>
        <div id="grid-sidebar">
          <ul className="bubble-gun-list">
            <li id="bubble-gun-pistol">Pistols</li>
            <li id="bubble-gun-shotgun">Shotguns</li>
            <li id="bubble-gun-launcher">Launchers</li>
          </ul>
        </div>
        <div id="grid-main">
          <ItemCard
            id="green-bubble-gun"
            gunImage={greenBubbleGunImage}


          />
          <ItemCard
            id="blue-bubble-gun"
            gunImage={blueBubbleGunImage}


          />
          <ItemCard
            id="purple-bubble-gun"
            gunImage={purpleBubbleGunImage}

          />
          { /* <img id="green-bubble-gun" className="bubble-gun-image" src={greenBubbleGunImage} alt="greenBubbleGun"/>
          <img id="blue-bubble-gun" className="bubble-gun-image" src={blueBubbleGunImage} alt="blueBubbleGun" />
  <img id="purple-bubble-gun" className="bubble-gun-image" src={purpleBubbleGunImage} alt="purpleBubbleGun" /> */}
        </div>
      </div>
    </div>
  );
};

export default Store;
