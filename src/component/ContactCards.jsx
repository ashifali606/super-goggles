import React from 'react';
import './ContactCards.css';
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

function ContactCards() {
    return (
        <div className='section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center header-content'>
                        <h1>Get in <span>Touch</span></h1>
                        <h6>
                            We are here to help. Reach out for emergencies, support, or any questions
                            about blood donation.
                        </h6>
                    </div>
                </div>

                <div className='row g-4 justify-content-center cards-row'>
                    {/* Card 1: Emergency Helpline */}
                    <div className='col-12 col-md-4'>
                        <div className='flip-card'>
                            <div className='flip-card-inner'>
                                {/* Front Side */}
                                <div className='flip-card-front box1'>
                                    <div className='icon-box'>
                                        <FiPhone size={22} color="#ef4444" />
                                    </div>
                                    <h2>Emergency Helpline</h2>
                                    <h6>+91 8075379301</h6>
                                    <p>24/7 Available</p>
                                </div>
                                {/* Back Side */}
                                <div className='flip-card-back box1'>
                                    <h2>Urgent Blood Need?</h2>
                                    <p>Call our 24/7 rapid response desk immediately for emergency donor support.</p>
                                    <a href="tel:+918075379301" className='flip-btn btn-red'>Call Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Email Support */}
                    <div className='col-12 col-md-4'>
                        <div className='flip-card'>
                            <div className='flip-card-inner'>
                                {/* Front Side */}
                                <div className='flip-card-front box2'>
                                    <div className='icon-box'>
                                        <FiMail size={22} color="#60a5fa" />
                                    </div>
                                    <h2>Email Support</h2>
                                    <h6>www.ashifali33@gmail.com</h6>
                                    <p>Response within 2 hours</p>
                                </div>
                                {/* Back Side */}
                                <div className='flip-card-back box2'>
                                    <h2>Have Questions?</h2>
                                    <p>Send us your queries about blood camps, registration, or partnerships.</p>
                                    <a href="mailto:ashifali33@gmail.com" className='flip-btn btn-blue'>Send Email</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Head Office */}
                    <div className='col-12 col-md-4'>
                        <div className='flip-card'>
                            <div className='flip-card-inner'>
                                {/* Front Side */}
                                <div className='flip-card-front box3'>
                                    <div className='icon-box'>
                                        <FiMapPin size={22} color="#34d399" />
                                    </div>
                                    <h2>Head Office</h2>
                                    <h6>Kerala, Calicut</h6>
                                    <p>Near KMCT Medical College</p>
                                </div>
                                {/* Back Side */}

                                <div className='flip-card-back box3'>
                                    <h2>Visit Our Center</h2>
                                    <p>Open Mon - Sat (9:00 AM - 6:00 PM) near KMCT Medical College, Calicut.</p>
                                    <a href="https://www.google.com/maps/search/?api=1&query=KMCT+Medical+College,11.3260903,75.9687582" target="_blank" rel="noopener noreferrer" className='flip-btn btn-green'>
                                        Get Directions
                                    </a>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCards;
