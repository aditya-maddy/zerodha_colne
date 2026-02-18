import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5  border-bottom text-center">
        <h1 className="fs-2 fc">Charges</h1>
        <h3 className="fs-5 mt-3 text-muted ">List of all charges and taxes</h3>
      </div>
      <div className="row  mt-5">
        <div className="col-4 text-center p-3">
          <img
            style={{ width: "70%" }}
            src="media\images\pricingEquity.svg"
            alt=""
          />
          <h2 className="fs-3 fc">Free equity delivery</h2>
          <p className="mt-4 fs-6 text-muted">
            All equity delivery investments (NSE, BSE),
            <br /> are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center p-3">
          <img
            style={{ width: "70%" }}
            src="media\images\intradayTrades.svg"
            alt=""
          />
          <h2 className="fs-3 fc">Intraday and F&O trades</h2>
          <p className="mt-4 text-muted fs-6">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 text-center p-3">
          <img
            style={{ width: "70%" }}
            src="media\images\pricing0.svg"
            alt=""
          />
          <h2 className="fs-3 fc ">Free direct MF</h2>
          <p className="mt-4 text-muted fs-6">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
