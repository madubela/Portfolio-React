import React from 'react';
import Navbar from './components/Home/Navigation/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/My Work/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'


function App() {
  return (
  <div>

    <Navbar />
    <Home />
    <About />
    <Skills />
    <Portfolio/>
    <Contact />
    <Footer />
  </div>
 
  );
}

export default App;
