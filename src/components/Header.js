import React from 'react';
import item1 from '../img/INSSAN-item1.JPG';
import item2 from '../img/INSSAN-item2.JPG';
import item3 from '../img/INSSAN-item3.JPG';
import item4 from '../img/INSSAN-item4.JPG';
import item5 from '../img/INSSAN-item5.JPG';
import item6 from '../img/INSSAN-item6.JPG';
import Slider from 'react-slick';

const Header = () => {
  // Slick settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <button className="slick-prev">Previous</button>, // Custom prev arrow
    nextArrow: <button className="slick-next">Next</button>, // Custom next arrow
  
  };

  return (
    
    <div className="container-xxl bg-white p-0">
    <div className="container-fluid header bg-white p-0">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4">Excellence through <span className="text-primary">Creativity & Innovation</span></h1>
          <p className="animated fadeIn mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet
            sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
          <a href="" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
        </div>
        <div className="col-md-6 animated fadeIn">
          <Slider {...settings}>
            <div>
              <img className="img-fluid" src={item1} alt=""/>
            </div>
            <div>
              <img className="img-fluid" src={item2} alt=""/>
            </div>
            <div>
              <img className="img-fluid" src={item3} alt=""/>
            </div>
            <div>
              <img className="img-fluid" src={item4} alt=""/>
            </div>
            <div>
              <img className="img-fluid" src={item5} alt=""/>
            </div>
            <div>
              <img className="img-fluid" src={item6} alt=""/>
            </div>
          </Slider>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
