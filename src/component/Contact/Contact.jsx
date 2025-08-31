import React from 'react'
import "./Contact.css"
import contact from "../../assets/contact.png"

const Contact = () => {
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
