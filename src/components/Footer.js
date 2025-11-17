import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area footer-default black-bg footer-map">
      <div className="container">
        <div className="footer-widget pt-40 pb-35">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget about-widget mb-40 wow fadeInUp" data-wow-delay=".2s">
                <h4 className="widget-title text-underline">About Us</h4>
                <p className="text-justify">
                  Aspira Technology is one of the best web design and application development company based in Chennai. more than 12 years of strong web design and development experience company in Chennai
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget footer-nav-widget mb-40 wow fadeInUp" data-wow-delay=".3s">
                <h4 className="widget-title text-underline">Quick Links</h4>
                <ul className="footer-nav list-style-dot">
                  <li><a href="testimonials.html">Testimonials</a></li>
                  <li><a href="careers.html">Careers</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                  <li><a href="terms-conditions.html">Terms & Conditions</a></li>
                  <li><a href="privacy-policy.html">Privacy Policy</a></li>
                  <li><a href="cancellation-policy.html">Refund & Cancellation Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget footer-nav-widget mb-40 wow fadeInUp" data-wow-delay=".4s">
                <h4 className="widget-title text-underline">Our Services</h4>
                <ul className="footer-nav list-style-dot">
                  <li><a href="best-web-development-company-in-chennai.html">Web Development</a></li>
                  <li><a href="digital-marketing-company-in-chennai.html">Digital marketing</a></li>
                  <li><a href="best-mobile-app-development-company-in-chennai.html">App Development</a></li>
                  <li><a href="other-services.html">Other Services</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget about-widget mb-40 wow fadeInUp" data-wow-delay=".2s">
                <h4 className="widget-title text-underline">Contact Us</h4>
                <div className="about-content">
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      <span>
                        Head Office<br />
                        No:31, 2nd floor,<br />
                        Thiruneermalai main road,<br />
                        Nagelkani, Chromepet,<br />
                        Chennai - 600 044
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      <span>
                        Branch Office<br />
                        Rajam Complex, No 7, 2nd Floor,<br />
                        Rahman Nagar Mainroad,<br />
                        Thanjavur - 613 004<br />
                        L/m: Nr.Keso Cafe
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-mobile-alt"></i>
                      <span>
                        <a href="tel:+91-9677077990">+91-9677077990</a>
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-headset"></i>
                      Support:{' '}
                      <span>
                        <a href="tel:+91-9677082990">+91-9677082990</a>
                      </span>
                    </li>
                    <li>
                      <i className="far fa-envelope"></i>
                      <span>
                        <a href="mailto:info@aspiratechnology.in">info@aspiratechnology.in</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="row">
            <div className="col-md-8">
              <div className="text">
                <p>&copy; {currentYear} Aspira Technology. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-md-4">
              <ul className="social-link float-md-right float-sm-none">
                <li>
                  <a
                    href="https://www.facebook.com/aspiratechnology"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="top"
                    aria-label="facebook"
                    title="facebook"
                    rel="noopener"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/aspiratechnology"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="top"
                    aria-label="instagram"
                    title="instagram"
                    rel="noopener"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/aspiratech2022"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="top"
                    aria-label="twitter"
                    title="twitter"
                    rel="noopener"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/aspiratechnology"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="top"
                    aria-label="linkedin"
                    title="linkedin"
                    rel="noopener"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@aspiratechnology"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="top"
                    aria-label="youtube"
                    title="youtube"
                    rel="noopener"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

