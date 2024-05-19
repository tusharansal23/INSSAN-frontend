import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import '../css/CookieConsent.css';

const CookieConsent = ({ onAccept }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasConsented = Cookies.get('cookieConsent');
    if (!hasConsented) {
      setShowModal(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 }); // Set cookie consent
    setShowModal(false);
    onAccept();
  };

  return (
    <div className='modal-container'>
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <h2>Cookie Consent</h2>
        <p>We use cookies to improve your experience on our website. By continuing to use our site, you consent to the use of cookies.</p>
        <div className="modal-actions">
          <button onClick={handleAccept}>Accept</button>
          <button onClick={() => setShowModal(false)}>Decline</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CookieConsent;
