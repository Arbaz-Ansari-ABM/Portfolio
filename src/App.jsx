import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';

const App = () => {
  return (
    <Router>
      <div className="bg-gradient-to-br from-white via-purple-50 to-blue-50">
        <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

        <div className="relative">
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <About />
                <Skills />
                <Experience />
                <Work />
                <Education />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/projects" element={
              <>
                <Navbar />
                <Projects />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
