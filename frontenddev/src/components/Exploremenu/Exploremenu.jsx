import React from 'react';
import './Exploremenu.css'
import { menu_list } from '../../assets/assets';
const Exploremenu = () => {
  return (
    <div className='explore-menu'id='explore-menu'>
       <h1>Explore Our Menu</h1>
       <p className='explore-menu'>  choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisty your cravings and elevate your dining experience,one delicious meal at a time.</p>
        <div className='explore-menu list'>
        {menu_list.map((item,index)=>{
            return (
                <div key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} alt="{item.menu_name}" />
                    <p>{item.menu_name}</p>
                </div>

            )
        })}
        </div>
    </div>
  );
}

export default Exploremenu;
