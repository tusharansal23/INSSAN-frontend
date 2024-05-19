import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate} from "react-router-dom";
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
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";
import DashboardDummy from './components/DashboardDummy';
import DashboardChapter from "./components/DashboardChapter";
import DashboardEvent from "./components/DashboardEvent";
import DashboardNav from './components/DashboardNav';
import DashboardGallery from './components/DashboardGallery';
import ForgotPassword from "./components/ForgotPassword";
import ChangePassword from "./components/ChangePassword";
import HomepageMap from "./components/HomepageMap";
import About from "./components/About";
import Main from "./js/main";


// Import js-cookie
import Cookies from 'js-cookie';

// import AboutAnimation from "./js/AboutAnimation";


function App() {
  // Check if user is authenticated
  // const isAuthenticated = Cookies.get('accessToken') !== undefined;
   
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // alert(isAuthenticated);

  return (
    <BrowserRouter>
      <Main />
      {/* <AboutAnimation/> */}
      <div className="container-xxl bg-white p-0">
        <Navbar />
        <Routes>
          {/* Home route with nested routes */}
          <Route path="/" element={<Home />} />
          <Route path="Structure" element={<Structure />}/>
          <Route index element={<Body />} />

          <Route path="Register" element={<Register />}/>
          <Route path="Registration" element={<Registration />}/>
              {/* <Route path="DashboardDummy" element={<DashboardDummy />} /> */}

          {/* AdminLogin route */}
          
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/AdminLogin" element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />} />
          
          {/* <Route path="DashboardChapter" element={<DashboardChapter />} /> */}
          {/* <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="Dashboard" element={<Dashboard />}/>
          <Route path="DashboardChapter" element={<DashboardChapter />}/>
          <Route path="DashboardEvent" element={<DashboardEvent />}/> */}

          {/* Protected routes */}
          {isAuthenticated ? (
            <>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/DashboardDummy" element={<DashboardDummy />} />
              <Route path="DashboardNav" element={<DashboardNav />} />
              <Route path="/DashboardChapter" element={<DashboardChapter />} />
              <Route path="/DashboardGallery" element={<DashboardGallery />} />
              <Route path="/DashboardEvent" element={<DashboardEvent />} />
              <Route path="/ChangePassword" element={<ChangePassword />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/AdminLogin" />} />
          )}
          
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
