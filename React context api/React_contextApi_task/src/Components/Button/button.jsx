import "./button.css";
import { AppContext } from "../../App";
import { useContext } from "react";

const Button = (props) => {

    const { product } = props;

    const {addToCart, removeFromCart, cartItems} = useContext(AppContext);

    const addingItemToCart = (item) => {
        //console.log("Adding Product: ", item);
        addToCart({ ...item, subtotal: item.price });
    };

    const removingItemFromCart = (item) => {
        removeFromCart(item);
    };

    return (
        <div className="button-container">
            {cartItems.some((item) => item.id === product.id) ? (
                <div
                    className="remove-from-cart"
                    onClick={() => removingItemFromCart(product)}
                >
                    Remove from cart
                </div>
            ) : (
                <div
                    className="add-to-cart"
                    onClick={() => addingItemToCart(product)}
                >
                    Add to cart
                </div>
            )}
        </div>
    );
}

export default Button;