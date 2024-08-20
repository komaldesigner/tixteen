// // SecondInvoice.js
// import React, { useState } from 'react';

// function SecondInvoice() {
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [orders, setOrders] = useState([
//     {
//       orderId: 1,
//       totalPlans: 5,
//       paymentAmount: 1000,
//       createdTime: '2024-05-27',
//     },
//     {
//       orderId: 2,
//       totalPlans: 3,
//       paymentAmount: 750,
//       createdTime: '2024-05-26',
//     },
//     // Add more dummy orders here
//   ]);

//   const handleFromDateChange = (e) => {
//     setFromDate(e.target.value);
//   };

//   const handleToDateChange = (e) => {
//     setToDate(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Your logic for handling the form submission goes here
//     // You can filter orders based on fromDate and toDate
//     // Example:
//     // const filteredOrders = orders.filter((order) => {
//     //   const orderDate = new Date(order.createdTime);
//     //   return orderDate >= new Date(fromDate) && orderDate <= new Date(toDate);
//     // });
//     // setOrders(filteredOrders);
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="date"
//           name="fromdate"
//           value={fromDate}
//           onChange={handleFromDateChange}
//           required
//         />
//         <input
//           type="date"
//           name="todate"
//           value={toDate}
//           onChange={handleToDateChange}
//           required
//         />
//         <button type="submit">Filter</button>
//       </form>
//       <button
//         onClick={() => {
//           // Your logic for exporting to Excel goes here
//           // Example:
//           // window.location.href = '/api/export/excel';
//         }}
//         className="btn btn-dark"
//       >
//         Export To Excel
//       </button>
//       <div className="order-list">
//         {orders.map((order) => (
//           <div key={order.orderId} className="order-item">
//             <div>Order Id: {order.orderId}</div>
//             <div>Total Plans: {order.totalPlans}</div>
//             <div>Order Amount: ₹{order.paymentAmount}</div>
//             <div>Date Ordered: {order.createdTime}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SecondInvoice;

// App.js
import React, { useState } from 'react';
// import './App.css';

function SecondInvoice() {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [orders, setOrders] = useState([
    {
      orderId: 1,
      totalPlans: 5,
      paymentAmount: 1000,
      createdTime: '2024-05-27',
    },
    {
      orderId: 2,
      totalPlans: 3,
      paymentAmount: 750,
      createdTime: '2024-05-26',
    },
    // Add more dummy orders here
  ]);

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your logic for handling the form submission goes here
    // You can filter orders based on fromDate and toDate
    // Example:
    // const filteredOrders = orders.filter((order) => {
    //   const orderDate = new Date(order.createdTime);
    //   return orderDate >= new Date(fromDate) && orderDate <= new Date(toDate);
    // });
    // setOrders(filteredOrders);
  };

  return (
    <div className="container">
      <h3 className="mt-4">Order List</h3>
      <div className="row">
        <div className="col-sm-6">
          <form onSubmit={handleSubmit}>
            <input
              type="date"
              name="fromdate"
              value={fromDate}
              onChange={handleFromDateChange}
              required
              className="form-control"
            />
            <input
              type="date"
              name="todate"
              value={toDate}
              onChange={handleToDateChange}
              required
              className="form-control mt-2"
            />
            <button type="submit" className="btn btn-primary mt-2">
              Filter
            </button>
          </form>
        </div>
        <div className="col-sm-6 text-right">
          <form action="excelexport.php?prereg" method="post">
            <button
              type="submit"
              id="export"
              name="export"
              value="Export to excel"
              className="btn btn-dark"
            >
              Export To Excel
            </button>
          </form>
        </div>
      </div>
      <div className="order-list mt-4">
        {orders.map((order) => (
          <div key={order.orderId} className="row border-bottom py-2">
            <div className="col-sm-3">Order Id: {order.orderId}</div>
            <div className="col-sm-3">Total Plans: {order.totalPlans}</div>
            <div className="col-sm-3">Order Amount: ₹{order.paymentAmount}</div>
            <div className="col-sm-3">Date Ordered: {order.createdTime}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondInvoice;
