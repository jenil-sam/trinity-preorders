import "../css/Card.css"
import { useState, useEffect } from "react";

export default function Card({ image, subtitle, name, price, addToCart }) {
    return (
        <div className='card'>
            <img className="image" src={image} alt={name} />
            <div className="text-content">
                <h2 className="subtitle">{subtitle || "\u00A0"}</h2>
                <h3 className="name">{name || "\u00A0"}</h3>
                <div className="price">
                    <p>{price}</p>
                </div>
                <button className="order-button" onClick={() => addToCart({ image, subtitle, name, price })}>
                    Order Now
                </button>
            </div>
        </div>
    );
}