// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Orders = () => {
//   const [allOrders, setAllOrders] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3002/allorders")
//       .then((res) => {
//         setAllOrders(Array.isArray(res.data) ? res.data : []);
//       })
//       .catch(() => setAllOrders([]));
//   }, []);

//   return (
//     <>
//       <h3 className="title">Orders ({allOrders.length})</h3>

//       {allOrders.length === 0 ? (
//         <div className="no-orders">
//           <p>You haven't placed any orders today</p>
//         </div>
//       ) : (
//         <div className="order-table">
//           <table>
//             <thead>
//               <tr>
//                 <th className="align-left">Type</th>
//                 <th className="align-left">Instrument</th>
//                 <th>Qty</th>
//                 <th>Price</th>
//               </tr>
//             </thead>

//             <tbody>
//               {allOrders.map((order) => (
//                 <tr key={order._id}>
//                   <td className="align-left">
//                     <p
//                       className={
//                         order.orderType === "BUY"
//                           ? "order-type-buy"
//                           : "order-type-sell"
//                       }
//                     >
//                       {order.orderType}
//                     </p>
//                   </td>
//                   <td className="align-left">{order.name}</td>
//                   <td>{order.qty}</td>
//                   <td>{Number(order.price).toFixed(2)}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </>
//   );
// };

// export default Orders;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
  const fetchOrders = () => {
  axios
    .get("https://zerodha-colne-zsx2.onrender.com//allorders", {
      withCredentials: true,
    })
    .then((res) => {
      setAllOrders(Array.isArray(res.data) ? res.data : []);
    })
    .catch((err) => {
      console.error("Orders error:", err.response?.status);
      setAllOrders([]);
    });
};


  fetchOrders(); // first load

  const interval = setInterval(fetchOrders, 2000); // every 2 sec

  return () => clearInterval(interval); // cleanup
}, []);


  // 👉 NO ORDERS UI
  if (allOrders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  // 👉 ORDERS TABLE UI
  return (
    <>
      <h3 className="title">
        Orders ({allOrders.length})
      </h3>

      {/* ADD MORE ORDERS */}
      <div style={{ marginBottom: "15px" }}>
        <Link to="/" className="btn btn-blue">
          + Add more orders
        </Link>
      </div>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {allOrders.map((order, index) => (
              <tr key={index}>
                <td>
                  <p
                    className={
                      order.orderType === "BUY"
                        ? "order-type-buy"
                        : "order-type-sell"
                    }
                  >
                    {order.orderType}
                  </p>
                </td>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{Number(order.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
