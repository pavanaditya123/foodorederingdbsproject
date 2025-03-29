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

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartitems));
    }, [cartitems]);

    const contextValue = { food_list, cartitems, setcartitems, addtocart, removefromcart };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
