import React, { useState } from 'react';
import logo from '../img/INSSAN-logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home'); // Initially set to 'Home'

    const location = useLocation();
    // const isDashboardDummyPage = location.pathname === '/DashboardDummy';
    const isDashboardDummyPage = location.pathname;

    // Render navbar only if not on DashboardDummy page
    if (isDashboardDummyPage==='/DashboardDummy' || isDashboardDummyPage==='/DashboardChapter' || 
        isDashboardDummyPage==='/DashboardEvent' || isDashboardDummyPage==='/DashboardGallery' || 
        isDashboardDummyPage==='/ChangePassword' || isDashboardDummyPage==='/AccountSetting' ) {
        return null;
    }

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    return (
        <div className="container-fluid nav-bar bg-transparent">
            <nav className="navbar navbar-expand-lg navbar-light py-0 px-4 navbar-bg-transparent">
                <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
                    <div className="icon p-2 me-2">
                        <img className="img-fluid navbar-img-container" src={logo} alt="Icon" />
                    </div>
                    <h2 className="m-0 text-primary">INSSAN</h2>
                    <h6 className='mtinpx-5'>- Northern India Chapter</h6>
                </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <Link to="./" className={`nav-item nav-link ${activeLink === 'Home' ? 'active' : ''}`} onClick={() => handleLinkClick('Home')}>Home</Link>
                        <Link to="./About" className={`nav-item nav-link ${activeLink === 'About' ? 'active' : ''}`} onClick={() => handleLinkClick('About')}>About</Link>
                        <Link to="./Structure" className={`nav-item nav-link ${activeLink === 'Structure' ? 'active' : ''}`} onClick={() => handleLinkClick('Structure')}>Structure</Link>
                        <Link to="./Contact" className={`nav-item nav-link ${activeLink === 'Contact' ? 'active' : ''}`} onClick={() => handleLinkClick('Contact')}>Contact Us</Link>
                        
                        <a href="events.html" className="nav-item nav-link">Managing Council</a>
                        
                    </div>
                    
                    <Link to="./Register" className="btn btn-primary px-3 d-none d-lg-flex">
                            Register
                        </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
