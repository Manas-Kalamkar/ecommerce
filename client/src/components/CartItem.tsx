import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import type { cartEntry } from "../types";
import { useCartContext } from "../context/CartContext";

const CartItem = ({ id, name, image, price, amount }: cartEntry) => {
    const { removeItem, incrementProduct, decrementProduct } = useCartContext();


    return (
        <div className="cart_heading grid grid-five-column">
            <div className="cart-image--name">
                <div>
                    <figure>
                        <img src={image} alt={`${id}`} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                </div>
            </div>
            {/* price   */}
            <div className="cart-hide">
                <p>
                    <FormatPrice price={price} />
                </p>
            </div>

            {/* Quantity  */}
            <CartAmountToggle
                id={id}
                amount={amount}
                setDecrease={decrementProduct}
                setIncrease={incrementProduct}
            />

            {/* //Subtotal */}
            <div className="cart-hide">
                <p>
                    <FormatPrice price={price * amount} />
                </p>
            </div>

            <div>
                <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
            </div>
        </div>
    );
};

export default CartItem;