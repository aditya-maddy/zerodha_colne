import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import axios from "axios"; 
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      const response = await axios.post(
        "https://zerodha-colne-zsx2.onrender.com/api/neworder", 
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          orderType: "BUY",
        },
        {
          withCredentials: true, 
        }
      );

      console.log("Order saved:", response.data);
      closeBuyWindow();
      window.location.href = "/orders";
      
    } catch (err) {
      console.error("Order save error:", err.response?.status, err.message);
      alert("Failed to save order");
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="100"
              value={stockPrice}
              onChange={(e) => setStockPrice(Number(e.target.value))}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
