import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const ContactMe = () => {
  return (
    <>
      <div className="container contact mt-3" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <a href='https://www.instagram.com/nkaithwas478/' target='_blank' className="items"><FaInstagram className='icons' /></a>
          <a href='https://www.linkedin.com/in/neha-kaithwas-6a3984227' target='_blank' className="items"><FaLinkedin className='icons' /></a>
          <a href='https://github.com/Kaithwasneha' target='_blank' className="items"><FaGithubSquare className='icons' /></a>
          <a href='mailto:kaithwasneha720@gmail.com' target='_blank' className="items"><SiGmail className='icons' /></a>
     
        </div>
      </div>
    </>
  )
}

export default ContactMe
