import {useContext} from "react";
import {Context} from "../Context";
import useLogic from "../useLogic";

const CartImg = (props) => {
    const {removeFromCart} = useContext(Context);

    const {hovered, hoverRef} = useLogic(); 

    const {img} = props

    const delBtn = hovered? <i className="ri-delete-bin-fill del icon" ref={hoverRef} onClick={() => removeFromCart(img.id)}></i> : <i className="ri-delete-bin-line del icon" ref={hoverRef}></i>

    const price =  <span>${img.price}</span>

    return (
        <div className="cart-img-div">
            {delBtn}
            <img src={img.urls.regular} alt="" className="cart-img" />
            {price}
            
        </div>
    )
} 

export default CartImg