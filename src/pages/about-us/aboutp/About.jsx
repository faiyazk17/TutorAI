import React, { useState } from 'react';
import './about.css';
import './about-nav.css';
import logo from '../../../assets/logo.png';
import placeholder from '../../../assets/placeholder_img.png'

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { NavLink, Link, useMatch, useResolvedPath } from 'react-router-dom';

const About = (props) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="about-us-total">
            <div className="about-us-top">
                <div className="about-navbar">
                    <div className="about-navbar-links">
                        <div className="about-navbar-links_logo">
                            <Link to="/home"><img src={logo} alt="logo"/></Link>
                        </div>
                        <div className="navbar-links_container">
                            <ul>
                            <li><p className="about-home-button"><NavLink to="/home">Home</NavLink></p></li>
                                <li><p className="about-about-us"><NavLink to="/aboutUs">About Us</NavLink></p></li>
                                <li><p className="about-contact-us"><NavLink to="/contactUs">Contact Us</NavLink></p></li>
                                <li><p className="about-subscribe-button"><NavLink to="/subscribe">Subscribe</NavLink></p></li>
                                <li><p className="about-log-in"><NavLink to='/login'>Sign In</NavLink></p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact-navbar-menu">
                        {toggleMenu
                        ? <RiCloseLine color="#97B6DD" size={24} onClick={() =>setToggleMenu(false)}/>
                        : <RiMenu3Line color="#97B6DD" size={24} onClick={() =>setToggleMenu(true)}/>
                        }
                        {toggleMenu && (
                        <div className="about-navbar-menu_container contact-scale-up-center">
                            <div className="about-navbar-menu_container-links">              
                            <div className="about-navbar-links_container">
                            <ul>
                                <li><p class="active" className="home-button"><Link to="/home">Home</Link></p></li>
                                <li><p className="about-about-us"><Link to="/aboutUs">About Us</Link></p></li>
                                <li><p className="about-contact-us"><Link to="/contactUs">Contact Us</Link></p></li>
                                <li><p className="about-subscribe-button"><Link to="/subscribe">Subscribe</Link></p></li>
                                <li><p className="about-log-in"><Link to="/login">Sign In</Link></p></li>
                            </ul>
                            </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            

                <div className="about-us-header">
                    <h1>About TUTOR.AI</h1>
                </div>
            </div>

            <div className='about-section'>
                <div className='section-1'>
                    <div className='txt-1'>
                        <h1 className='about-page-subtitle'>About Us</h1>
                        <p>Tutor.ai is an AI tutoring company that aims to simplify the learning process by providing students with the right tutors that match their unique learning styles.</p>
                        <p>Our AI system would take into consideration factors such as learning pace, academic level, and subject matter expertise, to match students with the most suitable tutors.</p>
                        <p> Our team consists of experienced educators, AI developers, and business professionals who are committed to delivering a high-quality tutoring service to students.</p>
                    </div>
                    <div className='pic-1'>
                        <img className='img-1' src={placeholder} alt="logo"/>
                    </div>
                </div>

                    
                <div className='section-2'>
                    <div className='pic-2'>
                        <img className='img-2' src={placeholder} alt="logo"/>
                    </div>
                    <div className='txt-2'>
                        <p>We recognize that finding the right tutors to meet specific learning styles is a massive challenge in the tutoring space.</p>
                        <p> To solve this, we aim to create an AI matching system that pairs individuals with the right tutor that meets their learning styles.</p>
                        <p> This will make the process of finding a suitable tutor much more efficient and effective.</p>
                    </div>
                </div>
                
                <div className='section-3'>
                    <div className='txt-3'>
                        <h1  className='about-page-subtitle'>Our Goal</h1>
                        <p>Our goal is to establish relationships with universities to provide our online AI tutoring service to better serve their students.</p>
                        <p>We believe that by working closely with universities, we can gain valuable insights into the needs of students and improve our service accordingly.</p>
                        <p>In return for this partnership, we would provide our service to their students at a discounted rate and insights on their students' learning abilities and challenges.</p>
                    </div>
                    <div className='pic-3'>
                        <img className='img-3' src={placeholder} alt="logo"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;