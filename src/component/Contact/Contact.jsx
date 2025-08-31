import React from 'react'
import "./Contact.css"
import contact from "../../assets/contact.png"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  useGSAP(()=>{
    gsap.from(".leftcontact img",{
      x: -100,
      duration: 1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger: ".leftcontact img",
        scroll: "body",
        scrub:2,
        start:"top 80%",
        end:"end 30%"
      }
    })
    gsap.from("form",{
      x: 100,
      duration: 1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger: "form",
        scroll: "body",
        scrub:2,
        start:"top 80%",
        end:"end 30%"
      }
    })
  })
  return (
    <div id='contact'>
      <div className="leftcontact">
        <img src={contact} alt="" />
      </div>
      <div className="rightcontact">
        <form action="https://formspree.io/f/xrbakgzp" method='POST'>
          <input type="text" name='Username' placeholder='Name' />
          <input type="text" name='Email' placeholder='Email' />
          <textarea name="Message" id="textarea" placeholder='Message Me'></textarea>
          <input type="submit" name="Submit" id="btn" value={"Submit"} />
        </form>
      </div>
    </div>
  )
}

export default Contact
