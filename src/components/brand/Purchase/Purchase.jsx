import React, { useState, useEffect } from 'react';

const Purchase = () => {
    const [walletAmount, setWalletAmount] = useState(0);
    const [grandTotal, setGrandTotal] = useState(26809); // Dummy value
    const [couponCode, setCouponCode] = useState('');
    const [couponErrorMsg, setCouponErrorMsg] = useState('');
    const [couponAmount, setCouponAmount] = useState(0);
    const [couponPerc, setCouponPerc] = useState(0);
    const [showZeroPayment, setShowZeroPayment] = useState(false);
    const [items, setItems] = useState([]);
    const [walletInput, setWalletInput] = useState('');
    
    useEffect(() => {
        // Fetch initial data
        const fetchData = async () => {
            // Simulate fetching from API
            const response = await fetch('/api/getPurchaseDetails');
            const data = await response.json();
            setWalletAmount(data.walletAmount);
            setItems(data.items);
        };
        
        fetchData();
    }, []);

    const handleWalletChange = (e) => {
        setWalletInput(e.target.value);
    };

    const handleWalletApply = () => {
        const basic = Number(walletInput);
        if (basic > walletAmount) {
            alert("You are adding extra amount.");
            setWalletInput('');
            return;
        } else {
            const newTotal = grandTotal - basic;
            setGrandTotal(newTotal);
            setWalletAmount(walletAmount - basic);
            alert(`New Grand Total: ${newTotal}`);
            if (newTotal === 0) {
                setShowZeroPayment(true);
            } else {
                setShowZeroPayment(false);
            }
        }
    };

    const handleCouponApply = async (e) => {
        e.preventDefault();
        // Simulate applying coupon
        const response = await fetch('/api/applyCoupon', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ couponCode })
        });
        const data = await response.json();

        if (data.error) {
            setCouponErrorMsg(data.error);
        } else {
            setCouponAmount(data.couponAmount);
            setCouponPerc(data.couponPerc);
            setCouponErrorMsg('');
            alert(`Coupon applied: ${data.couponAmount}`);
        }
    };

    const handlePay = () => {
        // Simulate payment
        alert('Payment successful!');
    };

    return (
        <div className="bill1">
            <h3>PURCHASE</h3>
            <div className="billfrm">
                <div className="row">
                    <div className="col-2 billink"></div>
                    <div className="col-1 billink">
                        <h3></h3>
                    </div>
                    <div className="col-2 billink">
                        <h3>Payment</h3>
                    </div>
                    <div className="col-1 billink">
                        <h3></h3>
                    </div>
                    <div className="col-2 billink"></div>
                </div>
                <div className="yitem">
                    <h3>Your Items</h3>
                </div>
                <div className="btp1">
                    {items.map(item => (
                        <div className="row" key={item.id}>
                            <div className="col-3">
                                <div className="admninflacntprflimg">
                                    <img src={`../assets/img/profileimg/${item.profileimg}`} alt="Profile" />
                                </div>
                            </div>
                            <div className="col-4 btp2">
                                <h3>TX{item.fname.charAt(0)}{item.influencerid}</h3>
                                <p>Level-{item.level}</p>
                                <p>{item.contentname}</p>
                            </div>
                            <div className="col-3 btpprice" style={{ paddingTop: '20px' }}>
                                <h3>₹{item.total}/-</h3>
                            </div>
                            <div className="col-2 btp2" style={{ paddingTop: '20px' }}>
                                <span className="tdd" style={{ padding: '1.5px 2% 1% 1%', width: 'unset' }}>
                                    <button className="btn btn-danger" onClick={() => alert('Remove item')}>Remove</button>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="subt">
                    <div className="row">
                        <div className="col-6 subtin">
                            <h3>Add Coupon</h3>
                        </div>
                        <div className="col-6 subtp" style={{ display: 'grid', alignItems: 'end' }}>
                            <form onSubmit={handleCouponApply} style={{ textAlign: 'right' }}>
                                <input type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="Enter Coupon" required />
                                <button type="submit" className="btn btn-warning">Apply</button>
                                <p>{couponErrorMsg}</p>
                            </form>
                        </div>
                        <div className="col-6 subtin">
                            <h3>Subtotal</h3><span>(INR)</span>
                        </div>
                        <div className="col-6 subtp">
                            <h3>₹22720/-</h3>
                        </div>
                        <div className="col-6 gst">
                            <p>GST (18%)</p>
                        </div>
                        <div className="col-6 subtp">
                            <h3>₹4089/-</h3>
                        </div>
                        <div className="col-6 subtin">
                            <h3>Wallet</h3><span>(INR)</span>
                        </div>
                        <div className="col-6 subtp">
                            <h3>₹{walletAmount}</h3>
                        </div>
                        <div className="col-6 subtin">
                            <input type="text" value={walletInput} onChange={handleWalletChange} placeholder="Wallet amount" />
                            <button className="btn btn-warning" onClick={handleWalletApply}>Apply</button>
                        </div>
                        {couponCode && (
                            <>
                                <div className="col-6 subtin">
                                    <h3>Coupon Code</h3>
                                </div>
                                <div className="col-6 subtp">
                                    <h3>{couponCode}</h3>
                                </div>
                                <div className="col-6 subtin">
                                    <h3>Coupon Amount</h3>
                                </div>
                                <div className="col-6 subtp">
                                    <h3>₹{couponAmount}</h3>
                                </div>
                            </>
                        )}
                        <div className="col-6 subtin">
                            <h3>Grand Total</h3><span>(INR)</span>
                        </div>
                        <div className="col-6 subtp">
                            <h3>₹{grandTotal}</h3>
                        </div>
                    </div>
                </div>
                <div className="paybt" id="Razor" style={{ display: showZeroPayment ? 'none' : 'block' }}>
                    <button className="paybtn" onClick={handlePay}>Pay Now</button>
                </div>
                <div className="paybt" id="Zero" style={{ display: showZeroPayment ? 'block' : 'none' }}>
                    <button className="paybtn" onClick={handlePay}>Pay Now</button>
                </div>
                <div className="satis">
                    <p>Satisfaction Guaranteed</p>
                    <span>If you're not completely happy with your purchase, contact our Customer care and we'll make it right.</span>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
