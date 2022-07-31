/* eslint-disable max-len */
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from './App';
import RouteSwitcher from './components/RouteSwitcher';
import NavBar from './components/NavBar';
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

  test('test page redirect after clicking element', () => {
    render(<RouteSwitcher />);

    const aboutElement = screen.getByText('About');

    userEvent.click(aboutElement);

    const aboutPageInfo = screen.getByText('Hello from About! Nice seeing you here.');

    expect(aboutPageInfo).toBeInTheDocument();
  });
});

