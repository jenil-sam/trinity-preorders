export default function OrderSummary() {
    return (
        <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
                <span>Sub Total</span>
                <span>2,000 USD</span>
            </div>
            <div className="summary-total">
                <span>Total</span>
                <span>$1850 USD</span>
            </div>
            <button className="checkout-btn">Checkout Now</button>
        </div>
    );
}