// import "bootstrap/dist/css/bootstrap.min.css";
// import '../css/style.css';
import logo from '../img/INSSAN-logo.png';
import { Link } from 'react-router-dom';
const Navbar = () =>{
    return (
        
        
        <div className="container-fluid nav-bar bg-transparent">
            <nav className="navbar navbar-expand-lg navbar-light py-0 px-4 navbar-bg-transparent">
                <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
                    <div className="icon p-2 me-2">
                        <img className="img-fluid navbar-img-container" src={logo} alt="Icon" /*style="width: 30px; height: 30px;"*/ />
                    </div>
                    <h2 className="m-0 text-primary">INSSAN</h2>
                    <h6 className='mtinpx-5'>- Northern India Chapter</h6>
                </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <Link to="./" className="nav-item nav-link active">Home</Link>
                        <Link to="./About" className="nav-item nav-link">About</Link>
                        {/* <!-- <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                            <div class="dropdown-menu rounded-0 m-0">
                                <a href="property-list.html" class="dropdown-item">Property List</a>
                                <a href="property-type.html" class="dropdown-item">Property Type</a>
                                <a href="property-agent.html" class="dropdown-item">Property Agent</a>
                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu rounded-0 m-0">
                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                <a href="404.html" class="dropdown-item">404 Error</a>
                            </div>
                        </div> --> */}

                        
                        <Link to="./Structure" className="nav-item nav-link">Structure</Link>
                        <Link to="./Contact" className="nav-item nav-link">Contact Us</Link>
                        
                        
                        <a href="events.html" className="nav-item nav-link">Managing Council</a>
                        
                    </div>
                    {/* <a href="" className="btn btn-primary px-3 d-none d-lg-flex">Register</a> */}
                    <Link to="./Register" className="btn btn-primary px-3 d-none d-lg-flex"> 
                        Register 
                    </Link>
                </div>
            </nav>
        </div>
        
        
    );
};
export default Navbar;