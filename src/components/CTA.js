import React from 'react';

const CTA = () => {
  return (
    <section
      className="cta-area cta-style-one bg_cover pt-70 pb-40"
      style={{ backgroundImage: 'url(/assets/images/bg/cta-bg-1.webp)' }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-9">
            <div className="cta-content mb-30 wow fadeInLeft">
              <h3 className="text-underline">Ready To Work With Us For Web Solutions?</h3>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="button float-lg-right float-md-none mb-30 wow fadeInRight">
              <a href="contact.html" className="main-btn">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

