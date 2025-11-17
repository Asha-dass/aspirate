import React, { useEffect, useRef } from 'react';

const Clients = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Wait for DOM and scripts to be ready
    const initSlider = () => {
      if (window.jQuery && window.jQuery.fn.slick && sliderRef.current) {
        const $ = window.jQuery;
        const $slider = $(sliderRef.current);
        
        // Destroy existing slick instance if any
        if ($slider.hasClass('slick-initialized')) {
          try {
            $slider.slick('unslick');
          } catch (e) {
            // Ignore errors during cleanup
          }
        }
        
        // Check if element still exists and has children
        if ($slider.length && $slider.children().length > 0) {
          try {
            // Initialize slick slider
            $slider.slick({
              slidesToShow: 5,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              arrows: false,
              dots: false,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2
                  }
                }
              ]
            });
          } catch (e) {
            console.warn('Error initializing clients slider:', e);
          }
        }
      }
    };

    // Wait for scripts to load and DOM to be ready
    const checkAndInit = () => {
      if (window.jQuery && window.jQuery.fn.slick) {
        initSlider();
      } else {
        setTimeout(checkAndInit, 100);
      }
    };

    // Start checking after component mounts
    const timer1 = setTimeout(checkAndInit, 200);
    const timer2 = setTimeout(checkAndInit, 500);
    
    // Cleanup on unmount
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (window.jQuery && sliderRef.current) {
        const $ = window.jQuery;
        const $slider = $(sliderRef.current);
        if ($slider.length && $slider.hasClass('slick-initialized')) {
          try {
            $slider.slick('unslick');
          } catch (e) {
            // Ignore cleanup errors
          }
        }
      }
    };
  }, []);

  const clients = [1, 2, 3, 4, 5, 6, 7];

  return (
    <section className="clients-area clients-style-one light-gray-bg pt-40 pb-50 clients-map">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center mb-45 wow fadeInUp">
              <span className="sub-title red-dark">popular Clients</span>
              <h2 className="text-uppercase">
                {' '}
                <span className="red-dark">500+</span> clients worldwide use our services.
              </h2>
            </div>
          </div>
        </div>
        <div className="clients-wrapper">
          <div ref={sliderRef} className="clients-slider-one wow fadeInUp" data-wow-delay=".4s" data-react-slider="true">
            {clients.map((num) => (
              <div key={num} className="client-item">
                <div className="client-img">
                  <img
                    data-src={`/assets/images/clients/0${num}.webp`}
                    className="lazyload"
                    alt="clients image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

