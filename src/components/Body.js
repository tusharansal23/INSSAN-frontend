
import Header from "./Header";
import Category from "./Category";
import HomepageAbout from "./HomepageAbout";
import HomepageContact from "./HomepageContact";
import Team from "./Team";
import Testimonial from "./Testimonial";
import '../css/bootstrap.min.css';
import '../css/style.css';

const Body = () => {
    return (

        <div className='body'>
    
            <Header />
            <Category/>

            <HomepageAbout/>
            <HomepageContact/>
            <Team/>
            <Testimonial/>
        
        
        </div>

    );
};
export default Body;