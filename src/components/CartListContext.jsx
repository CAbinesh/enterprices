import React, { createContext, useContext, useState } from "react";
 const CartListContext=createContext()

 export const CartListProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addCartList = (product) => {
    setCartList((prev) => {
      const exist = prev.find((item) => item.name === product.name);
      if (exist) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (name) => {
    setCartList((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (name) => {
    setCartList((prev) =>
      prev.map((item) =>
        item.name === name && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartListContext.Provider
      value={{ cartList, addCartList, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </CartListContext.Provider>
  );
};

 export const useCartList=()=>useContext(CartListContext)