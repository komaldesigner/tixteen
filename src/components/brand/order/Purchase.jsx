// import React, { useEffect, useState } from 'react';
// import { useNavigation } from 'react-router-dom';
// import axios from 'axios';

// const PurchaseCart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [gstRate, setGstRate] = useState(18); // Assuming a GST rate of 18%
//   const [grandTotal, setGrandTotal] = useState(0);
//   const history = useNavigation();

//   useEffect(() => {
//     // Mock check for session and redirect if needed
//     const tixteenClientSession = sessionStorage.getItem('tixteenClientSession');
//     const guestcouponcd = new URLSearchParams(window.location.search).get('couponcd');
//     if (tixteenClientSession) {
//       history(`/brand/purchase?couponcd=${guestcouponcd}`);
//     } else {
//       // Fetch cart items from session storage or API
//       const tixteenCart = JSON.parse(sessionStorage.getItem('tixteencart')) || [];
//       setCartItems(tixteenCart);
//       calculateTotals(tixteenCart);
//     }
//   }, [history]);

//   const calculateTotals = (items) => {
//     let total = 0;
//     items.forEach(item => {
//       total += item.amount; // Assuming 'amount' is a property in each cart item
//     });
//     const gst = total * (gstRate / 100);
//     setTotalAmount(total);
//     setGrandTotal(total + gst);
//   };

//   const handleRemoveItem = (id) => {
//     const updatedCart = cartItems.filter(item => item.id !== id);
//     setCartItems(updatedCart);
//     sessionStorage.setItem('tixteencart', JSON.stringify(updatedCart));
//     calculateTotals(updatedCart);
//   };

//   const handleCheckout = (e) => {
//     e.preventDefault();
//     // Redirect to guest checkout
//     history.push('/guestcheckout');
//   };

