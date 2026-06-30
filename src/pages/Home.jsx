import { useState, useEffect } from "react";
import React from 'react'
import Card from "../components/Card"
import NavBar from '../components/NavBar'
import "../css/Home.css"
import kappaBiryani from "../assets/kappa-biriyani.png"
import brisket from "../assets/brisket-bg.png"
import fishCurry from "../assets/fish-curry-bg.png"
import lemonade from "../assets/lemonade-bg.png"
import appamCurry from "../assets/appam-curry-bg.png"
import pizza from "../assets/pizza-bg.png"

const items = [
    { id: 1, subtitle: "Appam", name: "chicken curry", price: "$2.00", image: appamCurry },
    { id: 2, subtitle: "Fish", name: "curry", price: "$2.00", image: fishCurry },
    { id: 3, subtitle: "Pizza", name: " ", price: "$2.00", image: pizza },
    { id: 4, subtitle: "Beef", name: "brisket", price: "$2.00", image: brisket },
    { id: 5, subtitle: "Fresh", name: "Lemonade", price: "$2.00", image: lemonade },
    { id: 6, subtitle: "Kappa", name: "Biriyani", price: "$2.00", image: kappaBiryani },
]

export default function Home({ addToCart }) {
    const [current, setCurrent] = useState(0);

    const item = items[0];

    return (
        <div className='div-container-1'>
            <NavBar></NavBar>
            <section className="main-item">
                <div className="left-side">
                    <div className="event-info">
                        <p className="event-date"> 27 June 2026 </p>
                        <p className="event-location"> Houston, Texas </p>
                    </div>

                    <div className="event-title">
                        <h1>Pre-Order your <br /> <span className="font-change">harvest food</span></h1>
                    </div>

                    <div className="event-description">
                        <p>Browse produce boxes, prepared dishes, baked goods, and
                            preserves made by our volunteers and partner farms.
                            Order by Sunday 27 June and collect at the festival.
                        </p>

                        <button className="menu-button">
                            Browse the Menu
                        </button>

                    </div>
                </div>

                <div className="right-side">
                    <img src={item.image}/> 

                </div>

            </section>


            <section className='other-itens'>
                <div className="card-grid">
                    {items.map(item => (
                        <Card
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            subtitle={item.subtitle}
                            addToCart={addToCart}
                        />
                    ))}
                </div>
            </section>


            <section className='contact-info'>
                <ul>
                    <li>
                        Place Holder for YS office bearers
                    </li>
                    <li>
                        Place Holder for YS office bearers
                    </li>
                    <li>
                        Place Holder for YS office bearers
                    </li>
                    <li>
                        Place Holder for YS office bearers
                    </li>

                </ul>
            </section>
        </div>
    )
}