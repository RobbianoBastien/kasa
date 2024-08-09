
import './App.scss'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './Page/About.jsx'
import Header from './Component/Header.jsx'
import Home from './Page/Home.jsx'
import NotFound from './Page/NotFound.jsx'
import Footer from './Component/Footer.jsx'


function App() {
  return(
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer/>
        </Router>
)
}

export default App

