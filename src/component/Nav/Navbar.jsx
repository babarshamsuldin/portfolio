import React, { useRef } from 'react'
import "./Navbar.css"
import {Link} from "react-scroll"

const Navbar = () => {
    let menu = useRef()
    let mobile = useRef()
    
  return (
    <>
      <nav>
        <h1>PORTFOLIO</h1>

        <ul className='desktopmenu'>
        <Link to='home' smooth={true} duration={500} activeClass='active' spy={true} ><li>Home</li></Link>
        <Link to='about' spy={true} smooth={true} duration={500} activeClass='active'><li>About</li></Link>
        <Link to='project' spy={true} smooth={true} duration={500} activeClass='active'><li>Project</li></Link>
        <Link to='contact' spy={true} smooth={true} duration={500} activeClass='active'><li>Contact</li></Link>
        </ul>

        <div className="hamburger" ref={menu} onClick={()=>{
            mobile.current.classList.toggle("activemobile")
            menu.current.classList.toggle("activeham")
        }}>
            <div className="ham"></div>
            <div className="ham"></div>
            <div className="ham"></div>
        </div>

        <ul className='mobilemenu' ref={mobile}>
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
