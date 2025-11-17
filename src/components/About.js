import React from 'react';

const About = () => {
  return (
    <section className="fancy-about fancy-about-one pt-40 position-relative pb-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="about-img-box mb-20 wow fadeInLeft">
              <img
                data-src="/assets/images/about/about.webp"
                className="lazyload"
                alt="About image"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="text-wrapper wow fadeInRight">
              <div className="section-title mb-10">
                <span className="sub-title red-dark text-underline">Welcome to Aspira Technology</span>
                <h2 className="text-transform a-title">
                  Web Design company in Chennai | web Development company in Chennai
                </h2>
              </div>
              <p className="text-justify">
                Aspira Technology provides a comprehensive range of services to satisfy your company requirements. We have a specialized team of professionals who specialize in Website Design and Web Development. They create dynamic, responsive
                websites that prioritize user comfort across all platforms. Are you looking for a professional web design and web development company in Chennai? We focus on the development of strong web development solutions, including custom
                websites and e-commerce platforms, which can really improve your online presence. Also, we provide comprehensive digital marketing services to help reach your audience more effectively. We are committed to achieving innovations
                and outcomes that will boost your business to success in the online world of today.
              </p>
              <a href="about.html" className="main-btn text-black">About Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

