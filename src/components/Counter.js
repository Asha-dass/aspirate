import React, { useEffect, useRef } from 'react';

const Counter = () => {
  const counterRefs = useRef([]);

  useEffect(() => {
    const animateCounter = (element, target) => {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          element.textContent = Math.floor(target) + '+';
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current) + '+';
        }
      }, 20);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-count'));
            animateCounter(entry.target, target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counterRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      counterRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section
      className="counter-area counter-style-one bg_cover pt-50 pb-30"
      style={{ backgroundImage: 'url(/assets/images/bg/counter-bg-1.webp)' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="counter-item text-center mb-40 wow fadeInUp" data-wow-delay=".2s">
              <div className="icon">
                <i className="flaticon-social-care"></i>
              </div>
              <h2 className="number">
                <span className="count" ref={(el) => (counterRefs.current[0] = el)} data-count="500">
                  0
                </span>+
              </h2>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="counter-item text-center mb-40 wow fadeInUp" data-wow-delay=".3s">
              <div className="icon">
                <i className="flaticon-dashboard-1"></i>
              </div>
              <h2 className="number">
                <span className="count" ref={(el) => (counterRefs.current[1] = el)} data-count="1000">
                  0
                </span>+
              </h2>
              <p>Impressive Projects</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="counter-item text-center mb-40 wow fadeInUp" data-wow-delay=".4s">
              <div className="icon">
                <i className="flaticon-link"></i>
              </div>
              <h2 className="number">
                <span className="count" ref={(el) => (counterRefs.current[2] = el)} data-count="15">
                  0
                </span>+
              </h2>
              <p>Team Members</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="counter-item text-center mb-40 wow fadeInUp" data-wow-delay=".5s">
              <div className="icon">
                <i className="flaticon-trophy"></i>
              </div>
              <h2 className="number">
                <span className="count" ref={(el) => (counterRefs.current[3] = el)} data-count="12">
                  0
                </span>+
              </h2>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;

