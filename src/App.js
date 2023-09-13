import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/why/why';

import Services from './components/issues/issues';
import Approach from './components/approach/approach';


import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Services />
      <Approach/>
      <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </>
  )
}

export default App