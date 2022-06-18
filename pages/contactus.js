import React from 'react';
import Footer from "../Components/Footer";
const ContactUs = () => {
    return (
        <div>
        <section className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <img src="contactus.svg"></img>
            </div>
  
            <div className="col-lg-4 col-md-12 col-sm-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              metus neque, volutpat sit amet dictum at, tempus ut enim.
              Pellentesque aliquet et ex vel ornare. Nulla convallis ornare
              accumsan. Pellentesque pharetra lobortis velit. Vestibulum id mi
              massa. Praesent vel turpis felis. Curabitur molestie turpis a
              egestas dapibus.
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    );
};

export default ContactUs;