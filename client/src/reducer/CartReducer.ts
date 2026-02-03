import { type CartActionType, type CartStateType } from "../types";

const CartReducer = (state: CartStateType, action: CartActionType): CartStateType => {
    switch (action.type) {
        case "ADD-TO-CART":
            let { id, name, image, amount, price } = action.payload ?? { id: 0, name: "", image: "", amount: 0, price: 0 };
            console.log("id: ", id, "name: ", name, "image: ", image, "amount: ", amount, "price: ", price);
            let existingProduct = state.cart.find((curElem) => curElem.id === id);
            let newCart;
            if (existingProduct) {
                newCart = state.cart.map((curElem) => {
                    if (curElem.id == id) {
                        let newAmount = curElem.amount + amount;
                        console.log("newAmount: ", newAmount)

                        return {
                            ...curElem,
                            amount: newAmount
                        }
                    } else {
                        return curElem;
                    }

                })

                console.log("existingProduct: ", existingProduct);
                console.log("newCart: ", newCart);
                return {...state,cart:newCart}
            } else {

                const cartProduct = { id, name, image, amount, price };

                return { ...state, cart: [...state.cart, cartProduct] };
            }

        case "DELETE-FROM-CART":
            let updateCart = state.cart.filter((curElem) => curElem.id !== action.payload)
            console.log(updateCart);
            return { ...state, cart: updateCart };

        case "CLEAR-CART":

            return { ...state, cart: [] };

        default:
            return state;
    }
}

export default CartReducer;