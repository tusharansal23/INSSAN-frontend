import React, { useState } from 'react';
import property1 from '../img/property-1.jpg';
import property2 from '../img/property-2.jpg';
import property3 from '../img/property-3.jpg';
import property4 from '../img/property-4.jpg';
import property5 from '../img/property-5.jpg';
import property6 from '../img/property-6.jpg';
import '../css/footer.css';
const Footer = () => {

    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isSubscribed, setIsSubscribed] = useState(false);
    
    const subscribeHandler = () => {
        // Regular expression to check if the email follows a valid format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailPattern.test(email)) {
            setIsValidEmail(false);
        } else {
            setIsValidEmail(true);
            setIsSubscribed(true);
            // Logic to subscribe if email is valid
        }
    };

    return (

        <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Get In Touch</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>I-34,

                            Block-1, 1st Floor, South City-2, Gurgaon-122001      
                            </p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>0124- 4360428</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>secretary.inssan.nic@gmail.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <a className="btn btn-link text-white-50" href="">About Us</a>
                        <a className="btn btn-link text-white-50" href="">Contact Us</a>
                        <a className="btn btn-link text-white-50" href="">Chapters</a>
                        <a className="btn btn-link text-white-50" href="">Privacy Policy</a>
                        <a className="btn btn-link text-white-50" href="">Terms & Condition</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Photo Gallery</h5>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={property1} alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={property2} alt=""/>
                            </div>
                            <div class="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={property3} alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={property4} alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={property5} alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={property6} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Newsletter</h5>
                        <p>Subscribe to our newsletter to get the latest news and updates!</p>
                        {!isSubscribed ? (
                            <div className="position-relative mx-auto footer-container" >
                                <input
                                    className="form-control bg-transparent w-100 py-3 ps-4 pe-5 c-red"
                                    type="text"
                                    placeholder="Your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {!isValidEmail && <p className="text-danger">Please enter a valid email address.</p>}
                                <button
                                    type="button"
                                    className="btn btn-primary position-absolute end-0 mt-2"
                                    onClick={subscribeHandler}
                                >
                                    Subscribe
                                </button>
                            </div>
                            ) : (
                                <button
                                    type="button"
                                    className="btn btn-primary end-0 mt-2"
                                    disabled
                                >
                                        Subscribed
                                </button>
                                )}    
                        
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">INSSAN</a>, All Right Reserved. 
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FAQs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;