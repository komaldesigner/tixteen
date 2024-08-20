import React, { useState } from 'react';
import './CheckOut.css';

const CheckOut = () => {
  const [msgs, setMsgs] = useState('');
  const [guestDetails, setGuestDetails] = useState({
    guestname: '',
    guestemail: '',
    guestphone: '',
    guestgst: '',
    guestbrand: ''
  });

  const handleChange = (e) => {
    setGuestDetails({ ...guestDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static message for successful registration
    setMsgs(
      <div className='alert alert-success'>
        <span className='glyphicon glyphicon-info-sign'></span> &nbsp; successfully registered!
      </div>
    );
    // Additional logic can be added here
  };

  return (
    <div className="cartbanner1">
      <h3 className="crthdh3">PURCHASE</h3>
      <div className="row">
        <div className="col-sm-5 checkoutboxbg1">
          <div>
            {msgs}
            <form id="guestreglogform" onSubmit={handleSubmit}>
              <div style={{ padding: '1% 2%', marginBottom: '1%' }}>
                <h3>Personal Information</h3>
                <p>Name: <input type="text" name="guestname" placeholder="Add Name" required onChange={handleChange} /> </p>
                <p>Email: <input type="email" name="guestemail" placeholder="Add Email" required onChange={handleChange} /> </p>
                <p>Phone: <input type="text" name="guestphone" placeholder="Add Phone" required onChange={handleChange} /> </p>
                <p>Brand Name: <textarea rows="1" name="guestbrand" placeholder="Add Brand" required onChange={handleChange}></textarea> </p>
                <p>GST No: <input type="text" name="guestgst" placeholder="Add GST No" required onChange={handleChange} /> </p>
              </div>
              <button type="submit" style={{ width: '100%', background: '#000', color: '#fff' }} className="btn">
                Proceed to Pay
              </button>
            </form>
          </div>
        </div>
        <div className="col-sm-7 checkoutboxbg3">
          <h3>Order Summary</h3>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

const OrderSummary = () => {
  const staticCartData = [
    {
      profileimg: 'profile1.png',
      fname: 'John Doe',
      level: 1,
      contentname: 'ClientBroadcast',
      amount: 1000
    },
    {
      profileimg: 'profile2.png',
      fname: 'Jane Smith',
      level: 2,
      contentname: 'ClientImage',
      amount: 2000
    }
  ];

  const subtotal = staticCartData.reduce((acc, item) => acc + item.amount, 0);
  const GST = (subtotal * 18) / 100;
  const total = subtotal + GST;

  return (
    <div>
      {staticCartData.map((item, index) => (
        <div className="btp1" key={index}>
          <div className="row">
            <div className="col-6 btp2">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-5 col-6">
                  <br /><img style={{ width: '100%' }} src={`../assets/img/profileimg/${item.profileimg}`} alt={item.fname} />
                </div>
                <div className="col-lg-9 col-md-8 col-sm-7 col-6">
                  <h3>{item.fname}</h3>
                  <p>Level-{item.level}</p>
                  <p>{item.contentname}</p>
                </div>
              </div>
            </div>
            <div className="col-4 btpprice">
              <h3>₹{item.amount}/-</h3>
            </div>
            <div className="col-2 btp2">
              <span className="tdd" style={{ padding: '1.5px 2% 0% 1%', width: 'unset' }}>
                <button title="Remove from Cart" className="btn btn-danger">
                  <i className="fa fa-trash"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
      ))}
      <div className="cartbanner2">
        <div id="dlprc">
          <div style={{ display: 'flex' }}>
            <h5 style={{ width: '50%', fontWeight: 'bold' }}>SUBTOTAL:</h5>
            <h5 style={{ width: '40%', fontWeight: 'bold' }}>₹{subtotal}</h5>
          </div>
          <div style={{ display: 'flex' }}>
            <h5 style={{ width: '50%', fontWeight: 'bold' }}>GST(18%):</h5>
            <h5 style={{ width: '40%', fontWeight: 'bold' }}>₹{GST}</h5>
          </div>
          <div style={{ display: 'flex' }}>
            <h4 style={{ width: '50%', fontWeight: 'bold' }}>TOTAL:</h4>
            <h5 style={{ width: '40%', fontWeight: 'bold' }}>₹{total}</h5>
          </div>
          <hr style={{ borderColor: '#a9a9a9' }} />
          <div style={{ display: 'flex' }}>
            <h4 style={{ width: '50%', fontWeight: 'bold' }}>To Pay:</h4>
            <h5 style={{ width: '40%', fontWeight: 'bold' }}>₹{total}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
