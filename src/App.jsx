import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <div className='container'>
        <header>
          <h4 className='sm:uppercase flex items-center font-extrabold text-sm leading-3 md:text-xl md:leading-5'>
            <span>TE<br />AM</span> Techno
          </h4>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  )
}

export default App
