import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useWishlist } from './WishlistContext'
import { useCartList } from './CartListContext'


function Wishlist() {
    const navigate=useNavigate()
    const {wishList}=useWishlist()
    const{cartList,addCartList}=useCartList()
  return (
    <div>
        <div className="header-bar">
          <h2>EnterP₹ices</h2>
          <div className="header-bar-icons">
            <input type="text" placeholder="🔎..." />
            <h4 onClick={()=>navigate('/Cart')}>🛒 Cart({cartList.length})</h4>
            <h4>💖 Wish list</h4>
            <h4>🔔 notification</h4>
            <h4 onClick={()=>navigate('/login') }>👤 Login</h4>
          </div>
        </div>
         <div style={{ padding: "20px" }}>
      <h2>My Wishlist ({wishList.length})</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {wishList.length > 0 ? (
          wishList.map((product, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                width: "200px",
                borderRadius: "10px",
                textAlign: "center"
              }}
            >
              <img
                src={`/${product.image}`}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover"
                }}
              />
              <h4>{product.name}</h4>
              <p>₹{product.price}</p>
               
                <button className="btn1">Buy Now</button>
                <button className="btn2" onClick={()=>addCartList(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No items in wishlist.</p>
        )}
      </div>
    </div>
    </div>
  )
}

export default Wishlist