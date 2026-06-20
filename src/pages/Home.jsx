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
    { id: 6, subtitle: "Kappa", name: "Biriyani", price: "$2.00", image: kappaBiryani }
]

export default function Home() {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrent(prev => (prev + 1) % items.length);
                setTimeout(() => {
                    setFade(false);
                }, 300);
            }, 800);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const item = items[current];

    return (
        <div className='div-container-1'>
            <NavBar></NavBar>
            <section className="main-item">
                <img className={fade ? "fade" : ""} src={item.image} alt={item.name} />
                <div className={`card-content ${fade ? "fade" : ""}`}>
                    <div className="price-circle">
                        <p>{item.price}</p>
                    </div>
                    <h1 className="subtitle">{item.subtitle}</h1>
                    <h2 className="name">{item.name}</h2>
                </div>
            </section>

            <div className='box' ></div>

            <section className='other-itens'>
                <div className="card-grid">
                    {items.map(item => (
                        <Card
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            subtitle={item.subtitle}
                        />
                    ))}
                </div>
            </section>

            <div className='box2'></div>

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