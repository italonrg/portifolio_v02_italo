import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Bot from "./components/Bot";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
     <Navbar/>
     <Bot/>
     <Hero/>
     <About/>
     <Skills/>
     <Project/>
     <Hireme/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
