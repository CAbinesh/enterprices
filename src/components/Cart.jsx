import React from "react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "./WishlistContext";
import { useCartList } from "./CartListContext";

function Cart() {
  const navigate = useNavigate();
  const { wishList } = useWishlist();
  const { cartList, increaseQuantity, decreaseQuantity } = useCartList();

  return (
    <div>
      {/* Header */}
      <div className="header-bar">
        <h2>EnterP₹ices</h2>
        <div className="header-bar-icons">
          <input type="text" placeholder="🔎..." />
          <h4>🛒 Cart</h4>
          <h4 onClick={() => navigate("/wishlist")}>
            💖 Wishlist ({wishList.length})
          </h4>
          <h4>🔔 Notification</h4>
          <h4 onClick={() => navigate("/login")}>👤 Login</h4>
        </div>
      </div>

      {/* Cart Layout */}
      <h2>Cart Items</h2>
      <div className="cartsplitscr">
        <div className="cartbox">
          {cartList.length > 0 ? (
            cartList.map((product, index) => (
              <div key={index} className="cart-item">
                <img
                  src={`/${product.image}`}
                  alt={product.name}
                  style={{
                    height: "150px",
                    width: "",
                    objectFit: "cover",
                  }}
                />
                <h4>{product.name}</h4>
                <p style={{fontSize:'25px',fontWeight:'bolder'}}>₹ {product.price}</p>
                <div className="qty-control">
                  <button onClick={() => decreaseQuantity(product.name)}>
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button onClick={() => increaseQuantity(product.name)}>
                    +
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h2>No Items in Cart</h2>
          )}
        </div>

        <div className="cartbox2">
          <h2>Your Cart Summary:</h2>
          <h4 style={{background:"orange",width:"205px",borderRadius:"15px",textAlign:"center"}}>
            Total Items:{" "}
            {cartList.reduce(
              (totalQty, product) => totalQty + (product.quantity || 0),
              0
            )}
          </h4>
          <h4 style={{background:"yellow",width:"205px",borderRadius:"15px",textAlign:"center"}}>
            Total Value: ₹{" "}
            {cartList
              .reduce((total, product) => {
                const price = Number(product.price);
                const quantity = Number(product.quantity) || 0;
                return total + price * quantity;
              }, 0)
              .toFixed(2)}
          </h4>
          <button className="buttons">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
