import React from 'react'

export default function CartItem({ image, name, price }) {
    return (
        <div className='cart-item'>
            <img src={image} />
            <p>{name}</p>
            <p>${price}</p>
            <button className='increase-button'>+</button>
            <button className='decrease-button'>-</button>
            <button>Delete Icon will go here</button>
        </div>
    )
}
