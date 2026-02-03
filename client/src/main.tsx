import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ProductContextProvider } from "./context/ProductContext.tsx";
import { FilterContextProvider } from "./context/FilterContext.tsx";
import { CartContextProvider } from "./context/CartContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProductContextProvider>
      <FilterContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </FilterContextProvider>
    </ProductContextProvider>
  </StrictMode>,
);
