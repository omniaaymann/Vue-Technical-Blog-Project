import React from "react";
import Footer from "../Components/Footer";
const products = ({ productss }) => {
  return (
    <div>
      {productss.map((product) => {
        return (
          <div className="container">
            <div className="d-flex justify-content-center">
              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12" key={product.id}>
                  <div
                    className="card mb-3"
                    style={{
                      width: "18rem",
                      textAlign: "center",
                      color: "black",
                      margin: "0 auto",
                      float: "none",
                    }}
                  >
                    <div className="card-body">
                      <p
                        className="card-text"
                        style={{ fontSize: "21px", fontWeight: "700" }}
                      >
                        {product.price}
                      </p>
                      <img
                        className="card-img-top"
                        src={product.img}
                        alt="Card image cap"
                        style={{ height: "300px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12" key={product.id}>
                  <div
                    className="card mb-3"
                    style={{
                      width: "18rem",
                      textAlign: "center",
                      color: "black",
                      margin: "0 auto",
                      float: "none",
                    }}
                  >
                    <div className="card-body">
                      <p
                        className="card-text"
                        style={{ fontSize: "21px", fontWeight: "700" }}
                      >
                        {product.price}
                      </p>
                      <img
                        className="card-img-top"
                        src={product.img}
                        alt="Card image cap"
                        style={{ height: "300px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12" key={product.id}>
                  <div
                    className="card mb-3"
                    style={{
                      width: "18rem",
                      textAlign: "center",
                      color: "black",
                      margin: "0 auto",
                      float: "none",
                    }}
                  >
                    <div className="card-body">
                      <p
                        className="card-text"
                        style={{ fontSize: "21px", fontWeight: "700" }}
                      >
                        {product.price}
                      </p>
                      <img
                        className="card-img-top"
                        src={product.img}
                        alt="Card image cap"
                        style={{ height: "300px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <Footer />
    </div>
  );
};

export default products;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();
  return {
    props: {
      productss: data,
    },
  };
}
