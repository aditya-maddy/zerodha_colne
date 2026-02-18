import React from "react";

function Hero() {
  return (
    <div className="container mb-5">
      <div className="container">
        <div
          className="row text-center "
          style={{
            padding: "100px 0 100px 0",
            color: "#424242",
            borderBottom: "1px solid #eee",
          }}
        >
          <h1 className="fs-4" style={{ lineHeight: "1.5", fontWeight: "500" }}>
            We pioneered the discount broking model in India. <br /> Now, we are
            breaking ground with our technology.
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="row p-5 mt-5 flex justify-content-center">
          <div className="col-6 " style={{ width: "49%" }}>
            <p className="aboutHero_p">
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>

            <p className="aboutHero_p">
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>

            <p className="aboutHero_p">
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="col-6" style={{ width: "49%" }}>
            <p className="aboutHero_p">
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>

            <p className="aboutHero_p">
              <a href="https://rainmatter.com/" target="_blank">
                Rainmatter
              </a>
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>

            <p className="aboutHero_p" target="_blank">
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our{" "}
              <a href="https://zerodha.com/z-connect/" target="_blank">
                blog
              </a>{" "}
              or see what the media is{" "}
              <a href="https://zerodha.com/media" target="_blank">
                saying about us
              </a>{" "}
              or learn more about our <br /> business and product{" "}
              <a href="https://zerodha.com/about/philosophy/" target="_blank">
                philosophies
              </a>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
