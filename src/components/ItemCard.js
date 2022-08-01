/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import {useState, useEffect} from 'react';
import '../styles/ItemCard.css';

const ItemCard = (props) => {
  const {gunImage, id, price} = props;
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div data-testid={id} id={id} className="item-card">
      <img src={gunImage} className="bubble-gun-image" alt="bubbleGun" />
      <div className="user-amount-button">
        <div id="button-container">
          <button onClick={decrementCounter}>-</button>
          <div id="counter-display-element">{counter}</div>
          <button onClick={incrementCounter}>+</button>
        </div>
        <div id="bubble-gun-price-element">{price}</div>
      </div>
    </div>
  );
};

export default ItemCard;
