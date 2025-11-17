import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import CTA from './components/CTA';
import WorkProcess from './components/WorkProcess';
import Counter from './components/Counter';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';
import LeftIcons from './components/LeftIcons';
import BackToTop from './components/BackToTop';
import GoogleTagManager from './components/GoogleTagManager';
import StructuredData from './components/StructuredData';
import ArtiBot from './components/ArtiBot';
import './App.css';

function App() {
  useEffect(() => {
    // Load external scripts
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const scripts = [
      '/assets/vendor/jquery-3.6.0.min.js',
      '/assets/vendor/popper/popper.min.js',
      '/assets/vendor/bootstrap/js/bootstrap.min.js',
      '/assets/vendor/slick/slick.min.js',
      '/assets/vendor/magnific-popup/dist/jquery.magnific-popup.min.js',
      '/assets/vendor/isotope.min.js',
      '/assets/vendor/imagesloaded.min.js',
      '/assets/vendor/jquery.counterup.min.js',
      '/assets/vendor/jquery.waypoints.js',
      '/assets/vendor/jquery.nice-number.min.js',
      '/assets/vendor/nice-select/js/jquery.nice-select.min.js',
      '/assets/vendor/jquery-ui/jquery-ui.min.js',
      '/assets/vendor/donutty-jquery.min.js',
      '/assets/vendor/wow.min.js',
      '/assets/js/lazysizes.min.js'
    ];

    // Load scripts sequentially (excluding theme.js for now)
    let promise = Promise.resolve();
    scripts.forEach(src => {
      promise = promise.then(() => loadScript(src).catch(err => console.warn(`Failed to load ${src}:`, err)));
    });

    // Patch Slick to prevent initialization on React-managed sliders and null elements
    promise.then(() => {
      if (window.jQuery && window.jQuery.fn.slick) {
        const $ = window.jQuery;
        const originalSlick = $.fn.slick;
        
        // Override slick to add safety checks
        $.fn.slick = function(options) {
          // Safety check: ensure element exists and has children
          if (!this.length || this.length === 0) {
            console.warn('Slick: Attempted to initialize on non-existent element');
            return this;
          }
          
          // Check if element is in DOM
          if (!document.contains(this[0])) {
            console.warn('Slick: Element not in DOM');
            return this;
          }
          
          // Check if this element is React-managed
          if ($(this).attr('data-react-slider') === 'true') {
            // If already initialized by React, skip theme.js initialization
            if ($(this).hasClass('slick-initialized')) {
              return this;
            }
            // If not initialized yet, let React handle it (don't initialize here)
            return this;
          }
          
          // For non-React sliders, use original slick
          try {
            return originalSlick.apply(this, arguments);
          } catch (e) {
            console.warn('Slick initialization error:', e);
            return this;
          }
        };
      }
    });

    // Load theme.js after a delay to let React components initialize first
    promise.then(() => {
      // Wait a bit for React components to mount and initialize their sliders
      setTimeout(() => {
        loadScript('/assets/js/theme.js').catch(err => console.warn('Failed to load theme.js:', err));
      }, 1000);
    });

    // Initialize WOW.js after scripts load
    promise.then(() => {
      setTimeout(() => {
        if (window.WOW) {
          new window.WOW().init();
        }
      }, 300);
    });

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Web Design company in Chennai | web Development company in Chennai | Aspira Technology</title>
        <meta name="description" content="Aspira Technology is one of the best web design and web development company in Chennai Chromepet. We are also providing digital marketing services and mobile app development." />
        <meta name="keywords" content="web development company, website designing companies in chennai, web design company in chennai, web designers in chennai, creative web designing services, website development company, e-commerce solutions, best seo company in chennai, digital marketing company in chennai, digital marketing agency, digital marketing services, web development company, website designing company, web design company, web development companies in chennai, web designing companies in chennai, seo companies in chennai, best seo company, seo, seo services, e-commerce website design, social media marketing, aspira , aspira technology, best digital marketing services in chromepet, best digital marketing services in pallavaram, best digital marketing services in pammal, best digital marketing services in hasthinapuram, best digital marketing services in guindy, best digital marketing services in tambaram, digital marketing services in west tambaram, digital marketing services in east tambaram, digital marketing services in pallavaram, digital marketing services in Zamin Pallavaram, digital marketing services in old Pallavaram, web development company in east tambaram, web development company in east tambaram, web development company in Zamin Pallavaram, web development company in old pallavaram, web development company in East Tambaram, web development company in chromepet,web development company in Pallavaram,web development company in pammal, web development company in hasthinapuram, web development company in guindy, web development company in tambaram, Best Mobile App Development Company In Chennai, app development company in chennai, app development company in chromepet, app development company in Pallavaram, app development company in pammal, app development company in hasthinapuram, app development company in guindy, app development company in tambaram, app development company in perungalathur, app development company in east tambaram, app development company in Zamin Pallavaram, app development company in old pallavaram, app development company in west tambaram, web development company in perungalathur, Best SEO Company in Chennai, SEO Company in Chennai, SEO Company in tambaram, SEO Company in west tambaram, SEO Company in east tambaram, SEO Company in zamin pallavaram, SEO Company in old pallavaram, SEO Company in perungalathur, SEO Company in hasthinapuram, SEO Company in pammal, SEO Company in guindy, SEO Company in pallavaram, SEO Company in chromepet, best seo agency in chennai, top seo company in chennai" />
        <meta itemProp="name" content="Web Design company in Chennai | web Development company in Chennai | Aspira Technology" />
        <meta itemProp="description" content="Aspira Technology is one of the best web design and web development company in Chennai Chromepet. We are also providing digital marketing services and mobile app development." />
        <meta itemProp="image" content="https://www.aspiratechnology.in/assets/images/logo/logo.webp" />
        <meta name="robots" content="all, index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="msvalidate.01" content="061AC1FF01774C200C63FF71990A518A" />
        <meta name="google-site-verification" content="lx2OWeyM8i6Nt6C76FnA-lOMXJC1Kvx42eztxBZcB8g" />
        <meta name="DC.title" content="Web Design company in Chennai | web Development company in Chennai | Aspira Technology" />
        <meta name="DC.description" content="Aspira Technology is one of the best web design and web development company in Chennai Chromepet. We are also providing digital marketing services and mobile app development." />
        <meta name="dc.keywords" content="web hosting in chennai, web hosting company in chennai, linux hosting in chennai, windows hosting in chennai. vps hosting service in chennai, web hosting companies in chennai, web hosting chennai, domain registration company, whatsApp marketing services in chennai, best domain name registration in chennai, domain registration in chennai, website registration in chennai, web hosting services, hosting services, web hosting services in chennai, website hosting companies in chennai, web hosting companies, web hosting companies in chennai,Web Hosting Company Chennai, Web Hosting Company in Chennai, Web Hosting provider at Chennai, web hosting at Chennai, website hosting at Chennai, best web hosting company in chennai, Chennai's Best Web Hosting Company, Web Hosting Companies in Chennai, web hosting, web hosting chennai, hosting, website hosting, hosting chennai,Best web hosting in chennai 2023,  Best web hosting providers in chennai, The best web hosting services for 2023,Best web hosting services of 2023, domain name search, buy domain, whatsapp marketing services, whatsapp marketing chennai, whatsapp marketing for business,whatsapp marketing company, Email Marketing, Email Marketing in chennai, email marketing companies in chennai" />
        <meta property="og:title" content="Web Design company in Chennai | web Development company in Chennai | Aspira Technology" />
        <meta property="og:description" content="Aspira Technology is one of the best web design and web development company in Chennai Chromepet. We are also providing digital marketing services and mobile app development." />
        <meta property="og:url" content="https://www.aspiratechnology.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Aspira Technology" />
        <meta property="og:image" content="https://www.aspiratechnology.in/assets/images/logo/logo.webp" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@aspiratech2022" />
        <meta name="twitter:title" content="Web Design company in Chennai | web Development company in Chennai | Aspira Technology" />
        <meta name="twitter:description" content="Aspira Technology is one of the best web design and web development company in Chennai Chromepet. We are also providing digital marketing services and mobile app development." />
        <meta name="twitter:creator" content="@aspiratech2022" />
        <meta name="twitter:image:src" content="https://www.aspiratechnology.in/assets/images/logo/logo.webp" />
        <meta name="author" content="Aspira Technology" />
        <meta name="copyright" content="aspiratechnology.in" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="global" />
        <meta name="city" content="Chennai" />
        <meta name="state" content="Tamil Nadu" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        <meta name="geo.position" content="12.9610069;80.1375149" />
        <meta name="ICBM" content="12.9610069;80.1375149" />
        <meta name="rating" content="General" />
        <meta name="target" content="all" />
        <meta name="url" content="https://www.aspiratechnology.in/" />
        <meta name="identifier-URL" content="https://www.aspiratechnology.in/" />
      </Helmet>
      <GoogleTagManager />
      <StructuredData />
      <Preloader />
      <Header />
      <Hero />
      <Features />
      <About />
      <Services />
      <CTA />
      <WorkProcess />
      <Counter />
      <Clients />
      <Testimonials />
      <Blog />
      <Footer />
      <LeftIcons />
      <BackToTop />
      <ArtiBot />
    </>
  );
}

export default App;

