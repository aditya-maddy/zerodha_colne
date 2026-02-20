import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api"; // ✅ use JWT instance

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await API.get("/api/allorders"); // JWT sent automatically
        setAllOrders(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Orders error:", err.response?.status || err);
        setAllOrders([]);
      }
    };

    fetchOrders(); // first load
    const interval = setInterval(fetchOrders, 2000); // refresh every 2 sec

    return () => clearInterval(interval); // cleanup
  }, []);

  if (allOrders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">Get started</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>
      <div style={{ marginBottom: "15px" }}>
        <Link to="/" className="btn btn-blue">+ Add more orders</Link>
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
                  <p className={order.orderType === "BUY" ? "order-type-buy" : "order-type-sell"}>
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