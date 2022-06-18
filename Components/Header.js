import React from "react";

const Header = () => {
  return (
    <header className="container ">
      <section className="row">
        <img className="col-lg-8 col-md-12 col-sm-12 mb-5" src="/navphoto.svg"  style={{overFlow:'hidden'}}/>
        <div className="col-lg-3 col-sm-12 col-md-12 mb-5">
          <p className="col-lg-4 col-md-12 col-sm-12 mt-5"
            style={{
              fontSize: "50px",
              color: "#f7444e;",
              fontSize: "2rem",
              fontWeight: "bold",
              fontFamily: "Playfair Display, Serif",
            }}
          >
            20% OFF ON EVERYTHING
          </p>

          <button
            className="mt-5 "
            style={{
              backgroundColor: "#f7444e",
              border: "1px solid #f7444e",
              color: "#ffffff",
              fontSize: "3rem",
              transition: "all 0.3s",
              fontWeight: "700",
              margin: "0 auto",
              float: "none",
            }}
          >
            {" "}
            SHOP NOW{" "}
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
