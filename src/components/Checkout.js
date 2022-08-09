/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import {useState, useEffect} from 'react';
import NavBar from './NavBar';
import '../styles/Checkout.css';

const Checkout = ({cart, totalCost, getSinglePrice}) => {
  const calculateTotalCost = () => {
    const cartArr = [...cart];
    let fullTotalCost = 0;

    for (let i = 0; i < cartArr.length; i++) {
      console.log(cartArr[i]);
      const addCost = cartArr[i].quantity * +getSinglePrice(cartArr[i].price);
      fullTotalCost += addCost;
    }

    return fullTotalCost;
  };
  const renderTotalCost = () => {
    const finalCost = calculateTotalCost();
    if ( finalCost === 0 ) {
      return <div></div>;
    } else {
      return <div className="total-cost-element">Total Cost: ${finalCost}</div>;
    }
  };

  const showCartItems = () => {
    const cartArr = [...cart];

    const cartElements = cartArr.map((cartElement) => {
      console.log(cartElement.src);
      return <li key={cartElement.id} className="cart-item">
        <img src={cartElement.src} alt={'bubbleGun'}/>
        <div>Quantity: {cartElement.quantity}</div>
        <div>Price: ${getSinglePrice(cartElement.price) * cartElement.quantity}</div>
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
    <div className="checkout-container">
      <h1 className="header-cart-info">You have {numberOfItems()} item in your cart!</h1>
      <ul>{showCartItems()}</ul>
      {renderTotalCost()}
    </div>
  );
};

export default Checkout;
