import React from 'react';
import { BiSolidDonateBlood } from 'react-icons/bi';
import { LuPhone, LuMapPin, LuMail } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row gy-4">

       
          <div className="col-md-3  footer-description">
            <div className="brand-header">
              <div className="brand-icon-box">
                <BiSolidDonateBlood className="brand-icon" />
              </div>
              <h5>Blood<span>Link</span></h5>
            </div>

            <p>
              Connecting blood donors with those in need. Every drop counts, every donation saves a life.
            </p>
          </div>

          
          <div className="col-md-3  footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li><NavLink to="/find-blood">Find Blood</NavLink></li>
              <li><NavLink to="/become-donor">Become a Donor</NavLink></li>
              <li><NavLink to="/blood-request">Blood Requests</NavLink></li>
              <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
          </div>

       
          <div className="col-md-3  footer-emergency">
            <h5>Emergency</h5>
            <ul>
              <li>
                <LuPhone className="contact-icon" />
                <span>+91 8075379301</span>
              </li>
              <li>
                <LuPhone className="contact-icon" />
                <span>+8075379301</span>
              </li>
              <li>
                <LuMail className="contact-icon" />
                <span>ashifali33@gmail.com</span>
              </li>
            </ul>
          </div>

         
          <div className="col-md-3  footer-location">
            <h5>Location</h5>
            <ul>
              <li className="location-item">
                <LuMapPin className="contact-icon location-icon" />
                <span>
                  Kerala,Malappuram <br />
                  Tirur, PO Niramaruthur 676109.
                </span>
              </li>
            </ul>
          </div>

        </div>

        
        <hr className="footer-divider" />

        <div className="end">
          <p>&copy; 2026 BloodLink. All rights reserved.</p>
          <p>Made with <span>♡</span> for humanity.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
