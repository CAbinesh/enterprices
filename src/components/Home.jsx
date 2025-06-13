import React from "react";
import Sliders from "./sliders";
import Category from "./category.jsx";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "./WishlistContext";
import { useCartList } from "./CartListContext.jsx";
import { useSearch } from "./SearchContext.jsx";
import ProductList from "./ProductList"; // Add this at the top of Home.jsx



function Home() {
  const navigate=useNavigate()
  const{wishList}=useWishlist()
  const {cartList}=useCartList()
  const{search,setSearch}=useSearch()
  return (
    <>
      <div>
        <div className="header-bar">
          <h2>EnterP₹ices</h2>
          <div className="header-bar-icons">
            <input type="text" 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="🔎..." />
            {search && (
  <button onClick={() => setSearch("")}>❌</button>
)}
            <h4 onClick={()=>navigate('/Cart')}>🛒 Cart({cartList.length})</h4>
            <h4 onClick={()=>navigate('/wishlist')}>💖 Wish list ({wishList.length})</h4>
            <h4>🔔 notification</h4>
            <h4 onClick={()=>navigate('/login') }>👤 Login</h4>
          </div>
        </div>
        <div className="header-bar-2">
          <h5>Electronics</h5>
          <h5>Clothes</h5>
          <h5>HomeWares</h5>
          <h5>More</h5>
        </div>
        <div className="home-body">
  {search.trim() !== "" ? (
    <ProductList />
  ) : (
    <>
      <Sliders />
      <Category />
    </>
  )}
</div>


        <div className="home-footer">
          <div data-title="ONLINE SHOPPING">
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Gift Cards</li>
              <li>Home</li>
              <li>Beauty</li>
            </ul>
          </div>

          <div data-title="CUSTOMER POLICIES">
            <ul>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div data-title="EXPERIENCE APP ON MOBILE">
            <img src="gplay.png" alt="Google Play" />
            <img src="apple.png" alt="App Store" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
