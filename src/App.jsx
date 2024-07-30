import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import Ecosystem from './pages/Ecosystem';

function App() {
  return (
    <Router>
      <>
        <header>
          <Link to='/'>
            <h4 className='sm:uppercase flex items-center font-extrabold text-sm leading-3 md:text-lg md:leading-5'>
              <span>TE<br />AM</span> Techno
            </h4>
          </Link>
          <Navbar />
        </header>
        <main className='box-border h-auto'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ecosystem" element={<Ecosystem />} />
            </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    </Router>
  )
}

export default App
