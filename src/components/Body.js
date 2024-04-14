
import Category from "./Category";
import About from "./About";
import Contact from "./Contact";
import Team from "./Team";
import Testimonial from "./Testimonial";

const Body = () => {
    return (

        <div className="container-xxl bg-white p-0">
            <Category/>

            <About/>
            <Contact/>
            <Team/>
            <Testimonial/>
        
        </div>

    );
};
export default Body;