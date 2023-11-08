import { useContext, useEffect, useState } from 'react';
import './cartCard.css';
import { AppContext } from '../../App';

const CartCard = (props) => {

    const { removeFromCart } = useContext(AppContext);
    const { product } = props;
    const [count, setCount] = useState(1);
    const [subTotal, setSubTotal] = useState(product.price);

    function increaseQuantity() {
        setCount((count) => count += 1);
    }

    function decreaseQuantity() {
        setCount((count) => count -= 1);
    }

    const removingItemFromCart = (item) => {
        removeFromCart(item);
    };

    useEffect(() => {
        setSubTotal((subTotal) => subTotal = product.price * count);
    }, [count, product.price]);

    return (
        <div className="card cartCard mb-3">
            <div className="row cartRow">
                <div className="col-4">
                    <img className='imageCard img-fluid rounded-start' src={product.thumbnail} alt={product.title} />
                </div>
                <div className="col-8">
                    <div className="card-body cartBody">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p>${product.price}</p>
                        <div className='quantityCount'>
                            Quantity:
                            <button onClick={decreaseQuantity}>-</button>
                            <span>{count}</span>
                            <button onClick={increaseQuantity}>+</button>
                            <div className='cartRemove' onClick={() => removingItemFromCart(product)}>Remove</div>
                        </div>
                        <div className="subTotal">
                            Subtotal: ${subTotal}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartCard;