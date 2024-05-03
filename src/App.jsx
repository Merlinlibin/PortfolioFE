import React from "react";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import { ToastContainer } from "react-toastify";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./components/Projects/Projects";

function App() {
  AOS.init({
    offset: 120, 
    delay: 0, 
    duration: 1000, 
    easing: "ease", 
    once: false, 
    mirror: false, 
    anchorPlacement: "top-bottom",
  });
  return (
    <Router>
      <div className="mx-1 lg:mx-2">
        <Header />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Skills" element={<Skills />}></Route>
            <Route path="/Work" element={<Work />}></Route>
            <Route path="/Projects" element={<Projects />}></Route>
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
  );
}

export default App;
