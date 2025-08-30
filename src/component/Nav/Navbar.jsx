import React from 'react'
import "./Navbar.css"
import {Link} from "react-scroll"

const Navbar = () => {
  return (
    <>
      <nav>
        <h1>PORTFOLIO</h1>

        <ul>
        <Link to='home' smooth={true} duration={500} activeClass='active' spy={true} ><li>Home</li></Link>
        <Link to='about' spy={true} smooth={true} duration={500} activeClass='active'><li>About</li></Link>
        <Link to='project' spy={true} smooth={true} duration={500} activeClass='active'><li>Project</li></Link>
        <Link to='contact' spy={true} smooth={true} duration={500} activeClass='active'><li>Contact</li></Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
