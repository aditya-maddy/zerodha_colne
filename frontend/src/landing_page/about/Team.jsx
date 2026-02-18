import React from "react";
function Team() {
  return (
    <div className="container ">
      <h1 className="text-center mt-5 fs-3 mb-5" style={{ color: "#424242" }}>
        People
      </h1>
      <hr />
      <div className="row p- mt-5 ">
        <div className="col-1"></div>

        <div className="col-5 text-center mt-5">
          <img
            style={{ width: "65%", borderRadius: "100%" }}
            src="media\images\nithinKamath.jpg"
            alt="nithinKamath"
          />
          <h5 style={{ padding: "10px" }}>Nithin Kamath</h5>
          <h5 className="fs-6" style={{ opacity: "0.7", fontWeight: "400" }}>
            Founder, CEO
          </h5>
        </div>

        <div className="col-6 " style={{ textAlign: "left" ,width:"45%" }}>
          <p className="mt-5 mb-4"style={{paddingTop:"25px"}}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p className="mb-4 ">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p aboutHero_p>Playing basketball is his zen.</p>

          <p aboutHero_p>
            Connect on <a href="https://nithinkamath.me/">Homepage</a> /{" "}
            <a href="https://tradingqna.com/u/nithin/summary">TradingQnA</a> /{" "}
            <a href="https://x.com/Nithin0dha">Twitter</a>
          </p>
        </div>
        
      </div>

      <br /> <br /> <br /> <br /><br /> <br /> <br />
    </div>
  );
}

export default Team;
