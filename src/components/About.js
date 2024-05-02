
import item5 from '../img/INSSAN-item5.JPG';
import '../css/About.css';
const About = () => {

    return (

        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    {/* <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div class="about-img position-relative overflow-hidden p-5 pe-0">
                            <img class="img-fluid w-100" src={item5}/>
                        </div>
                    </div> */}
                    <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="mb-4 about-animation">Discover <span>I</span><span>N</span><span>S</span><span>S</span><span>A</span><span>N</span></h1>

                        <p className="mb-4">Indian National Suggestion Schemes' Association (INSSAN) is a 
                                        non-profit making registered Association of Industrial & 
                                        Business Organizations, dedicated to the promotion of Employee 
                                        Involvement through Suggestions/ Ideas. Founded in 1987,
                                        
                                        INSSAN has a membership of over 400 organizations representing 
                                        all types of Indian Industries across the country. INSSAN
                                        achieves its mission by helping the member organizations to 
                                        capitalize their employee's creative potential by providing
                                        opportunities to meet & exchange information, ideas & to share 
                                        experiences & success stories through Workshops, Seminars,
                                        Conferences, Annual convention etc. Also INSSAN facilitates 
                                        in-house Consultancy/ Training Interventions towards initiating or
                                        enhancing employee involvement in Suggestion Scheme/ Employee 
                                        Involvement Forums.

                        </p>
                        {/* <!-- <p class="mb-4">Suggestion Schemes have undergone a transformation from the traditional ones 
                                        in terms of its purpose, philosophy, structure, participation and recognition.
                                        They are now focused on specific operational improvements, and recognise 
                                        tangible and intangible contributions from both individuals or teams.  They 
                                        coexist in harmony with other Employee Involvement programs.  Today’s Suggestion
                                        Schemes are viewed as platforms for channelizing employee initiatives 
                                        organizational objectives rather than a mere ‘Scheme’, a set of rules Suggestion
                                         Schemes have undergone a transformation from the traditional ones in terms of 
                                         its purpose, philosophy, structure, participation and recognition.They are now 
                                         focused on specific operational improvements, and recognise tangible and 
                                         intangible contributions from both individuals or teams.  They coexist in 
                                         harmony with other Employee Involvement programs.  Today’s Suggestion Schemes 
                                         are viewed as platforms for channelizing employee initiatives organizational 
                                         objectives rather than a mere ‘Scheme’, a set of rules and rewards.
                        
                        </p> --> */}
                        <h2>INSSAN achieves it’s mission by assisting member organizations by:</h2>
                        <p>
                            <i className="fa fa-check text-primary me-3"></i>
                                Collecting and disseminating information, statistics and program material 
                                about Suggestion Schemes.
                        </p>
                        <p>
                            <i className="fa fa-check text-primary me-3"></i>
                                Developing professional standards and programs for enhanced efficiency 
                                and effectiveness of Suggestion Scheme.
                                </p>
                        <p>
                            <i className="fa fa-check text-primary me-3"></i>
                                Organizing Training Programs, Workshops, Consultancy programs for the 
                                benefit of Suggestion Scheme managers, administrators, employees, etc.
                        </p>
                        <p>
                            <i className="fa fa-check text-primary me-3"></i>
                                Providing an opportunity for members to meet and exchange information, 
                                ideas and to share experiences through Workshops, Annual Convention, 
                                etc. Recognizing Excellence in Suggestion Scheme.
                        </p>
                        <p>
                            <i className="fa fa-check text-primary me-3"></i>
                                Encouraging formation of local INSSAN Chapters and Local Centers under 
                                Regional Chapters.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default About;