import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Placeorder from './pages/placeorder/Placeorder';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
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
