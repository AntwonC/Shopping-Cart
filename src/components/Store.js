/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import NavBar from './NavBar';
import ItemCard from './ItemCard';
import Checkout from './Checkout';
import '../styles/Store.css';
import {useState, useEffect} from 'react';
import items from '../data/items';

const Store = ({products, setProducts, cart, totalCost, addItem}) => {
  const filterFunction = (item) => {
    // console.log(item);
    if (item.category === 'Pistol') {
      return true;
    }

    return false;
  };

  const showPistols = () => {
    const pistolsArr = products.filter(filterFunction);

    const updatedPistolsArr = pistolsArr.map((item) => {
      return <ItemCard
        gunImage={item.src}
        id={item.id}
        price={item.price}
        addToCart={() => addItem(item)}
        quantity={item.quantity}
        products={products}
        item={item}
        setProducts={setProducts}
        key={item.name}
      />;
    });
    // console.log(updatedPistolsArr);
    return updatedPistolsArr;
  };
  // Call the function from the child component, but get the counter for that item
  return (
    <div className="store-container">
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

          {showPistols()}
          {/* <ItemCard
            id="green-bubble-gun"
            gunImage={greenBubbleGunImage}
            price={'$7.99'}

          />
          <ItemCard
            id="blue-bubble-gun"
            gunImage={blueBubbleGunImage}
            price={'$8.99'}

          />
          <ItemCard
            id="purple-bubble-gun"
            gunImage={purpleBubbleGunImage}
            price={'$9.99'}

  />*/}


          { /* <img id="green-bubble-gun" className="bubble-gun-image" src={greenBubbleGunImage} alt="greenBubbleGun"/>
          <img id="blue-bubble-gun" className="bubble-gun-image" src={blueBubbleGunImage} alt="blueBubbleGun" />
  <img id="purple-bubble-gun" className="bubble-gun-image" src={purpleBubbleGunImage} alt="purpleBubbleGun" /> */}
        </div>
      </div>
    </div>
  );
};

export default Store;
