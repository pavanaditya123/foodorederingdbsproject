import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { assets } from '../../assets/assets';

const Navbar = () => {
  console.log('Navbar rendered');
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="logo" />
      <ul className="navbar-menu">
        <li> home </li>
        <li>menu </li>
        <li> mobile-app</li>
        <li>contact-us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>sign in </button>
      </div>
    </div>

  );
}

export default Navbar