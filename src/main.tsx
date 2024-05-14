import React from 'react'
import  { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Header from './components/header'
import ErrorPage from './pages/errorpage'
import Location from './pages/location'

const container = document.getElementById('root')
const root = createRoot(container!)
 
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path='/location/:id' element={<Location />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  )