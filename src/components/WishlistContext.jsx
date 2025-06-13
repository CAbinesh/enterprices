import React, { createContext, useContext, useState } from "react";
const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  const addWishList = (product) => {
    setWishList((prev) => {
      const exist = prev.find((item) => item.name === product.name);
      if (!exist) return [...prev, product];
      return prev;
    });
  };
  return (
    <WishListContext.Provider value={{ wishList, addWishList }}>
      {children}
    </WishListContext.Provider>
  );
};
export const useWishlist=()=>useContext(WishListContext)
