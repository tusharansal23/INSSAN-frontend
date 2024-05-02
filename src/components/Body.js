
import Header from "./Header";
import Category from "./Category";
import HomepageAbout from "./HomepageAbout";
import Contact from "./Contact";
import Team from "./Team";
import Testimonial from "./Testimonial";
import HomepageMap from "./HomepageMap";
import '../css/bootstrap.min.css';
import '../css/style.css';

const Body = () => {
    return (

        <div className='body'>
    
            <Header />
            <Category/>

            <HomepageAbout/>
            <Contact/>
            <HomepageMap/>
            <Team/>
            <Testimonial/>
        
        
        </div>

    );
};
export default Body;