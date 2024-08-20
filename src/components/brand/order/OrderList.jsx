// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../../../styles/brand/Order/OrderList.css';

// const OrderList = () => {
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async (fromDate, toDate) => {
//     try {
//       const response = await axios.post('/api/orders', { fromDate, toDate });
//       setOrders(response.data);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     }
//   };

//   const handleFilter = (event) => {
//     event.preventDefault();
//     fetchOrders(fromDate, toDate);
//   };

//   useEffect(() => {
//     fetchOrders('01-01-01', '99-12-30');
//   }, []);

//   return (
//     <div className="influtimelinesum">
//       <h3>Order List</h3>

//       <div className="filter-container">
//         <div className="row">
//           <div className="col-sm-6">
//             <form onSubmit={handleFilter}>
//               <input
//                 type="date"
//                 value={fromDate}
//                 onChange={(e) => setFromDate(e.target.value)}
//                 required
//               />
//               <input
//                 type="date"
//                 value={toDate}
//                 onChange={(e) => setToDate(e.target.value)}
//                 required
//               />
//               <button type="submit">Filter</button>
//             </form>
//           </div>
//           <div className="col-sm-6" style={{ textAlign: 'right' }}>
//             <form action="/excelexport.php?prereg" method="post">
//               <button type="submit" className="btn btn-dark">
//                 Export To Excel
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className="prjtmlsumbox">
//         <div className="prjtmlsumboxcntnt admninfluprereg">
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Order Id</th>
//                 <th>Plan</th>
//                 <th>Order Amount</th>
//                 <th>Order Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order.id}>
//                   <td>{order.orderid}</td>
//                   <td>{order.name}</td>
//                   <td>{order.total}</td>
//                   <td>{order.date}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderList;

import React, { useState } from 'react';
import '../../../styles/brand/Order/OrderList.css';


const OrderList = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [orders, setOrders] = useState([
    { id: 1, orderid: 'ORD123', name: 'Plan A', total: 100, date: '2023-05-20' },
    { id: 2, orderid: 'ORD124', name: 'Plan B', total: 200, date: '2023-05-21' },
    { id: 3, orderid: 'ORD125', name: 'Plan C', total: 300, date: '2023-05-22' },
    // Add more dummy data as needed
  ]);

  const handleFilter = (event) => {
    event.preventDefault();
    // Implement filtering logic here
    const filteredOrders = orders.filter(order => {
      const orderDate = new Date(order.date);
      return (!fromDate || new Date(fromDate) <= orderDate) &&
             (!toDate || new Date(toDate) >= orderDate);
    });
    setOrders(filteredOrders);
  };

  return (
    <div className="influtimelinesum">
      <h3>Order List</h3>

      <div className="filter-container">
        <div className="row">
          <div className="col-sm-6">
            <form onSubmit={handleFilter}>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                required
              />
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                required
              />
              <button type="submit">Filter</button>
            </form>
          </div>
          <div className="col-sm-6" style={{ textAlign: 'right' }}>
            <form action="/excelexport.php?prereg" method="post">
              <button type="submit" className="btn btn-dark">
                Export To Excel
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="prjtmlsumbox">
        <div className="prjtmlsumboxcntnt admninfluprereg">
          <table className="table">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Plan</th>
                <th>Order Amount</th>
                <th>Order Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.orderid}</td>
                  <td>{order.name}</td>
                  <td>{order.total}</td>
                  <td>{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
