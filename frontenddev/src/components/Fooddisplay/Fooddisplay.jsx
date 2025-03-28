import React, { useContext, useRef, useEffect } from 'react';
import './Fooddisplay.css';
import { StoreContext } from '../../context/Storecontext';
import Fooditem from '../Fooditem/fooditem';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Fooddisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const foodDisplayRef = useRef(null);

  useGSAP(() => {
    const items = foodDisplayRef.current.querySelectorAll('.food-item');

    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    gsap.fromTo(
      items,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: foodDisplayRef.current,
          start: 'top 80%',
          
          toggleActions: 'play none none reset',
        },
      }
    );
    return ()=>{
      scrollTrigger.getAll.forEach(trigger=>trigger.kill());
    }
  }, [category, food_list]);

  return (
    <div className="food-display" id="food-display" ref={foodDisplayRef}>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <Fooditem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Fooddisplay;
