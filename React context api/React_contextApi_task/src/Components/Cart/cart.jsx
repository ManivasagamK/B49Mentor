import { useContext, useEffect } from 'react';
import './cart.css';
import { AppContext } from '../../App';
import CartCard from '../CartCard/cartCard';

const Cart = () => {

    const { cartItems } = useContext(AppContext);

    useEffect(() => {
        console.log("CartItems", cartItems);
    })

    return (
        <div className="container">
            <div className="row cart-space">
                <div className="col-lg-8">
                    {cartItems.length ? cartItems.map((product, index) => {
                        return <CartCard product={product} key={index} />
                    }
                    ) : <div className='empty-cart'>Your cart is empty, Please add some to view here.</div>}
                </div>
                <div className="col-lg-3 totalCount card">
                    <div>Total ({cartItems.length} CartItems): </div>
                    <div className="btn buyButton">Proceed to checkout</div>
                </div>
            </div>
        </div>
    );
}

export default Cart;