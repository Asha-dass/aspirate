import React from 'react';

const WorkProcess = () => {
  return (
    <section className="work-process-area pt-20 pb-20 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-45 wow fadeInUp">
              <span className="sub-title red-dark text-underline">HOW TO GET STARTED</span>
              <h2 className="text-uppercase">Our Process</h2>
            </div>
          </div>
        </div>
        <div className="work-process-wrap rel z-1">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-5 col-sm-6">
              <div className="work-process-item mt-30 wow fadeInUp delay-0-2s animated">
                <div className="icon">
                  <span className="number">01</span>
                  <i className="flaticon-meeting"></i>
                </div>
                <h4>Discussion</h4>
                <p>We always give importance to your ideas and requirements, and based on that, we will prepare the plan of action.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-sm-6">
              <div className="work-process-item wow fadeInUp delay-0-4s animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                <div className="icon">
                  <span className="number">02</span>
                  <i className="flaticon-link"></i>
                </div>
                <h4>Designing</h4>
                <p>Based on the planning, our design team will create the best and perfect design that lines up with your concept.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-sm-6">
              <div className="work-process-item mt-55 wow fadeInUp delay-0-6s animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                <div className="icon">
                  <span className="number">03</span>
                  <i className="flaticon-web-design"></i>
                </div>
                <h4>Development</h4>
                <p>Our Team of expert developers will develop the website or app in such a way that it will be completed on time.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-sm-6">
              <div className="work-process-item mt-45 wow fadeInUp delay-0-8s animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                <div className="icon">
                  <span className="number">04</span>
                  <i className="flaticon-creative"></i>
                </div>
                <h4>Launch</h4>
                <p>We host your website or app after complete testing, and our team will get it up and running in no time.</p>
              </div>
            </div>
          </div>
          <div className="work-process-shape">
            <img
              data-src="/assets/images/bg/worp-process-step.webp"
              className="lazyload"
              alt="Shape"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;

