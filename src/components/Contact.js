import item1 from '../img/INSSAN-item1.JPG';
import HomepageMap from './HomepageMap';
import '../css/Contact.css';


const Contact = () => {

    return (
        <div className="container-xxl py-5">
            <div className="container mt-20">
                    <div className="contact-info">
                        <span className="contact_details">Contact Information</span>
                            <p>For any queries or assistance, feel free to reach out to us:</p>
                            <ul>
                                <li>Phone: 0124-4360428</li>
                                <li>Email: secretary.inssan.nic@gmail.com</li>
                            </ul>
                    </div>
                    <div className="summary">
                        <span className="contact_details">24/7 Availability</span>
                        <p>We are available 24 hours a day, 7 days a week to assist you with your inquiries. Our dedicated team strives to reply to your queries within 24 hours, ensuring prompt and reliable assistance.</p>
                    </div>
                </div>

                <div className="container contact_section layout_padding">
                    <div className="contact_bg_box">
                        <img src="images/contact-bg.jpg" alt=""/>
                    </div>
                    <div className="container">
                        <div className="heading_container heading_center">
                            <h2 className='ruby-text'>
                                Inquiry
                            </h2>
                        </div>
                        <div className="row">
                                <div className="form_container col-md-9 mx-auto">
                                    <form>
                                        <div className="form-row">
                                            <div className="form-column">
                                                <input type="text" placeholder="First Name" />
                                            </div>
                                            <div className="form-column">
                                                <input type="text" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-column">
                                                <input type="email" placeholder="Email" />
                                            </div>
                                            <div className="form-column">
                                                <input type="text" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="form-column">
                                            <textarea
                                                type="text"
                                                id="messageBox"
                                                rows="7"
                                                placeholder="Message"
                                                required
                                            />
                                        </div>
                                            <a className="btn btn-primary contact-form-button" href="mailto:secretary.inssan.nic@gmail.com, tusharansal23@gmail.com">Submit</a>
                                        
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            <div className="container">
                <div className="bg-light rounded p-3">
                    <HomepageMap/>
                </div>

            </div>
        </div>
    );
};
export default Contact;