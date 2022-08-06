import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import items from '../data/items';
import React from 'react';
import App from '../App';
import About from './About';
import Store from './Store';
import Checkout from './Checkout';
import NavBar from './NavBar';

const RouteSwitcher = () => {
  const [products, setProducts] = useState(items);
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const getIntPrice = (price) => {
    const itemPrice = price.substring(1, price.length);
    console.log(itemPrice);
    return itemPrice;
  };

  const addToCart = (item) => {
    console.log(item);
    console.log(item.quantity);
    const cartArr = [...cart, item];

    const buyAmount = item.quantity;
    const itemCost = buyAmount * getIntPrice(item.price);
    setTotalCost((prevValue) => prevValue + +itemCost);
    // console.log(`totalCost: ${totalCost}`);
    // setTotalCost((prevTotal) => prevTotal + item.price);
    setCart(cartArr);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Store"
          element={<Store
            products={products}
            setProducts={setProducts}
            cart={cart}
            totalCost={totalCost}
            addItem={addToCart}
          />} />
        <Route path="/Checkout"
          element={<Checkout
            cart={cart}
            totalCost={totalCost}
            getSinglePrice={getIntPrice}
          />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitcher;
