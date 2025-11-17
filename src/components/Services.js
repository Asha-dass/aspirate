import React from 'react';

const Services = () => {
  return (
    <section className="fancy-features light-gray-bg pt-10 pb-30">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-20 wow fadeInUp">
              <span className="sub-title red-dark text-underline">what we do</span>
              <h2 className="text-uppercase">We make Excellent Professional Services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-20">
            <div className="block-style-two animate-icon wow fadeInUp" data-wow-delay=".2s">
              <div className="icon">
                <img
                  data-src="/assets/images/icon/icon-1.webp"
                  className="lazyload"
                  alt="Best Web Development Company In Chennai"
                />
              </div>
              <div className="text">
                <h3 className="text-underline">
                  <a href="best-web-development-company-in-chennai.html">Web Development</a>
                </h3>
                <p>Best Web Development & Design Website development company are not only the fastest growing, but also the newest and most profitable.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-20">
            <div className="block-style-two animate-icon wow fadeInUp" data-wow-delay=".4s">
              <div className="icon">
                <img
                  data-src="/assets/images/icon/icon-2.webp"
                  className="lazyload"
                  alt="Best Digital Marketing Company In Chennai"
                />
              </div>
              <div className="text">
                <h3 className="text-underline">
                  <a href="digital-marketing-company-in-chennai.html">Digital Marketing</a>
                </h3>
                <p>The Best Digital Marketing Company In Chennai Our team worked on SEO, SMM,SEM, Email marketing and etc...</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-20">
            <div className="block-style-two animate-icon wow fadeInUp" data-wow-delay=".7s">
              <div className="icon">
                <img
                  data-src="/assets/images/icon/icon-3.webp"
                  className="lazyload"
                  alt="Best Mobile App Development Company In Chennai"
                />
              </div>
              <div className="text">
                <h3 className="text-underline">
                  <a href="best-mobile-app-development-company-in-chennai.html">App Development</a>
                </h3>
                <p>Mobile app development: The best mobile application development company in Chennai, Build mobile applications to provide your targeted products and services to your clients.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-20">
            <div className="block-style-two animate-icon wow fadeInUp" data-wow-delay=".9s">
              <div className="icon">
                <img
                  data-src="/assets/images/icon/icon-4.webp"
                  className="lazyload"
                  alt="Domain registration - Aspira Technology"
                />
              </div>
              <div className="text">
                <h3 className="text-underline">
                  <a href="other-services.html">Other Services</a>
                </h3>
                <p>web hosting and domain registration, Get a full-service offer and go live within minutes!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

