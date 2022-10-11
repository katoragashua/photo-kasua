import React, {useContext, useState} from 'react';
import CartImg from "../components/CartImg";
import {Context} from "../Context";
import {Link} from "react-router-dom";

const Cart = (props) => {
    const [btnText, setBtnText] = useState(() => "Place Order")

    const {cart, emptyCart} = useContext(Context);

    const cartPhotos = cart.map(img => (<CartImg key={img.id} img={img} />));

    const placeOrder = () => {
        setBtnText("Ordering...");
        setTimeout(() => {
            setBtnText("Place Order")
            emptyCart()
        }, 3000)
    }

    const totalCost = () => {
        let price = 0
        cart.forEach(item => {
            price += item.price
        })
        return price
    }
    

    const orderBtn = cart.length > 0? <span className="order-btn" onClick={placeOrder}>{btnText}</span>: <Link to={"/"} className="order-btn"><span >Add items</span>
    </Link>
    return (
        <div className="cart-page container">
            {cartPhotos}
            <h3>Total: ${totalCost()}</h3>
            {orderBtn}
        </div>
    )
}

export default Cart