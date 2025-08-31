import React from 'react';
import "./About.css"
import Card from '../Card/Card';
import mern from "../../assets/mern.png"
import java from "../../assets/java.png"
import dsa from "../../assets/dsa.png"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const About = () => {

  useGSAP(()=>{
    gsap.from(".circle",{
      x: -100,
      duration: 1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger: ".circle",
        scroll: "body",
        scrub:2,
        markers: true,
        start:"top 60%",
        end:"end 30%"
      }
    })
    gsap.from(".line",{
      x: -100,
      duration: 1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger: ".circle",
        scroll: "body",
        scrub:2,
        markers: true,
        start:"top 60%",
        end:"end 30%"
      }
    })
    gsap.from(".aboutdetails h1",{
      x: -100,
      duration: 1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger: ".circle",
        scroll: "body",
        scrub:2,
        markers: true,
        start:"top 60%",
        end:"end 30%"
      }
    })
    gsap.from(".aboutdetails li",{
      y: 100,
      duration: 1,
      opacity:0,
      scrollTrigger:{
        trigger: ".circle",
        scroll: "body",
        scrub:2,
        markers: true,
        start:"top 60%",
        end:"end 30%"
      }
    })
    gsap.from(".rightabout",{
      x: 100,
      duration: 1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger: ".rightabout",
        scroll: "body",
        scrub:2,
        markers: true,
        start:"top 60%",
        end:"end 30%"
      }
    })
  })
  return (
    <div id='about'>
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>PERSONAL</h1>
            <ul>
              <li><span>NAME</span> : babar shamsudin</li>
              <li><span>AGE</span> : 19 year old</li>
              <li><span>GENDER</span> : Mail</li>
              <li><span>LANGUAGE</span> : English, Urdu, Punjabi</li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li><span>DEGREE</span> : bachelor degree computer science</li>
              <li><span>BRANCH</span> : The Education University Lahore</li>
              <li><span>CGPA</span> : 8.3</li>
            </ul>
          </div>
          <div className="skills">
            <h1>SKILLS</h1>
            <ul>
              <li>Artificial Intelligence</li>
              <li>Machine Learning</li>
              <li>Data Analyst</li>
              <li>Deep Learning</li>
              <li>Neural Network</li>
              <li>Mern-Stack / Next.js</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rightabout">
        <Card title={"Machine Learning"} image={mern}/>
        <Card title={"Deep Learning"} image={java}/>
        <Card title={"Artifical intaligents"} image={dsa}/>
      </div>
    </div>
  );
}

export default About;
