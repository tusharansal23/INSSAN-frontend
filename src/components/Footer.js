import React, { useState } from 'react';
import item1 from '../img/INSSAN-item1.JPG';
import item2 from '../img/INSSAN-item2.JPG';
import item3 from '../img/INSSAN-item3.JPG';
import item4 from '../img/INSSAN-item4.JPG';
import item5 from '../img/INSSAN-item5.JPG';
import item6 from '../img/INSSAN-item6.JPG';
import { Link } from 'react-router-dom';
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

        <div className="container-fluid bg-footer text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Get In Touch</h5>
                        <p className="mb-2 d-flex align-items-baseline"><i className="fa fa-map-marker-alt me-3"></i>I-34,

                            Block-1, 1st Floor, South City-2, Gurgaon-122001      
                            </p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>0124- 4360428</p>
                        <p className="mb-2 d-flex align-items-baseline"><i className="fa fa-envelope me-3"></i>secretary.inssan.nic@gmail.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <Link className="btn btn-link text-white-50" to="./About">About Us</Link>
                        <Link className="btn btn-link text-white-50" to="./Contact">Contact Us</Link>
                        <Link className="btn btn-link text-white-50" to="./Structure">Structure</Link>
                        <a className="btn btn-link text-white-50" href="">Privacy Policy</a>
                        <a className="btn btn-link text-white-50" href="">Terms & Condition</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Photo Gallery</h5>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={item1} alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={item2} alt=""/>
                            </div>
                            <div class="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={item3} alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={item4} alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={item5} alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={item6} alt=""/>
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
                                    className="btn btn-primary position-absolute end-0 mt-2 w-100"
                                    onClick={subscribeHandler}
                                >
                                    Subscribe
                                </button>
                            </div>
                            ) : (
                                <button
                                    type="button"
                                    className="btn btn-primary end-0 mt-2 w-100"
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