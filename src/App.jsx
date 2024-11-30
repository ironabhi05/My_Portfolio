//Components And Libraries import
import React from 'react';
//Page Import

import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import Aboutme from './Components/Aboutme.jsx';
import Whatido from './Components/Whatido.jsx';
import Resume from './Components/Resume.jsx';
import Portfolio from './Components/Portfolio.jsx';
import FAQ from './Components/FAQ.jsx';
import Footer from './Components/Footer.jsx';
import Hbtn from './Components/Hbtn.jsx';
import Contact from './Components/Contact.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Home />

      <Aboutme />
      <Whatido />
      <Resume />
      <Portfolio />
      <Hbtn />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
