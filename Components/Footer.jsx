import React from 'react'
import './Footer.scss'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div className="header">
        <div className="top">
          <div className="line"></div>
          <h1>Subscribe to newsletter</h1>
        </div>
        <div className="form">
          <input type="text" />
          <input type="submit" value="Subscribe" />
        </div>
      </div>

      <div className="section">
        <ul>
          <li>
            <div className="top">
              <img src="https://preview.colorlib.com/theme/course/images/logo.png" />
              <h1>course</h1>
            </div>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum, tempor lacus.</p>
          </li>
          <li>
            <h1>Menu</h1>
            <ul>
              <li>
                Home
              </li>
              <li>
                About Us
              </li>
              <li>
                Courses
              </li>
              <li>
                News
              </li>
            </ul>
          </li>

          <li>
            <h1>Usefull Links</h1>
            <ul>
              <li>
                Testimonials
              </li>
              <li>
                FAQ
              </li>
              <li>
                Community
              </li>
              <li>
                Campus Pictures
              </li>
              <li>
                Tuitions
              </li>
            </ul>
          </li>
          <li>
            <h1>Contact</h1>
            <ul >
              <li>
                <img style={{width: '30px', height: '30px', color: '#fbb606'}} src="https://preview.colorlib.com/theme/course/images/placeholder.svg"/><p>Blvd Libertad, 34 m05200 Arévalo</p>
              </li>
              <li>
                <img style={{width: '30px', height: '30px', color: '#fbb606'}} src="https://preview.colorlib.com/theme/course/images/smartphone.svg" /><p>0034 37483 2445 322</p>
              </li>
              <li>
                <img style={{width: '30px', height: '30px', color: '#fbb606'}} src="https://preview.colorlib.com/theme/course/images/envelope.svg" /><p>hello@company.com</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="foot">
        <p>Copyright ©2024 All rights reserved | This template is made with ❤️ by Colorlib</p>
        <div className="icons">
          <FaFacebook />
          <FaInstagram />
          <RiTwitterXFill />
          <FaGithub />
        </div>
      </div>
    </footer>
  )
}
