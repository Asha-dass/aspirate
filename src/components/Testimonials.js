import React, { useEffect, useRef } from 'react';

const Testimonials = () => {
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
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              arrows: true,
              dots: true,
              fade: true
            });
          } catch (e) {
            console.warn('Error initializing testimonials slider:', e);
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

  const testimonials = [
    {
      text: "Working with Aspira Technology transformed our online strategy. Their innovative campaigns and data-driven insights make them a standout digital marketing company in chennai. Our website traffic and engagement have soared!",
      author: "Mahesh",
      delay: ".2s"
    },
    {
      text: "I recently collaborated with Aspira Technology and was impressed by their fresh ideas. This digital marketing agency chennai has an innate ability to turn challenges into opportunities, boosting our brand's visibility significantly.",
      author: "Vishwanath",
      delay: ".3s"
    },
    {
      text: "Aspira Technology consistently delivers excellence. Their tailored campaigns and strategic planning position them as the best digital marketing company in chennai. Our business growth has been remarkable since partnering with them.",
      author: "Shivani",
      delay: ".4s"
    },
    {
      text: "Every aspect of our campaign was handled with care and expertise by Aspira Technology. They truly stand out as the best digital marketing agency in chennai, providing custom solutions that drive both engagement and revenue.",
      author: "Abisheck",
      delay: ".5s"
    },
    {
      text: "Our website now reflects our brand perfectly, thanks to Aspira Technology. As a web development company in chennai, they delivered a responsive, feature-rich website that's both visually appealing and easy to navigate.",
      author: "Geetha",
      delay: ".5s"
    }
  ];

  return (
    <section
      className="testimonial-area testimonial-style-two bg_cover pt-50 pb-50"
      style={{ backgroundImage: 'url(/assets/images/bg/testimonial-bg-1.webp)' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title section-title-two text-center mb-50 wow fadeInUp">
              <span className="sub-title sub-title-bg black-bg">Testimonials</span>
              <h2 className="text-underline">What do our clients say about our company?</h2>
            </div>
          </div>
        </div>
        <div ref={sliderRef} className="testimonial-slider-two" data-react-slider="true">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item wow fadeInUp" data-wow-delay={testimonial.delay}>
              <div className="wt-content">
                <p>{testimonial.text}</p>
                <div className="quote-title-box">
                  <div className="quote">
                    <i className="flaticon-quotation"></i>
                  </div>
                  <div className="author-title">
                    <h5>{testimonial.author}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-3 text-center">
          <a href="testimonials.html" className="main-btn text-black">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

