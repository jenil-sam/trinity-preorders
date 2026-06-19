import React from 'react'
import Card from "../components/Card"
import NavBar from '../components/NavBar'
import "../css/Home.css"

export default function Home() {
    // appam chicken curry, kappa fish curry, pizza/ brisket, Lemonide
    const items = [
        {id: 1, name: "appam chicken curry", price:"$2.00", image:""},
        {id: 2, name: "kappa fish curry", price:"$2.00", image:""},
        {id: 3, name: "pizza", price:"$2.00", image:""},
        {id: 4, name: "brisket", price:"$2.00", image:""},
        {id: 5, name: "Lemonade", price:"$2.00", image:""},
    ]
    return (
        <div className='div-container-1'>
            <NavBar></NavBar>
            <section className='main-item'>
                <Card name="Mutton Biriyani" price="$3.00" image=""/>
            </section>

            <section className='other-itens'>
                {items.map(item => (
                    <Card
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
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