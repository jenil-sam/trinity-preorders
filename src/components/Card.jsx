export default function Card({ image, name, price }) {
    return (
        <div className='card'>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{price}</p>
            <button>Order Now</button>
        </div>
    );
}