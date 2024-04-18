
import item5 from '../img/INSSAN-item5.JPG';

const About = () => {

    return (

        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div class="about-img position-relative overflow-hidden p-5 pe-0">
                            <img class="img-fluid w-100" src={item5}/>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 class="mb-4">Who we are?</h1>
                        <p class="mb-4">Suggestion Schemes as a process or system for employee contribution through 
                                        suggestion/ ideas has firmly established place in many successful and well 
                                        known organizations in India and abroad.  An effective Suggestion Scheme 
                                        can serve as a powerful tool in productive movement and also medium for 
                                        fostering a participative culture in organization. In line with the changing 
                                        trends in Employee Involvement process and system.

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
                        <p><i class="fa fa-check text-primary me-3"></i>professional support network dedicated to assisting 
                                                                        organizations to create, maintain and reinforce 
                                                                        their Employees Suggestion Scheme.</p>
                        <p><i class="fa fa-check text-primary me-3"></i>managed by a team of Suggestion Scheme Practitioners 
                                                                        with hands on experience and is the only Indian 
                                                                        Professional Body in this field.</p>
                        <p><i class="fa fa-check text-primary me-3"></i>works with organisations in all areas of Indian 
                                                                        Industry both in the private and public arena in 
                                                                        manufacturing, financial and services sector, and it 
                                                                        maintains close links with sister associations overseas.
                                                                    </p>
                        <a class="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default About;