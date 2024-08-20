// Assuming you have set up your React project with appropriate components and styles

import React from 'react';

const PaymentDetails = ({ discamnt, amt, walletamount }) => {
  return (
    <div className="bill1">
      <h3>Payment Details</h3>
      <div className="billfrm">
        <div className="btp1">
          <div className="subt">
            <div className="row ">
              <div className="col-6 subtin">
                <h3>Coupon</h3>
              </div>
              <div className="col-6 subtp" style={{ display: 'grid', alignItems: 'end' }}>
                <h3>₹{discamnt}/-</h3>
              </div>
              <div className="col-6 subtin">
                <h3>Amount</h3><span>(INR)</span>
              </div>
              <div className="col-6 subtp">
                <h3>₹{amt}/-</h3>
              </div>
              <div className="col-6 subtin">
                <h3>Wallet</h3><span>(INR)</span>
              </div>
              <div className="col-6 subtp">
                <h3>₹{walletamount}/-</h3>
              </div>
            </div>
          </div>
          <div className="paybt" id="pay">
            {/* Razorpay payment Gateway */}
            <form className="mright5 action-button go-to-portal" action="zeropayment.php" method="POST">
              <input type="hidden" name="walletamount" value={walletamount} />
              <input type="hidden" name="amnt" value={amt} />
              {/* Other hidden input fields */}
              <input className="paybtn" type="submit" value="Confirm" name="pay" style={{ padding: 0 }} />
            </form>
          </div>
          <div className="satis">
            <p>Satisfaction Guaranteed</p>
            <span>If you're not completely happy with your purchase, contact our Customer care and we'll make it right.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
