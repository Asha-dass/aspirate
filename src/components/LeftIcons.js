import React from 'react';

const LeftIcons = () => {
  return (
    <div className="left-icons-main">
      <a target="_blank" href="https://api.whatsapp.com/send?phone=919677077990&text=Hai" rel="noopener noreferrer">
        <div className="left-icons-sub">
          <div>
            <div className="left-icons-wp-text">Whatsapp</div>
            9677077990
          </div>
          <div className="left-icons-icon">
            <img
              src="/assets/images/svg/whatsapp.svg"
              alt="Whatsapp No-Aspira Technology"
              className="left-icons-img"
            />
          </div>
        </div>
      </a>
      <a href="tel:+919677077990">
        <div className="left-icons-sub">
          <div>
            <div className="left-icons-call-text">Call</div>
            9677077990
          </div>
          <div className="left-icons-icon">
            <img
              src="/assets/images/svg/call.svg"
              alt="Aspira Technology phone numner"
              className="left-icons-img"
            />
          </div>
        </div>
      </a>
      <a href="enquiry.html">
        <div className="left-icons-sub">
          <div>
            <div className="left-icons-raq-text">Request a Quote</div>
            info@aspiratechnology.in
          </div>
          <div className="left-icons-icon">
            <img
              src="/assets/images/svg/email.svg"
              alt="Emal Aspira Technology"
              className="left-icons-img"
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default LeftIcons;

