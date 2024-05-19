
import logo from '../img/INSSAN-logo.png';
import React, { useState, useRef, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logout from './Logout'; // Import the logout function

const DashboardNav = ()=> {
    
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null); // State to store user data
  const [username, setUsername] = useState(''); // State to store username    
  const [avatarUrl, setAvatarUrl] = useState(''); // State to store avatarUrl 
  
  
  const [showMessageDropdown, setShowMessageDropdown] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [showHeaderProfileDropdown, setShowHeaderProfileDropdown] = useState(false);
    const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);

    const messageDropdownRef = useRef(null);
    const profileDropdownRef = useRef(null);
    const headerProfileDropdownRef = useRef(null);
    const notificationDropdownRef = useRef(null);
    const [showProfileAndMenu, setShowProfileAndMenu] = useState(true);

    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    const isActive = (path) => {
        return activePath === path;
    };

    const toggleSidebar = () => {
        setShowProfileAndMenu(!showProfileAndMenu);
    };

    const toggleMessageDropdown = () => {
        setShowMessageDropdown(!showMessageDropdown);
    };

    const toggleProfileDropdown = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };
    const toggleHeaderProfileDropdown = () => {
        setShowHeaderProfileDropdown(!showHeaderProfileDropdown);
    };
    const toggleNotificationDropdown = () => {
        setShowNotificationDropdown(!showNotificationDropdown);
        setShowMessageDropdown(false);
        setShowProfileDropdown(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (messageDropdownRef.current && !messageDropdownRef.current.contains(event.target)) {
                setShowMessageDropdown(false);
            }
            if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
                setShowProfileDropdown(false);
            }
            if (headerProfileDropdownRef.current && !headerProfileDropdownRef.current.contains(event.target)) {
                setShowHeaderProfileDropdown(false);
            }
            if (notificationDropdownRef.current && !notificationDropdownRef.current.contains(event.target)) {
                setShowNotificationDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


  const handleLogout = async () => {
    setLoading(true); // Set loading to true when logout is initiated
    const loggedOut = await logout();
    if (loggedOut) {
        // Redirect to login page after successful logout
        window.location.href = '/AdminLogin'; // Change '/login' to your login page URL
    } else {
        setLoading(false); // Reset loading if logout failed
    }
};
// Function to handle Chanfe Password
const handleChangePassword = async () => {
    setLoading(true); // Set loading to true when logout is initiated
    
        window.location.href = '/ChangePassword'; // Change '/login' to your login page URL
    
};


  useEffect(() => {
    const fetchUserData = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:4000/api/v1/users/', {
              method: 'GET',
              credentials: 'include' // Include credentials such as cookies
          });
            if (response.ok) {
                const data = await response.json();
                setUserData(data);
                // Extract username from user data
                if (data && data.data && data.data.username && data.data.avatar) {
                  const uname = data.data.username;
                  const capitalizedUname = uname.charAt(0).toUpperCase() + uname.slice(1);
                  setUsername(capitalizedUname); // Capitalize the first letter of the username
              
                  setAvatarUrl(data.data.avatar);
                    // setUsername(data.data.username);
                }
            } else {
                throw new Error('Failed to fetch user data');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        } finally {
            setLoading(false);
        }
    };

    fetchUserData();
}, []); // Empty dependency array ensures this effect runs only once, when the component mounts


    return (

        <>
        <nav className={`${showProfileAndMenu ? 'sidebar sidebar-offcanvas' : 'sidebar sidebar-only'}`} id="sidebar">
                <div className={`sidebar-brand-wrapper d-none d-lg-flex align-items-center
                                 justify-content-center fixed-top 
                                 ${showProfileAndMenu ? '' : 'sidebar-only'}`}>
                    <Link className="sidebar-brand brand-logo" to='/DashboardDummy'>
                        <img className = {`${showProfileAndMenu ? '' : 'img-xs border-radius-100'}`} src={logo} alt="logo"/>
                        </Link>
                    <Link className="sidebar-brand brand-logo-mini" to='/DashboardDummy'><img src={logo} alt="logo"/></Link>
                </div>
                <ul className="nav">
                    <li className="dashboard-nav-item profile">
                        <div className="profile-desc">
                            <div className="profile-pic">
                                <div className="count-indicator">
                                    <img className="img-xs rounded-circle w-inpx-100" src={avatarUrl} alt=""/>
                                    <span className="count bg-success"></span>
                                </div>
                                {showProfileAndMenu && (
                                    <div className="profile-name">
                                        {username && (
                                            <h5 className="mb-0 font-weight-normal color-white">{username}</h5>
                                        )}
                                            {/* <h5 className="mb-0 font-weight-normal">Henry Klein</h5> */}
                                            {/* <span>Gold Member</span> */}
                                        </div>
                                )}
                            </div>
                            {showProfileAndMenu && (
                            <div ref={profileDropdownRef}>
                                <a href="#" id="profile-dropdown" onClick={toggleProfileDropdown}>
                                    <i className="fa fa-ellipsis-v sidebar-menu-color"></i>
                                </a>
                                <div className={`dashboard-dropdown-menu dashboard-dropdown-menu-right sidebar-dropdown preview-list 
                                            ${showProfileDropdown  ? 'show' : ''}`} 
                                            aria-labelledby={showProfileDropdown}>
                                    <a href="#" className="dashboard-dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="dashboard-preview-icon bg-dark rounded-circle">
                                                <i className="fa fa-cog bg-blue"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1 text-small">Account settings</p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dashboard-dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="dashboard-preview-icon bg-dark rounded-circle">
                                                <i className="fa fa-key text-info"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dashboard-dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="dashboard-preview-icon bg-dark rounded-circle">
                                                <i className="fa fa-calendar-check text-success"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1 text-small">To-do list</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            )}
                        </div>
                    </li>
                    {showProfileAndMenu && (
                        <li className="dashboard-nav-item nav-category">
                            <span className="dashboard-nav-link">General</span>
                        </li>
                    )}
                    <li className={`dashboard-nav-item menu-items ${isActive('/DashboardDummy') ? 'active' : ''}`}>
                        <Link className={`dashboard-nav-link ${showProfileAndMenu  ? '' : 'sidebar-only'}`} to='/DashboardDummy'>
                            <span className={`menu-icon ${showProfileAndMenu  ? '' : 'sidebar-only'}`}>
                                <i className={`fa fa-tachometer-alt ${showProfileAndMenu  ? '' : 'img-xs display-flex-center'}`}></i>
                            </span>
                            {showProfileAndMenu && (
                                <Link to='/DashboardDummy' className='sidebar-menu-color'>
                                    <span className="menu-title">Dashboard</span>
                                </Link>
                            )}
                        </Link>
                    </li>
                    <li className={`dashboard-nav-item menu-items ${isActive('/DashboardChapter') ? 'active' : ''}`}>
                        <Link className={`dashboard-nav-link ${showProfileAndMenu  ? '' : 'sidebar-only'}`} data-toggle="collapse" to="/DashboardChapter" aria-expanded="false" aria-controls="ui-basic">
                            <span className={`menu-icon ${showProfileAndMenu  ? '' : 'sidebar-only'}`}>
                                <i className={`fa fa-book ${showProfileAndMenu  ? '' : 'img-xs display-flex-center'}`}></i>
                            </span>
                            {showProfileAndMenu && (
                                <Link to='/DashboardChapter' className='sidebar-menu-color'>
                                    <span className="menu-title">Chapters</span>
                                </Link>
                                // <i className="menu-arrow"></i>
                            )}
                        </Link>
                    </li>
                    <li className={`dashboard-nav-item menu-items ${isActive('/DashboardEvent') ? 'active' : ''}`}>
                        <Link className={`dashboard-nav-link ${showProfileAndMenu  ? '' : 'sidebar-only'}`} to = '/DashboardEvent'>
                            <span className={`menu-icon ${showProfileAndMenu  ? '' : 'sidebar-only'}`}>
                                <i className={`fa fa-calendar-alt ${showProfileAndMenu  ? '' : 'img-xs display-flex-center'}`}></i>
                            </span>
                            {showProfileAndMenu && (
                                <Link to = '/DashboardEvent' className='sidebar-menu-color'>
                                    <span className="menu-title">Events</span>
                                </Link>
                            )}
                        </Link>
                    </li>
                    <li className={`dashboard-nav-item menu-items ${isActive('/DashboardGallery') ? 'active' : ''}`}>
                        <Link className={`dashboard-nav-link ${showProfileAndMenu  ? '' : 'sidebar-only'}`} to = '/DashboardGallery'>
                            <span className={`menu-icon ${showProfileAndMenu  ? '' : 'sidebar-only'}`}>
                                <i className={`fa fa-images ${showProfileAndMenu  ? '' : 'img-xs display-flex-center'}`}></i>
                            </span>
                            {showProfileAndMenu && (
                                <Link to = '/DashboardGallery' className='sidebar-menu-color'>
                                    <span className="menu-title">Gallery</span>
                                </Link>
                            )}
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav className={`dashboard-navbar p-0 fixed-top d-flex flex-row
                         ${showProfileAndMenu  ? '' : 'left-inpx-70'}`}>
            <div className="dashboard-navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
                <a className="dashboard-navbar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo"/></a>
            </div>
            <div className="dashboard-navbar-menu-wrapper flex-grow d-flex align-items-stretch">
            <button className="dashboard-navbar-toggler dashboard-navbar-toggler align-self-center" 
                type="button" data-toggle="minimize"
                onClick={toggleSidebar}>
                <span className="fa fa-bars"></span>
            </button>
            <ul className="dashboard-navbar-nav w-30">
                <li className="dashboard-nav-item w-100">
                    <form className="dashboard-nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                        <input type="text" className="dashboard-form-control" placeholder="Search products"/>
                    </form>
                </li>
            </ul>
            <ul className="dashboard-navbar-nav dashboard-navbar-nav-right">
                <li className="dashboard-nav-item dropdown border-left">
                <div ref={messageDropdownRef}>
                    <a className="dashboard-nav-link count-indicator dropdown-toggle" 
                        id="messageDropdown" 
                        href="#" 
                        onClick={toggleMessageDropdown}
                        aria-expanded={showMessageDropdown}>

                        <i className="fa fa-envelope me-3"></i>
                        <span className="count bg-success"></span>
                    </a>
                    <div className={`dashboard-dropdown-menu dashboard-dropdown-menu-right dashboard-navbar-dropdown 
                            ${showMessageDropdown ? 'show' : ''}`}
                            aria-labelledby={showMessageDropdown}>
                        <h6 className="p-3 mb-0 color-white">Messages</h6>
                        <div className="dropdown-divider"></div>
                        <a className="dashboard-dropdown-item preview-item">
                            
                            <div className="preview-item-content">
                                <p className="preview-subject ellipsis mb-1">Mark send you a message</p>
                                <p className="text-muted mb-0"> 1 Minutes ago </p>
                            </div>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dashboard-dropdown-item preview-item">
                            
                            <div className="preview-item-content">
                                <p className="preview-subject ellipsis mb-1">Cregh send you a message</p>
                                <p className="text-muted mb-0"> 15 Minutes ago </p>
                            </div>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dashboard-dropdown-item preview-item">
                            
                            <div className="preview-item-content">
                                <p className="preview-subject ellipsis mb-1">Profile picture updated</p>
                                <p className="text-muted mb-0"> 18 Minutes ago </p>
                            </div>
                        </a>
                        <div className="dropdown-divider"></div>
                        <p className="p-3 mb-0 text-center">4 new messages</p>
                    </div>
                    </div>
                </li>
                <li className="dashboard-nav-item dropdown border-left">
                <div ref={notificationDropdownRef}>
                    <a className="dashboard-nav-link count-indicator dropdown-toggle" 
                        id="notificationDropdown" 
                        href="#" 
                        onClick={toggleNotificationDropdown}
                        aria-expanded={showNotificationDropdown}>
                        <i className="fa fa-bell p-inpx-20"></i>
                        <span className="count bg-danger"></span>
                    </a>
                    <div className={`dashboard-dropdown-menu dashboard-dropdown-menu-right dashboard-navbar-dropdown 
                        ${showNotificationDropdown ? 'show' : ''}`}
                        aria-labelledby="notificationDropdown">
                        <h6 className="p-3 mb-0 color-white">Notifications</h6>
                        <div className="dropdown-divider"></div>
                        <a className="dashboard-dropdown-item preview-item">
                            <div className="preview-thumbnail">
                                <div className="dashboard-preview-icon bg-dark rounded-circle">
                                    <i className="fa fa-calendar-check text-success"></i>
                                </div>
                            </div>
                            <div className="preview-item-content">
                                <p className="preview-subject mb-1">Event today</p>
                                <p className="text-muted ellipsis mb-0"> Just a reminder that you have an event today </p>
                            </div>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dashboard-dropdown-item preview-item">
                            <div className="preview-thumbnail">
                                <div className="dashboard-preview-icon bg-dark rounded-circle">
                                    <i className="fa fa-cog text-danger"></i>
                                </div>
                            </div>
                            <div className="preview-item-content">
                                <p className="preview-subject mb-1">Settings</p>
                                <p className="text-muted ellipsis mb-0"> Update dashboard </p>
                            </div>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dashboard-dropdown-item preview-item">
                            <div className="preview-thumbnail">
                                <div className="dashboard-preview-icon bg-dark rounded-circle">
                                    <i className="fa fa-link text-warning"></i>
                                </div>
                            </div>
                            <div className="preview-item-content">
                                <p className="preview-subject mb-1">Launch Admin</p>
                                <p className="text-muted ellipsis mb-0"> New admin wow! </p>
                            </div>
                        </a>
                        <div className="dropdown-divider"></div>
                        <p className="p-3 mb-0 text-center">See all notifications</p>
                    </div>
                    </div>
                </li>
                <li className="dashboard-nav-item dropdown">
                    <div ref={headerProfileDropdownRef}>
                    <a className="dashboard-nav-link" 
                        id="profileDropdown" 
                        href="#" 
                        onClick={toggleHeaderProfileDropdown}
                        aria-expanded={showHeaderProfileDropdown}>
                        <div className="dashboard-navbar-profile">
                            <img className="img-xs rounded-circle" src={avatarUrl} alt=""/>
                            {username && (
                            <p className="mb-0 d-none d-sm-block dashboard-navbar-profile-name">{username}</p>
                            )}
                            {/* <p className="mb-0 d-none d-sm-block dashboard-navbar-profile-name">Henry Klein</p> */}
                            <i className="fas fa-caret-down d-none d-sm-block icon-font-size"></i>
                        </div>
                    </a>
                    <div className={`dashboard-dropdown-menu dashboard-dropdown-menu-right dashboard-navbar-dropdown top-inpx-60 
                                    ${showHeaderProfileDropdown ? 'show' : ''}    `}
                        aria-labelledby="profileDropdown">
                        <h6 className="p-3 mb-0 color-white">Profile</h6>
                        <div className="dropdown-divider"></div>
                        <a className="dashboard-dropdown-item preview-item">
                            <div className="preview-thumbnail">
                                <div className="dashboard-preview-icon bg-dark rounded-circle">
                                    <i className="fa fa-cog text-success"></i>
                                </div>
                            </div>
                            <div className="preview-item-content">
                                <p className="preview-subject mb-1">Settings</p>
                            </div>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dashboard-dropdown-item preview-item" onClick={handleLogout}>
                            <div className="preview-thumbnail">
                                <div className="dashboard-preview-icon bg-dark rounded-circle">
                                    <i className="fas fa-sign-out-alt text-danger"></i>
                                </div>
                            </div>
                            <div className="preview-item-content">
                                <p className="preview-subject mb-1">Log out</p>
                            </div>
                        </a>
                    </div>
                    </div>
                </li>
            </ul>
            <button className="dashboard-navbar-toggler dashboard-navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                <span className="mdi mdi-format-line-spacing"></span>
            </button>
        </div>
    </nav>
    </>
    );
};
export default DashboardNav