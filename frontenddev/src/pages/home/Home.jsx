import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Exploremenu from '../../components/Exploremenu/Exploremenu';
import Fooddisplay from '../../components/Fooddisplay/fooddisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
import burger from '../../assets/burger.png';
import pizza from '../../assets/pizza.png';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      {/* Floating icons */}
      <div className="floating-icons">
        <img src={burger} alt="burger" />
        <img src={pizza} alt="pizza" />
      </div>

      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <Fooddisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
