import React from 'react'
import "./Home.css"
import man from "..//../assets/man.png"

const Home = () => {
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
