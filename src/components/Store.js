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
  const [pistolState, setPistolState] = useState(true);
  const [shotgunState, setShotgunState] = useState(false);
  const [launcherState, setLauncherState] = useState(false);

  const updateItems = (evt) => {
    const {textContent} = evt.target;
    console.log(evt.target.textContent.substring(0, textContent.length-1));

    if ( textContent === 'Pistols' ) {
      setShotgunState(false);
      setLauncherState(false);
      setPistolState((prevValue) => !prevValue);
    } else if ( textContent === 'Shotguns' ) {
      setPistolState(false);
      setLauncherState(false);
      setShotgunState((prevValue) => !prevValue);
    } else if ( textContent === 'Launchers' ) {
      setPistolState(false);
      setShotgunState(false);
      setLauncherState((prevValue) => !prevValue);
    }
    // set[textContent.substring(0, textContent.length-1).toLowerCase()] + State =
  };
  const filterPistolFunction = (item) => {
    // console.log(item);
    if (item.category === 'Pistol') {
      return true;
    }

    return false;
  };

  const filterShotgunFunction = (item) => {
    // console.log(item);
    if (item.category === 'Shotgun') {
      return true;
    }

    return false;
  };

  const showPistols = () => {
    const pistolsArr = products.filter(filterPistolFunction);

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

  const showShotguns = () => {
    const shotgunArr = products.filter(filterShotgunFunction);

    const updatedShotgunsArr = shotgunArr.map((item) => {
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
    return updatedShotgunsArr;
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
            <option id="bubble-gun-pistol" onClick={updateItems}>Pistols</option>
            <option id="bubble-gun-shotgun" onClick={updateItems}>Shotguns</option>
            <option id="bubble-gun-launcher" onClick={updateItems}>Launchers</option>
          </ul>
        </div>
        <div id="grid-main">

          {pistolState && showPistols()}
          {shotgunState && showShotguns()}
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
