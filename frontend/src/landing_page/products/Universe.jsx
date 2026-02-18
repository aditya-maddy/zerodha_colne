import React from "react";
function Universe() {
  return (
    <div className="container text-center pt-4 ">
      <h5 className="text-muted mb-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="">Zerodha.tech blog</a>.
      </h5>
      <div className="row pt-5 flex">
        <h1 className="fs-3 " style={{ color: "#424242" }}>
          The Zerodha Universe
        </h1>
        <h6 className="pt-3 text-muted mb-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </h6>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="col-4 p-3">
          <img style={{}} src="media\images\smallcaseLogo.png" alt="" />
          <p className="text-small text-muted">
            Thematic investing platformthat helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            style={{ width: "50%" }}
            src="media\images\streakLogo.png"
            alt=""
          />
          <p className="text-small text-muted">
            Thematic investing platformthat helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            style={{ width: "60%", padding: "10px" }}
            src="media\images\sensibullLogo.svg"
            alt=""
          />
          <p className="text-small text-muted ">
            Thematic investing platformthat helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
      </div>
      <br />
      <div className="row pt-5 flex">
        <div className="col-4 p-3">
          <img
            style={{ width: "50%" }}
            src="media\images\zerodhaFundhouse.png"
            alt=""
          />
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            style={{ width: "50%" }}
            src="media\images\goldenpiLogo.png"
            alt=""
          />
          <p className="text-small text-muted">
            Thematic investing platformthat helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            style={{ width: "26%", padding: "10px" }}
            src="media\images\dittoLogo.png"
            alt=""
          />
          <p className="text-small text-muted ">
            Thematic investing platformthat helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
      </div>
      <button
        className="p-2 btn btn-primary  mb-4 fs-5"
        style={{ width: "17%", margin: "0 auto" }}
      >
        Sign up for free
      </button>
    </div>
  );
}

export default Universe;
