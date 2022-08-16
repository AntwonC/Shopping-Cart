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

  const [disablePistolClick, setDisablePistolClick] = useState(true);
  const [disableShotgunClick, setDisableShotgunClick] = useState(false);
  const [disableLauncherClick, setDisableLauncherClick] = useState(false);

  const updateItems = (evt) => {
    const {textContent} = evt.target;
    console.log(evt.target.textContent.substring(0, textContent.length-1));

    if ( textContent === 'Pistols' ) {
      setShotgunState(false);
      setLauncherState(false);
      // Make sure options are clickable again
      setDisablePistolClick(true);
      setDisableShotgunClick(false);
      setDisableLauncherClick(false);

      setPistolState((prevValue) => !prevValue);
    } else if ( textContent === 'Shotguns' ) {
      setPistolState(false);
      setLauncherState(false);

      // Make sure options are clickable again
      setDisablePistolClick(false);
      setDisableShotgunClick(true);
      setDisableLauncherClick(false);

      setShotgunState((prevValue) => !prevValue);
    } else if ( textContent === 'Launchers' ) {
      setPistolState(false);
      setShotgunState(false);

      // Make sure options are clickable again
      setDisablePistolClick(false);
      setDisableShotgunClick(false);
      setDisableLauncherClick(true);

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

  const filterLauncherFunction = (item) => {
    // console.log(item);
    if (item.category === 'Launcher') {
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

  const showLaunchers = () => {
    const launcherArr = products.filter(filterLauncherFunction);

    const updatedLauncherArr = launcherArr.map((item) => {
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
    return updatedLauncherArr;
  };


  // Call the function from the child component, but get the counter for that item
  return (
    <div className="store-container">
      <div className="grid-layout">
        <p className="info-text">Pick your favorite bubble gun!</p>
        <div id="grid-sidebar">
          <ul className="bubble-gun-list">
            <option id="bubble-gun-pistol" className='gun-option' disabled={disablePistolClick} onClick={updateItems}>Pistols</option>
            <option id="bubble-gun-shotgun" className='gun-option' disabled={disableShotgunClick} onClick={updateItems}>Shotguns</option>
            <option id="bubble-gun-launcher" className='gun-option' disabled={disableLauncherClick} onClick={updateItems}>Launchers</option>
          </ul>
        </div>
        <div id="grid-main">

          {pistolState && showPistols()}
          {shotgunState && showShotguns()}
          {launcherState && showLaunchers()}

        </div>
      </div>
    </div>
  );
};

export default Store;
