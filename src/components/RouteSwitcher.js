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
  const [cartAmount, setCartAmount] = useState(0);

  const getIntPrice = (price) => {
    const itemPrice = price.substring(1, price.length);
    console.log(itemPrice);
    return itemPrice;
  };

  const removeCartItem = (element) => {
    const cartArr = [...cart];

    console.log(`element: ${element.src}`);

    const updatedCartArr = cartArr.filter((item) => item.src !== element.src);

    setCartAmount((prevValue) => prevValue - 1);
    setCart(updatedCartArr);
  };

  const updateDuplicate = (item, price) => {
    const cartArr = [...cart];
    let dupe = false;

    for (let i = 0; i < cartArr.length; i++) {
      const cartItem = cartArr[i];

      if (cartItem === item) { // Duplicate;
        const buyAmount = item.quantity;

        // First subtract amount we initially have
        const subtractCost = buyAmount * +getIntPrice(cartItem.price);
        // setTotalCost((prevValue) => prevValue - subtractCost);
        // cartItem.quantity = buyAmount;
        const itemCost = cartItem.quantity * +getIntPrice(cartItem.price);
        // setCart(cartArr);
        dupe = true;
        break;
      }
    }
    console.log(dupe);
    return dupe;
  };

  const addToCart = (item) => {
    console.log(item);
    // console.log(item.quantity);
    const cartArr = [...cart];

    // const cartNoDupe = updateDuplicate(item, getIntPrice(item.price));

    if ( updateDuplicate(item, getIntPrice(item.price)) === false ) {
      const updatedCartArr = cartArr.concat(item);
      const buyAmount = item.quantity;
      const itemCost = buyAmount * getIntPrice(item.price);
      setCartAmount((prevValue) => prevValue + 1);
      setCart(updatedCartArr);
    }
    // console.log(`cartNoDupe: ${cartNoDupe}`);
    // Check if item already exists, update quantity and price instead. No dupes
  };

  return (
    <BrowserRouter>
      <NavBar cartNotif={cartAmount}/>
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
            removeItem={removeCartItem}
            totalCost={totalCost}
            getSinglePrice={getIntPrice}
          />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitcher;
