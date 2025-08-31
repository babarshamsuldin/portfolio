import React from 'react'
import "./Home.css"
import man from "..//../assets/man.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {
  useGSAP(()=>{
    let tl = gsap.timeline()
    tl.from(".line1",{
      y:80,
      duration: 1,
      opacity:0
    })
    tl.from(".line2",{
      y:80,
      duration: 1,
      opacity:0
    })
    tl.from(".line3",{
      y:80,
      duration: 1,
      opacity:0
    })
    gsap.from(".righthome img",{
      x:200,
      duration: 1,
      opacity:0
    })
  })

  return (
    <div id='home'>
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">Babar shamsudin</div>
          <div className="line3">Data sacintist</div>
          <button>Hire Me</button>
        </div>
      </div>

      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  )
}

export default Home
