import React from 'react'
import deletee from "../assets/delete.svg"
import add from "../assets/add.svg"
import subtract from "../assets/sub.svg"
import { useState } from "react";
import "../css/CartItem.css"

export default function CartItem({ image, name, price, subtitle }) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className='cart-item'>

            <div className="item-info">
                <img className='item-image' src={image} />
                <div>
                    <p className='subtitle'>{subtitle}</p>
                    <p className='name'>{name}</p>
                </div>
            </div>

            <div className="icons">
                <button className='increase-icon' onClick={() => setQuantity(quantity + 1)}>
                    <span className="material-symbols-outlined">add</span>
                </button>
                <p className='quantity'>{quantity}</p>
                <button className='decrease-icon' onClick={() => setQuantity(quantity - 1)}>
                    <span className="material-symbols-outlined">remove</span>
                </button>
            </div>

            <p className='price'>${price}</p>
            <button className='delete-icon'>
                <span className="material-symbols-outlined">delete</span>
            </button>
        </div>
    );
}