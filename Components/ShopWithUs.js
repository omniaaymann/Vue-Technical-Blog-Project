import React from "react";

const ShopWithUs = () => {
  return (
    <div>
      <section className="container mb-5">
        <div className="row offset-lg-2 col-lg-8 col-md-12 col-sm-12 ">
          <p
            className="mb-5 col-lg-12 col-md-12 col-sm-12"
            style={{
              fontSize: "50px",
              color: "black",
              fontSize: "3.5rem",
              fontWeight: "bold",
              fontFamily: "Playfair Display, Serif",
              textAlign: "center",
            }}
          >
            Why Shop With Us
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div
              className="card mb-3 "
              style={{
                width: "18rem",
                textAlign: "center",
                backgroundColor: "#002c3e",
                color: "white",
                margin: "0 auto",
                float: "none",
              }}
            >
              <div className="card-body">
                <p
                  className="card-text"
                  style={{ fontSize: "21px", fontWeight: "700" }}
                >
                  Fast Delivery
                </p>
                <img
                  className="card-img-top"
                  src="fastdelivery.svg"
                  alt="Card image cap"
                  style={{ height: "300px" }}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12">
            <div
              className="card mb-3"
              style={{
                width: "18rem",
                textAlign: "center",
                backgroundColor: "#002c3e",
                color: "white",
                margin: "0 auto",
                float: "none",
              }}
            >
              <div className="card-body">
                <p
                  className="card-text"
                  style={{ fontSize: "21px", fontWeight: "700" }}
                >
                  Free Shipping
                </p>
                <img
                  className="card-img-top"
                  src="freeshipping.svg"
                  alt="Card image cap"
                  style={{ height: "300px" }}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12">
            <div
              className="card mb-3"
              style={{
                width: "18rem",
                textAlign: "center",
                backgroundColor: "#002c3e",
                color: "white",
                margin: "0 auto",
                float: "none",
              }}
            >
              <div className="card-body">
                <p
                  className="card-text"
                  style={{ fontSize: "21px", fontWeight: "700" }}
                >
                  Best Quality
                </p>
                <img
                  className="card-img-top"
                  src="bestquality.svg"
                  alt="Card image cap"
                  style={{ height: "300px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-5 mb-5">
        <div className="row">
          <img
            src="summercollection.svg"
            className="col-lg-6 col-sm-12 col-md-12 mt-5"
          ></img>

          <div className="col-lg-6 col-md-12 col-sm-12  mt-5">
            <p
              className="col-lg-4 col-md-12 col-sm-12  mt-5"
              style={{
                fontFamily: "Montserrat sans-serif",
                color: "#0c0c0c",
                fontSize: "4rem",
                fontWeight: "400",
              }}
            >
              #NewArrivals
            </p>

            <p className="col-lg-12 col-md-12 col-sm-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse metus neque, volutpat sit amet dictum at, tempus ut
              enim. Pellentesque aliquet et ex vel ornare. Nulla convallis
              ornare accumsan. Pellentesque pharetra lobortis velit. Vestibulum
              id mi massa. Praesent vel turpis felis. Curabitur molestie turpis
              a egestas dapibus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopWithUs;
