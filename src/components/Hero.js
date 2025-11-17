import React from 'react';

const Hero = () => {
  return (
    <section className="hero-area">
      <div className="hero-wrapper-four">
        <div className="shape-icon shape-icon-one scene">
          <span data-depth="2">
            <img src="/assets/images/icon/icon-16.webp" alt="shape" />
          </span>
        </div>
        <div className="shape-icon shape-icon-two scene">
          <span data-depth="4">
            <img src="/assets/images/icon/icon-15.webp" alt="shape" />
          </span>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-first">
              <div className="hero-content">
                <h1 className="wow fadeInDown" data-wow-delay=".4s">
                  We are the Best Web Design, Development, and Digital Marketing Company.
                </h1>
                <p className="text-justify">
                  Aspira Technology is one of the best Web Design and Web Development Company in Chennai, India. We provide top-notch website designs, logo design, SEO, Digital Marketing, Mobile Application Development, etc. Our website design
                  company has created websites for all kinds of structures in the world, including enterprises, individuals, and categories.
                </p>
                <ul className="button wow fadeInUp" data-wow-delay=".7s">
                  <li>
                    <a href="contact.html" className="main-btn btn-blue-dark">get started</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 order-lg-last">
              <div className="hero-img wow fadeInRight" data-wow-delay=".9s">
                <img src="/assets/images/hero/hero-4_img-1.webp" alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

