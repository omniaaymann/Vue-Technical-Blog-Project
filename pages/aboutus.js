import React from "react";
import { useRouter } from "next/router";
import Footer from "../Components/Footer";
const AboutUs = () => {
  const router = useRouter();
  return (
    <div>
      <section className="container">
        <div className="row">

            <img className="col-lg-8 col-md-12 col-sm-12"
            style={{ overFlow: "hidden " }} src="aboutus.svg"></img>

          <p className="col-lg-4 col-md-12 col-sm-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            metus neque, volutpat sit amet dictum at, tempus ut enim.
            Pellentesque aliquet et ex vel ornare. Nulla convallis ornare
            accumsan. Pellentesque pharetra lobortis velit. Vestibulum id mi
            massa. Praesent vel turpis felis. Curabitur molestie turpis a
            egestas dapibus.
          </p>
        </div>
      </section> 
      <Footer/>
    </div>
  );
};

export default AboutUs;
