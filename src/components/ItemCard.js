/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import {useState, useEffect} from 'react';
import '../styles/ItemCard.css';

const ItemCard = (props) => {
  const {gunImage, id} = props;
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div id={id} className="item-card">
      <img src={gunImage} className="bubble-gun-image" alt="bubbleGun" />
      <div className="user-amount-button">
        <button onClick={incrementCounter}>+</button>
        {counter}
        <button onClick={decrementCounter}>-</button>
      </div>
    </div>
  );
};

export default ItemCard;
