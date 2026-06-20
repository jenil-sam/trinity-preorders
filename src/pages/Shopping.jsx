import React from 'react'
import NavBar from '../components/NavBar'
import CartItem from '../components/CartItem'
import OrderSummary from '../components/OrderSummary'
import kappaBiryani from "../assets/kappa-biriyani.png"
import brisket from "../assets/brisket-bg.png"
import fishCurry from "../assets/fish-curry-bg.png"
import lemonade from "../assets/lemonade-bg.png"
import appamCurry from "../assets/appam-curry-bg.png"
import pizza from "../assets/pizza-bg.png"
import "../css/Shopping.css"

export default function Shopping() {

    const cart = [
        { id: 1, subtitle: "Appam", name: "chicken curry", price: "2.00", image: appamCurry },
        { id: 2, subtitle: "Pizza", name: " ", price: "2.00", image: pizza },
        { id: 3, subtitle: "Beef", name: "brisket", price: "2.00", image: brisket },
    ]

    return (
        <>
            <div className="navbar">
                <NavBar></NavBar>
            </div>

            <div className="cart-page">
                <h1 className='title-cart'> Shopping Cart</h1>
                <div className="shopping-product">
                    <div className='cart-items'>
                        <div className="cart-header">
                            <p>Product</p>
                            <p>Quantity</p>
                            <p>Total</p>
                            <p>Action</p>
                        </div>
                        {cart.map(item => (
                            <CartItem
                                key={item.id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                subtitle={item.subtitle}
                            />
                        ))}
                    </div>
                    <div className='order-summary-div'>
                        <OrderSummary></OrderSummary>
                    </div>
                </div>
            </div>
        </>

    )
}

