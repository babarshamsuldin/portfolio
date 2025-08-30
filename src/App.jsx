import React from 'react'
import Navbar from './component/Nav/Navbar'
import Home from './component/Home/Home'
import About from './component/About/About'
import Project from './component/Project/Project'
import Contact from './component/Contact/Contact'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project/>
      <Contact/>
    </>
  )
}

export default App
