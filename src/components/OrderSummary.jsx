import "../css/OrderSummary.css"

export default function OrderSummary() {
    return (
        <div className="order-summary">
            <h2 className="order-title">Order Summary</h2>
            <div className="summary-info">
                <div className="summary-row">
                    <p className="sub-total">Sub Total</p>
                    <span className="sub-value">$2,000</span>
                </div>
                <div className="summary-total">
                    <p className="total">Total</p>
                    <span className="total-value">$1850 </span>
                </div>
            </div>
            <button className="checkout">Checkout Now</button>
        </div>
    );
}