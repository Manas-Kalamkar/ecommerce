import { createContext, useReducer, type ReactNode, useContext, useEffect } from "react";
import type { cartEntry, CartContextType } from "../types";
import { initialCartState } from "../types";
import CartReducer from "../reducer/CartReducer";


const CartContext = createContext<CartContextType | undefined>(undefined);


const CartContextProvider = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer(CartReducer, initialCartState)

    const addToCart = ({ id, name, image, amount, price }: cartEntry) => {
        dispatch({ type: "ADD-TO-CART", payload: { id, name, image, amount, price } })
    }

    const removeItem = (idToDelete: number) => {
        dispatch({ type: "DELETE-FROM-CART", payload: idToDelete })
    }
    const clearCart = () => {
        dispatch({ type: "CLEAR-CART" })
    }
    const incrementProduct = ({id,amount}:{id:number,amount:number}) => {
        dispatch({ type: "SET-INCREMENT", payload:{id,amount} })
    }
    const decrementProduct = ({id,amount}:{id:number,amount:number}) => {
        dispatch({ type: "SET-DECREMENT", payload:{id,amount} })
    }

    useEffect(() => {
        dispatch({type:"CART-ITEM-PRICE-TOTAL"})
        localStorage.setItem("items", JSON.stringify(state.cart))
    }, [state.cart])

    return <CartContext.Provider value={{ ...state, addToCart, removeItem,clearCart,incrementProduct,decrementProduct }}>
        {children}
    </CartContext.Provider>
}

export { CartContextProvider };

export const useCartContext = () => {

    const cartContext = useContext(CartContext);
    if (cartContext === undefined) {
        throw new Error("useFilterContext must be used within a FilterContext");
    }
    return cartContext;
}