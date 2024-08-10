import React from 'react';
import './App.css';
import Header from './Header';
import Education from './Education';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Education/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
