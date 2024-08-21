import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer  from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Header />
      <About/>
      <Features/>
      <Contact />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
