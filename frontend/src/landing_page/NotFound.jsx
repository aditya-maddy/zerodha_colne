import React from "react";
function NotFound() {
  return (
    <div className="container pt-5 mb-5 ">
      <div className="row p-3">
        <div className="col-6 p-5 " style={{ textAlign: "left" }}>
          <div
            style={{
              margin: "170px 0 0 45px",
              width: "100%",
              color: "#424242",
            }}
          >
            <h1 className="fs-5 mb-4">404</h1>

            <h4 className="fs-3 mb-3">Kiaan couldn’t find that page</h4>
            <h5 className="text-muted ">
              We couldn’t find the page you were looking for. <br /> Visit{" "}
              <a href="/ ">Zerodha’s home page</a>
            </h5>
          </div>
        </div>

        <div className="col-6 p-3">
          <img
            style={{ width: "75%", paddingTop: "1rem" }}
            src="media\images\kiaan404.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
