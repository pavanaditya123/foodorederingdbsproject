import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Placeorder from './pages/placeorder/Placeorder';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import Cart from './pages/Cart/Cart';
import Footer from './components/footer/footer';
import LoginPopup from './components/LoginPopup.jsx/LoginPopup';

const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />


    </>

  );
};

export default App;
