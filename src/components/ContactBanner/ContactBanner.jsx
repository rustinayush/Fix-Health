import React from 'react';
import './ContactBanner.css';

const ContactBanner = () => {
  return (
    <div className='contact-banner'>
      <div className='Contact-download'>
        <h2>Download Our App</h2>
        <p>Experience personalized healthcare with our mobile app. Download now!</p>
        <div className='app-download-buttons'>
          <button className='download-button'>
            <i className='fab fa-apple'></i> Download on the App Store
          </button>
          <button className='download-button'>
            <i className='fab fa-google-play'></i> Get it on Google Play
          </button>
        </div>
      </div>

      <div className='contact-us-section'>
        <h2>Contact Us</h2>
        <p>We're available for assistance. Reach out to us via phone or WhatsApp.</p>
        <div className='contact-details'>
          <p>
            Call us at: <span className='phone-number'>1800-890-2102</span> <i className='fas fa-phone'></i>
          </p>
          <p>
            WhatsApp at: <span className='phone-number'>+91-960-778-8208</span> <i className='fab fa-whatsapp'></i>
          </p>
          <p>We're available from 8 AM to 9 PM, 7 days every week.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
