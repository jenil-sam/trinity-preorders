import React from 'react'
import NavBar from '../components/NavBar'
import CartItem from '../components/CartItem'
import OrderSummary from '../components/OrderSummary'

export default function Shopping() {

    const cart = [
        { id: 1, name: "appam chicken curry", price: "2.00", image: "" },
        { id: 2, name: "kappa fish curry", price: "2.00", image: "" },
        { id: 3, name: "pizza", price: "2.00", image: "" },
    ]
    return (
        <div className='shopping page'>
            <div class="navbar">
                <NavBar></NavBar>
            </div>

            <div>
                <h1> Shopping Cart</h1>
                <div className='product-summary'>
                    {cart.map(item => (
                        <CartItem
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </div>
                <div className='order-summary'>
                    <OrderSummary></OrderSummary>
                </div>
            </div>
        </div>

    )
}

