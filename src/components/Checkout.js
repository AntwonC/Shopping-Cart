/* eslint-disable react/prop-types */
import React from 'react';
import {useState, useEffect} from 'react';
import NavBar from './NavBar';
import '../styles/Checkout.css';

const Checkout = ({cart, totalCost, getSinglePrice}) => {
  const showCartItems = () => {
    const cartArr = [...cart];

    const cartElements = cartArr.map((cartElement) => {
      console.log(cartElement.src);
      return <li key={cartElement.id} className="cart-item">
        <img src={cartElement.src} alt={'bubbleGun'}/>
        <div>Quantity: {cartElement.quantity}</div>
        <div>Quantity: {cartElement.quantity}</div>
      </li>;
    });

    return cartElements;
  };
  const numberOfItems = () => {
    let countItems = 0;

    for (let i = 0; i < cart.length; i++) {
      console.log(`Items in the cart: ${cart[i]}`);
      countItems++;
    }

    return countItems;
  };

  return (
    <div>
      <h1>You have {numberOfItems()} item in your cart!</h1>
      <ul>{showCartItems()}</ul>
    </div>
  );
};

export default Checkout;
