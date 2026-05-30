import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Settings from './components/Settings'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>

      <Navbar className="sticky top-0" />

      <div className='flex flex-col items-center justify-center flex-1'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>

      <Footer />

    </div>
  )
}

export default App
