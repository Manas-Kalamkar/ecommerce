import { type CartActionType, type CartStateType } from "../types";

const CartReducer = (state: CartStateType, action: CartActionType): CartStateType => {
    switch (action.type) {
        case "ADD-TO-CART":
            let { id, name, image, amount, price } = action.payload ?? { id: 0, name: "", image: "", amount: 0, price: 0 };
            let existingProduct = state.cart.find((curElem) => curElem.id === id);
            let newCart;
            if (existingProduct) {
                newCart = state.cart.map((curElem) => {
                    if (curElem.id == id) {
                        let newAmount = curElem.amount + amount;

                        return {
                            ...curElem,
                            amount: newAmount
                        }
                    } else {
                        return curElem;
                    }

                })

                return { ...state, cart: newCart }
            } else {

                const cartProduct = { id, name, image, amount, price };

                return { ...state, cart: [...state.cart, cartProduct] };
            }

        case "DELETE-FROM-CART":
            let updateCart = state.cart.filter((curElem) => curElem.id !== action.payload)
            return { ...state, cart: updateCart };

        case "CLEAR-CART":

            return { ...state, cart: [] };


        case "SET-DECREMENT":
            let decreProduct = state.cart.map((curElem) => {
                if (curElem.id === action.payload?.id) {
                    let decre = curElem.amount - 1;
                    if (decre <= 1) {
                        decre = 1;
                    }
                    return {
                        ...curElem,
                        amount: decre
                    }
                }
                else {
                    return curElem;
                }
            })

            return {
                ...state,
                cart: decreProduct
            }

        case "SET-INCREMENT":
            let increProduct = state.cart.map((curElem) => {
                if (curElem.id === action.payload?.id) {
                    let incre = curElem.amount + 1;
                    return {
                        ...curElem,
                        amount: incre
                    }
                }
                else {
                    return curElem;
                }
            })

            return {
                ...state,
                cart: increProduct
            }


        case "CART-ITEM-PRICE-TOTAL":
                const cartArray = Array.isArray(state.cart) ? state.cart : [];
            let { total_item, total_amount } = cartArray.reduce(
                (accu, curElem) => {
                    let { price, amount } = curElem;
                    accu.total_item += amount;
                    accu.total_amount += price * amount;
                    return accu;
                }, {
                total_item: 0,
                total_amount: 0,
            }
            );
            return {
                ...state,
                shipping_fee: total_amount * 0.02,
                total_item,
                total_amount
            }


        default:
            return state;
    }
}

export default CartReducer;