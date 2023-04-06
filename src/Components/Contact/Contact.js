import React, { useState } from 'react'
import "./contact.scss"
function Contact() {
  const [message,setMessage] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <>
      <div className="contact" id="contact">
        <div className="left">
          <img src="Assets/shake.svg" alt="" />
        </div>
        <div className="right">
          <h2>Contact.</h2>
            <form>
              <input type="text" name="email" id="email" placeholder='email' />
              <textarea name="message" id="message" cols="30" rows="10" placeholder='message'></textarea>
              <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
            {message &&
              <span>Thanks, I'll reply ASAP :)</span>
            }
          </div>
      </div>
    </>
  )
}

export default Contact
