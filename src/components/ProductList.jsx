import React from "react";
import { products } from "./data";
import { useSearch } from "./SearchContext.jsx";
import { useWishlist } from "./WishlistContext";
import { useCartList } from "./CartListContext";


function ProductList() {
  const { search } = useSearch();
    const {  addWishList } = useWishlist();
    const {addCartList}=useCartList()
  
  const trimmed = search.trim().toLowerCase();

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(trimmed)
  );


  return (
    <div className="product-list">
      {filtered.length === 0 ? (
        <p>No results found for "{search}"</p>
      ) : (
        filtered.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <button className="btn1">Buy Now</button>
                <button onClick={()=>addCartList(item)} className="btn2">Add to Cart</button>
                <button
                  className="btn3"
                  onClick={() => {
                    addWishList(item);
                    
                  }}
                >
                  💖
                </button>

          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
