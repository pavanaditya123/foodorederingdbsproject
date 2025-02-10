import React from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';

const Navbar = () => {
  console.log('Navbar rendered');
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Company Logo" className="logo" />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile App</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;