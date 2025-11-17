import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleMenuToggle = () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navMenu = document.querySelector('.nav-menu');
      const navbarClose = document.querySelector('.navbar-close');

      if (navbarToggler) {
        navbarToggler.addEventListener('click', () => {
          setIsMenuOpen(true);
          if (navMenu) navMenu.classList.add('menu-open');
        });
      }

      if (navbarClose) {
        navbarClose.addEventListener('click', () => {
          setIsMenuOpen(false);
          if (navMenu) navMenu.classList.remove('menu-open');
        });
      }
    };

    handleMenuToggle();
  }, []);

  return (
    <header className="theme-header">
      {/* header top */}
      <div className="header-top-bar header-top-bar-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="top-left">
                <ul>
                  <li>
                    <span>
                      <i className="far fa-mobile"></i>{' '}
                      <a href="tel:+91-9677077990">+91-9677077990</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-envelope"></i>
                      <a href="mailto:info@aspiratechnology.in">info@aspiratechnology.in</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="top-right d-flex align-items-center">
                <ul className="social-link">
                  <li><span className="title">Follow Us</span></li>
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
      </div>
      {/* header Navigation */}
      <div className="header-navigation">
        <div className="container-fluid">
          <div className="primary-menu">
            <div className="site-branding">
              <a href="/" className="brand-logo">
                <img src="/assets/images/logo/logo.webp" alt="Aspira Technology Logo" />
              </a>
            </div>
            <div className="nav-menu">
              {/* Navbar Close */}
              <div className="navbar-close">
                <i className="far fa-times"></i>
              </div>

              <nav className="main-menu">
                <ul>
                  <li className="menu-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="menu-item has-children">
                    <a href="#">About</a>
                    <ul className="sub-menu">
                      <li><a href="about.html">Profile</a></li>
                      <li><a href="testimonials.html">Testimonials</a></li>
                    </ul>
                  </li>
                  <li className="menu-item has-children">
                    <a href="#">Services</a>
                    <ul className="sub-menu">
                      <li><a href="best-web-development-company-in-chennai.html">Web Development</a></li>
                      <li><a href="digital-marketing-company-in-chennai.html">Digital marketing</a></li>
                      <li><a href="best-mobile-app-development-company-in-chennai.html">App Development</a></li>
                      <li><a href="other-services.html">Other Services</a></li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="portfolio.html">Portfolio</a>
                  </li>
                  <li className="menu-item">
                    <a href="careers.html">Careers</a>
                  </li>
                  <li className="menu-item d-sm-block d-md-none">
                    <a href="enquiry.html">Get Free Quote</a>
                  </li>
                  <li className="menu-item">
                    <a href="blog.html">Blog</a>
                  </li>
                  <li className="menu-item">
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-right-nav">
              <ul>
                <li className="nav-button">
                  <a
                    href="https://www.instamojo.com/@aspiratech"
                    className="main-btn main-btn1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Online Payment
                  </a>
                </li>
                <li className="nav-button">
                  <a href="enquiry.html" className="main-btn">get free quote</a>
                </li>
                <li className="navbar-toggle-btn">
                  <div className="navbar-toggler">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

