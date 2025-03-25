import React, { useContext } from 'react';
import './Fooddisplay.css'
import { StoreContext } from '../../context/Storecontext';
import Fooditem from '../Fooditem/fooditem';

const Fooddisplay = ({category}) => {
    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display'id='food-display'>
      <h2>
        Top dishes near you 
      </h2>
      <div className='food-display-list'>
        {
          food_list.map((item,index)=>{

            return<Fooditem key={index}  id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>        
          })}

      </div>
    </div>
  )
}

export default Fooddisplay;