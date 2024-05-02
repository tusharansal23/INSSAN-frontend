import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from './components/Body';
import Category from "./components/Category";
import HomepageAbout from "./components/HomepageAbout";
import Contact from "./components/Contact";
import HomepageContact from "./components/HomepageContact";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import AdminLogin from "./components/AdminLogin";
import Structure from "./components/Structure";
import Register from "./components/Register";

import HomepageMap from "./components/HomepageMap";
import About from "./components/About";
import Main from "./js/main";

function App() {
  return (
    <BrowserRouter>
      <Main />
      <div className="container-xxl bg-white p-0">
        <Navbar />
        <Routes>
          {/* Home route with nested routes */}
          <Route path="/" element={<Home />} />
          <Route path="Structure" element={<Structure />}/>
          <Route index element={<Body />} />

          <Route path="Register" element={<Register />}/>

          {/* AdminLogin route */}
          <Route path="/AdminLogin" element={<AdminLogin />} />
          
          <Route path="/About" element={<About />} />
          
          <Route path="/HomepageContact" element={<HomepageContact />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

// Home component with nested routes
function Home() {
  return (
    <>
      <Header />
      <Outlet/> 
    </>
  );
}



export default App;
