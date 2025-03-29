import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartitems, setcartitems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : {};
    });

    const addtocart = (itemid) => {
        setcartitems((prev) => {
            const updated = { ...prev, [itemid]: (prev[itemid] || 0) + 1 };
            localStorage.setItem("cartItems", JSON.stringify(updated));
            return updated;
        });
    };

    const removefromcart = (itemid) => {
        setcartitems((prev) => {
            const updated = { ...prev, [itemid]: prev[itemid] - 1 };
            localStorage.setItem("cartItems", JSON.stringify(updated));
            return updated;
        });
    };


    const getTotalcartAmount=()=>{
        let totalAmount=0;
        for (const item in cartitems) {
            if(cartitems[item]>0){
                let iteminfo=food_list.find((product)=>product._id===item);
                totalAmount+=iteminfo.price*cartitems[item];
            }
        }
        return totalAmount;
    }
    

    const contextValue = { food_list, cartitems, setcartitems, addtocart, removefromcart,getTotalcartAmount };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
