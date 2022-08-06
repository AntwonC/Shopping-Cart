/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import {useState, useEffect} from 'react';
import '../styles/ItemCard.css';

const ItemCard = (props) => {
  const {gunImage, id, price, addToCart, quantity, products, item, setProducts} = props;
  const [counter, setCounter] = useState(quantity);

  const incrementCounter = () => {
    setCounter((prevValue) => prevValue + 1);
  };

  const decrementCounter = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };

  const customAmount = (evt) => {
    console.log(evt.target.value);
    setCounter((prevValue) => +evt.target.value);
  };

  const changeQuantity = () => {
    // Modify products array
    const productsArr = [...products];
    for (let i = 0; i < productsArr.length; i++) {
      // console.log(productsArr[i]);
      if ( productsArr[i] === item ) {
        // console.log(productsArr[i]);
        productsArr[i].quantity = counter;
      }
    }

    setProducts(productsArr);
    // console.log(item);
  };

  return (
    <div data-testid={id} className="item-card">
      <img src={gunImage} className="bubble-gun-image" alt="bubbleGun" />
      <div className="user-amount-button">
        <div id="button-container">
          <button className="operation-button" onClick={decrementCounter}>-</button>
          <input type="text"
            id="counter-display-element"
            value={counter}
            onChange={customAmount}/>
          <button className="operation-button" onClick={incrementCounter}>+</button>
        </div>
        <div id="bubble-gun-price-element">{price}</div>
        <button id="add-cart-button" onClick={() => {
          changeQuantity(); addToCart();
        }}>Add</button>
      </div>
    </div>
  );
};

export default ItemCard;
