import React from "react";

function Hero() {
  return (
    <div className="container ">
      <div
        className="row text-center mb-4"
        style={{
          padding: "100px 0 100px 0",
          color: "#424242",
          borderBottom: "1px solid #eee",
        }}
      >
        <h1 className="fs-2" style={{fontWeight:"400"}}>Zerodha Products</h1>
        <p className="fs-5">Sleek, modern, and intuitive trading platforms</p>
        <p>
          Check out our{" "}
          <a href="">
            investment offerings <i class="fa-solid fa-arrow-right-long"></i>
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
