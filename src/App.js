import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from './components/Body';
import Category from "./components/Category";
import About from "./components/About";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import AdminLogin from "./components/AdminLogin";
import Structure from "./components/Structure";
import Register from "./components/Register";
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
