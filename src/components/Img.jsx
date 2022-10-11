import React, {useContext, useState, useEffect} from 'react';
import useLogic from '../useLogic';
import {Context} from "../Context"
import {Link, useParams} from "react-router-dom"

const Img = (props) => {
    
    const {img} = props

    // Destructuring incoming img object
    const {height, width, urls, price, likes, id, isFavorite, user} = img

    const {favorite, addToCart, cart, removeFromCart, getFavImages, screenSize} = useContext(Context)

    const ratio =  height/width

// Getting hover logic from useLogic custom component
    const {hovered, hoverRef} = useLogic()
    
    const inCart = cart.some(photo => photo.id === img.id)

    // Creating a logic to handle orientation
    const orientation = () => {
        if(ratio < .8) {
            return "landscape"
        }else if(ratio < 1.2) {
            return "squarish"
        }else {
            return "portrait"
        }
    }

    const heartIcon = !isFavorite? <i className="ri-heart-line heart icon" onClick={() => favorite(id)}></i> :  <i className="ri-heart-fill heart icon" onClick={() => {favorite(id); getFavImages(); }}></i>

    // Getting the photographer
    const photographer = <small className="photographer"><img src={user.profile_image.small} alt={`${user.first_name}'s profile photo`} className="profile-photo"/> {user.first_name} {user.last_name}</small>

    const cartIcon = inCart?<i className="ri-shopping-cart-fill add icon" onClick={() => removeFromCart(id)}></i>  : hovered && <i className="ri-add-circle-line add icon" onClick={() => addToCart(id)}></i> 

    // For image likes
    const imgLikes = <span className="likes">{likes}</span>

    const imgPrice =  <span className="price">${price}</span>


    let screenWidth = window.innerWidth
    
    return (
        <div className={`img-div ${orientation()}`} ref={hoverRef}>
            {/* icons appear on hover */}
            {hovered && photographer}
            {hovered && heartIcon}
            {hovered && cartIcon}
            {hovered && imgLikes}
            {hovered && imgPrice}
            <Link to={`/${id}`}><img src={urls.small} alt="" className={`img `} /></Link>
            
        </div>
    )
}

export default Img