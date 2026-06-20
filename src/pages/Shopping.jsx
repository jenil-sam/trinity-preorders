import React from 'react'
import NavBar from '../components/NavBar'
import CartItem from '../components/CartItem'
import OrderSummary from '../components/OrderSummary'
import "../css/Shopping.css"

export default function Shopping({ cart, deleteItem }) {
    return (
        <>
            <div className="navbar">
                <NavBar />
            </div>
            <div className="cart-page">
                <h1 className='title-cart'>Shopping Cart</h1>
                <div className="shopping-product">
                    <div className='cart-items'>
                        <div className="cart-header">
                            <p>Product</p>
                            <p>Quantity</p>
                            <p>Total</p>
                            <p>Action</p>
                        </div>
                        {cart.map((item, index) => (
                            <CartItem
                                key={index}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                subtitle={item.subtitle}
                                onDelete={() => deleteItem(item.cartId)}
                            />
                        ))}
                    </div>
                    <div className='order-summary-div'>
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </>
    );
}