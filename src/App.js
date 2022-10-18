
import './App.scss';

import Header from './Sections/Header';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';
import {  useState } from 'react';


const App = () => {
  const [LogoState, setLogoState] = useState('preloader')
  const [currentSection, setcurrentSection] = useState('home');


    const setup = () => {
        const options ={
        rootMargin: '0px 0px 200px 0px',
        threshold: 0.4
      }

      const observer = new IntersectionObserver((entries,observer) => {
       entries.forEach(entry => {
        if (entry.isIntersecting) {
          setcurrentSection(entry.target.id)
        } 
      })
    }, options)
    
      const sections = document.getElementsByTagName('section')
      Object.values(sections).map(section => observer.observe(section));
      setLogoState('logo');
    }

    window.addEventListener('load', setup
    );


  return (
   <>
    <Header LogoState={LogoState} current={currentSection} />
    <Hero />
    <About />
    <Projects />
    <Contact />
   </>
  );
}

export default App;
