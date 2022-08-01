/* eslint-disable max-len */
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from './App';
import RouteSwitcher from './components/RouteSwitcher';
import NavBar from './components/NavBar';
import Store from './components/Store';
import ItemCard from './components/ItemCard';
import GreenBubbleGun from './images/green-bubble-gun.jpeg';
import ShoppingCartImage from './images/shopping-cart.png';
import userEvent from '@testing-library/user-event';

describe('renders our RouteSwitcher with Navbar and elements', () => {
  test('testing all NavBar elements are present', () => {
    render(<RouteSwitcher />);

    const getHomeText = screen.getByText('Home');
    const getAboutText = screen.getByText('About');
    const getStoreText = screen.getByText('Store');
    const getShoppingCart = screen.getByAltText('pinkShoppingCart');

    expect(getHomeText).toBeInTheDocument();
    expect(getAboutText).toBeInTheDocument();
    expect(getStoreText).toBeInTheDocument();
    expect(getShoppingCart).toBeInTheDocument();
  });

  test('test page redirect after clicking About element', () => {
    render(<RouteSwitcher />);

    const aboutElement = screen.getByText('About');

    userEvent.click(aboutElement);

    const aboutPageInfo = screen.getByText('Hello from About! Nice seeing you here.');

    expect(aboutPageInfo).toBeInTheDocument();
  });

  test('test page redirect after clicking Store element', () => {
    render(<RouteSwitcher />);

    const userElement = screen.getByText('Store');

    userEvent.click(userElement);

    const storePageInfo = screen.getByText('This is the Store!!!');

    expect(storePageInfo).toBeInTheDocument();
  });

  test('test page redirect after clicking Home element', () => {
    render(<RouteSwitcher />);

    const homeElement = screen.getByText('Home');

    userEvent.click(homeElement);

    const homePageInfo = screen.getByText('Welcome to the Home Page!');

    expect(homePageInfo).toBeInTheDocument();
  });
});

describe('testing if images are on Store page', () => {
  test('check green bubble gun image loaded after navigating to Store page', () => {
    render(<RouteSwitcher />);
    /*  render(
        <BrowserRouter>
          <Routes>
            <Route path='/Store' element={<Store />} />
          </Routes>
        </BrowserRouter>); */

    const userElement = screen.getByText('Store');

    userEvent.click(userElement);

    const greenBubbleGunDiv = screen.getByTestId('green-bubble-gun');

    expect(greenBubbleGunDiv).toBeInTheDocument();
  });

  test('check blue bubble gun image loaded after navigating to Store page', () => {
    render(<RouteSwitcher />);


    const userElement = screen.getByText('Store');

    userEvent.click(userElement);


    const blueBubbleGunDiv = screen.getByTestId('blue-bubble-gun');

    expect(blueBubbleGunDiv).toBeInTheDocument();
  });

  test('check purple bubble gun image loaded after navigating to Store page', () => {
    render(<RouteSwitcher />);


    const userElement = screen.getByText('Store');

    userEvent.click(userElement);


    const purpleBubbleGunDiv = screen.getByTestId('purple-bubble-gun');

    expect(purpleBubbleGunDiv).toBeInTheDocument();
    ;
  });
});

