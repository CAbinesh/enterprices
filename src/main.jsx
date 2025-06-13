import { createRoot } from "react-dom/client";
import "./app.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { WishListProvider } from "./components/WishlistContext.jsx";
import { CartListProvider } from "./components/CartListContext.jsx";
import { SearchProvider } from "./components/SearchContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <WishListProvider>
      <CartListProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </CartListProvider>
    </WishListProvider>
  </BrowserRouter>
);
