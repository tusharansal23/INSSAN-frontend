import '../css/style.css';
import '../css/bootstrap.min.css';

const Testimonial = () =>{
    return (

        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center testimonial-container mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" /*style="max-width: 600px;"*/>
                    <h1 className="mb-3">News & Updates</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid testimonial-img-container flex-shrink-0 rounded" src="img/testimonial-1.jpg" /*style="width: 45px; height: 45px;"*/ />
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Client Name</h6>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid testimonial-img-container flex-shrink-0 rounded" src="img/testimonial-2.jpg" /*style="width: 45px; height: 45px;"*/ />
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Client Name</h6>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                            <div className="d-flex align-items-center">
                                <img className="testimonial-img-container img-fluid flex-shrink-0 rounded" src="img/testimonial-3.jpg" /*style="width: 45px; height: 45px;"*/ />
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Client Name</h6>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};
export default Testimonial;