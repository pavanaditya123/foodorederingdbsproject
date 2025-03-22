import React, { useState } from 'react';
import './Home.css'
import Header from '../../components/Header/Header';
import Exploremenu from '../../components/Exploremenu/Exploremenu';
import Fooddisplay from '../../components/Fooddisplay/fooddisplay';
const Home = () => {

    const [Category,setCategory]=useState("All");
    return (
        <div>
            <Header />
            <Exploremenu Category={Category} setCategory={setCategory} />
            <Fooddisplay />
        </div>
    );
}

export default Home;
