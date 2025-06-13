import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "./data";
import { useWishlist } from "./WishlistContext";
import { useCartList } from "./CartListContext";

function CategoryPage() {
  const { CategoryName } = useParams();
  const category = decodeURIComponent(CategoryName);
  const navigate = useNavigate();
  const { wishList, addWishList } = useWishlist();
  const {cartList,addCartList}=useCartList()

  const filteredProducts = products.filter(
    (product) =>
      product.categoryType.toLowerCase() === category.toLowerCase()
  );

  return (
    <>
      <div className="header-bar">
        <h2>EnterP₹ices</h2>
        <div className="header-bar-icons">
          <input type="text" placeholder="🔎..." />
          <h4 onClick={()=>navigate('/cart')}>🛒 Cart ({cartList.length}) </h4>
          <h4 onClick={() => navigate("/wishlist")}>
            💖 Wishlist ({wishList.length})
          </h4>
          <h4>🔔 Notification</h4>
          <h4 onClick={() => navigate("/login")}>👤 Login</h4>
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <h2>Products in: {category}</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
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
                <p style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
                 ₹ {product.price}
                </p>
                <button className="btn1">Buy Now</button>
                <button onClick={()=>addCartList(product)} className="btn2">Add to Cart</button>
                <button
                  className="btn3"
                  onClick={() => {
                    addWishList(product);
                    
                  }}
                >
                  💖
                </button>
              </div>
            ))
          ) : (
            <p>No products found in this category.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
