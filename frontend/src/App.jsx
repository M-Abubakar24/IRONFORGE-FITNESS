
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Trainers from "./pages/Trainers";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/programs" element={<Programs />} />
  <Route path="/trainers" element={<Trainers />} />
  <Route path="/membership" element={<Membership />} />
  <Route path="/contact" element={<Contact />} />
</Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
