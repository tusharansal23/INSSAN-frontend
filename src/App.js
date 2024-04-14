import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Navbar from "./components/Navbar";
import Body from './components/Body';
import Category from "./components/Category";
import About from "./components/About";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <BrowserRouter>
      {/* Render the header component outside the Routes component */}
      <Navbar />
      <Header />
      
      
      <Routes>
        <Route path="/" element={<Body />}>
          {/* Render other components as children of Route element prop */}
          <Route index element={<Body />} />
          <Route path="Category" element={<Category />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Team" element={<Team />} />
          <Route path="Testimonial" element={<Testimonial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
