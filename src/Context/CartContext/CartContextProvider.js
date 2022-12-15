import React, { useState, useEffect } from "react";

import { Provider } from "./CartContext";

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const addToCart = (item) => {
    if (cartItems.includes(item)) return;
    setCartItems([...cartItems, item]);
    setTotalCost(totalCost + item.productPrice);
  };

  const removeFromCart = (item) => {
    console.log("entre");
    let updatedCartItems = cartItems.filter(
      (cartItem, index) => index !== item.id
    );
    setCartItems(updatedCartItems);
    setTotalCost(totalCost - item.productPrice);
  };

  return (
    <Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        totalCost,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartContextProvider;
