// import "bootstrap/dist/css/bootstrap.min.css";
// import '../css/style.css';
import { useEffect } from 'react';

const Category = () => {

    
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center category-container mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" /*style="max-width: 600px;"*/>
                    <h1 className="mb-3">Events</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="img/icon-apartment.png" alt="Icon"/>
                                </div>
                                <h6>Event 1</h6>
                                <span>Description</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="img/icon-villa.png" alt="Icon"/>
                                </div>
                                <h6>Event 2</h6>
                                <span>Description</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="img/icon-house.png" alt="Icon"/>
                                </div>
                                <h6>Event 3</h6>
                                <span>Description</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="img/icon-housing.png" alt="Icon"/>
                                </div>
                                <h6>Event 4</h6>
                                <span>Description</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="img/icon-building.png" alt="Icon"/>
                                </div>
                                <h6>Event 5</h6>
                                <span>Description</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="img/icon-neighborhood.png" alt="Icon"/>
                                </div>
                                <h6>Event 6</h6>
                                <span>Description</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="img/icon-condominium.png" alt="Icon"/>
                                </div>
                                <h6>Event 7</h6>
                                <span>Description</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src="img/icon-luxury.png" alt="Icon"/>
                                </div>
                                <h6>Event 8</h6>
                                <span>Description</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Category;