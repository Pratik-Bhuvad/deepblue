import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Ecosystem from './pages/Ecosystem';
import Forum from './pages/Forum';
import Products from './pages/Products';
import Donate from './pages/Donate';
import About from './pages/About';
import SignUp from './components/SignUp';
import Login from './components/LogIn';

function App() {
  return (
    <Router>
      <>
        <header>
          <Link to='/'>
            <h4 className='sm:uppercase flex items-center font-extrabold text-sm leading-3 sm:text-lg sm:leading-5'>
              <span>TE<br />AM</span> Techno
            </h4>
          </Link>
          <Navbar />
        </header>
        <main className='box-border h-auto'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ecosystem" element={<Ecosystem />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/products" element={<Products />} />
              <Route path="/donate" element={<Donate />} />
              <Route path='/aboutus' element={<About />} />
              <Route path='/signin' element={<SignUp />} />
              <Route path='/login' element={<Login />} />
            </Routes>
        </main>
      </>
    </Router>
  )
}

export default App