//   return (
//     <div>
//       <div className="bill1">
//         <h3>PURCHASE</h3>
//         <div className="billfrm">
//           <div className="row">
//             <div className="col-2 billink"></div>
//             <div className="col-1 billink"><h3></h3></div>
//             <div className="col-2 billink"><h3>Cart</h3></div>
//             <div className="col-1 billink"><h3></h3></div>
//             <div className="col-2 billink"></div>
//           </div>
//           <div className="yitem">
//             <h3>Your Items</h3>
//           </div>
//           {cartItems.length > 0 ? (
//             <>
//               {cartItems.map(item => (
//                 <div className="btp1" key={item.id}>
//                   <div className="row">
//                     <div className="col-6 btp2">
//                       <div className="row">
//                         <div className="col-lg-3 col-md-4 col-sm-5 col-6">
//                           <br />
//                           <img style={{ width: '100%' }} src={`../assets/img/profileimg/${item.profileimg}`} alt={item.contentname} />
//                         </div>
//                         <div className="col-lg-9 col-md-8 col-sm-7 col-6">
//                           <h3 style={{ textTransform: 'uppercase' }}>TX{item.fname[0]}{item.id}</h3>
//                           <p>Level-{item.level}</p>
//                           <p>{item.contentname}</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-4 btpprice">
//                       <h3>₹{item.amount}/-</h3>
//                     </div>
//                     <div className="col-2 btp2">
//                       <span className="tdd" style={{ padding: '1.5px 2% 0% 1%', width: 'unset' }}>
//                         <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>
//                           <i className="fa fa-trash"></i>
//                         </button>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               <br />
//               <div className="subt">
//                 <div className="row">
//                   <div className="col-6 subtin">
//                     <h3>Subtotal</h3>
//                     <span>(INR)</span>
//                   </div>
//                   <div className="col-6 subtp">
//                     <h3>₹{totalAmount}/-</h3>
//                   </div>
//                   <div className="col-6 gst">
//                     <p>GST ({gstRate}%)</p>
//                   </div>
//                   <div className="col-6 subtp">
//                     <h3>₹{(totalAmount * (gstRate / 100)).toFixed(2)}/-</h3>
//                   </div>
//                   <div className="col-6 subtin">
//                     <h3>Grand Total</h3>
//                     <span>(INR)</span>
//                   </div>
//                   <div className="col-6 subtp">
//                     <h3>₹{grandTotal}/-</h3>
//                   </div>
//                 </div>
//               </div>
//               <div className="paybt">
//                 <form method="POST" onSubmit={handleCheckout} style={{ textAlign: 'center' }}>
//                   <input type="submit" value="Checkout" className="btn btn-primary" style={{ background: '#515151', color: '#fff', borderRadius: 'unset' }} />
//                 </form>
//               </div>
//             </>
//           ) : (
//             <h5>Cart is Empty. Please Add Items to Cart</h5>
//           )}
//           <div className="satis">
//             <p>Satisfaction Guaranteed</p>
//             <span>If you're not completely happy with your purchase, contact our Customer care and we'll make it right.</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PurchaseCart;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PurchaseCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [gstRate] = useState(18); // Assuming a GST rate of 18%
  const [grandTotal, setGrandTotal] = useState(0);
  const history = useNavigate();

  useEffect(() => {
    // Mock check for session and redirect if needed
    const tixteenClientSession = sessionStorage.getItem('tixteenClientSession');
    const guestcouponcd = new URLSearchParams(window.location.search).get('couponcd');
    if (tixteenClientSession) {
      history(`/brand/purchase?couponcd=${guestcouponcd}`);
    } else {
      // Using dummy data for cart items
      const dummyCartItems = [
        {
          id: 1,
          contentid: 101,
          influencerid: 201,
          profileimg: 'dummy1.jpg',
          fname: 'John',
          level: 1,
          contentname: 'Content 1',
          amount: 1000
        },
        {
          id: 2,
          contentid: 102,
          influencerid: 202,
          profileimg: 'dummy2.jpg',
          fname: 'Jane',
          level: 2,
          contentname: 'Content 2',
          amount: 2000
        }
      ];
      setCartItems(dummyCartItems);
      calculateTotals(dummyCartItems);
    }
  }, [history]);

  const calculateTotals = (items) => {
    let total = 0;
    items.forEach(item => {
      total += item.amount;
    });
    const gst = total * (gstRate / 100);
    setTotalAmount(total);
    setGrandTotal(total + gst);
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    // Assuming you'd also update the session storage here if you were using it
    calculateTotals(updatedCart);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    // Redirect to guest checkout
    history.push('/guestcheckout');
  };

  return (
    <div>
      <div className="bill1">
        <h3>PURCHASE</h3>
        <div className="billfrm">
          <div className="row">
            <div className="col-2 billink"></div>
            <div className="col-1 billink"><h3></h3></div>
            <div className="col-2 billink"><h3>Cart</h3></div>
            <div className="col-1 billink"><h3></h3></div>
            <div className="col-2 billink"></div>
          </div>
          <div className="yitem">
            <h3>Your Items</h3>
          </div>
          {cartItems.length > 0 ? (
            <>
              {cartItems.map(item => (
                <div className="btp1" key={item.id}>
                  <div className="row">
                    <div className="col-6 btp2">
                      <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-5 col-6">
                          <br />
                          <img style={{ width: '100%' }} src={`../assets/img/profileimg/${item.profileimg}`} alt={item.contentname} />
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-7 col-6">
                          <h3 style={{ textTransform: 'uppercase' }}>TX{item.fname[0]}{item.id}</h3>
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
                        <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>
                          <i className="fa fa-trash"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <br />
              <div className="subt">
                <div className="row">
                  <div className="col-6 subtin">
                    <h3>Subtotal</h3>
                    <span>(INR)</span>
                  </div>
                  <div className="col-6 subtp">
                    <h3>₹{totalAmount}/-</h3>
                  </div>
                  <div className="col-6 gst">
                    <p>GST ({gstRate}%)</p>
                  </div>
                  <div className="col-6 subtp">
                    <h3>₹{(totalAmount * (gstRate / 100)).toFixed(2)}/-</h3>
                  </div>
                  <div className="col-6 subtin">
                    <h3>Grand Total</h3>
                    <span>(INR)</span>
                  </div>
                  <div className="col-6 subtp">
                    <h3>₹{grandTotal}/-</h3>
                  </div>
                </div>
              </div>
              <div className="paybt">
                <form method="POST" onSubmit={handleCheckout} style={{ textAlign: 'center' }}>
                  <input type="submit" value="Checkout" className="btn btn-primary" style={{ background: '#515151', color: '#fff', borderRadius: 'unset' }} />
                </form>
              </div>
            </>
          ) : (
            <h5>Cart is Empty. Please Add Items to Cart</h5>
          )}
          <div className="satis">
            <p>Satisfaction Guaranteed</p>
            <span>If you're not completely happy with your purchase, contact our Customer care and we'll make it right.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCart;
