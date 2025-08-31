import React from 'react'
import "./Project.css"
import Card from "../Card/Card"
import vs from "../../assets/va.png"
import fw from "../../assets/fw.png"
import ise from "../../assets/ise.png"
import va from "../../assets/va.png"
import tti from "../../assets/tti.png"

const Project = () => {
  return (
    <div id='project'>
      <h1 id='para'>2 Year Experince In Projects</h1>
      <div className="slider">
        <Card title={"Virtcul Assistant"} image={vs}/>
        <Card title={"AI Power Fitness Website"} image={fw}/>
        <Card title={"AI Chatbot"} image={ise}/>
        <Card title={"Virtcul Assistant"} image={va}/>
        <Card title={"Virtcul Assistant"} image={tti}/>
      </div>
    </div>
  )
}

export default Project
