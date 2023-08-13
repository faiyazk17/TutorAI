import React, { useState } from 'react';
import './contactUs.css';
import './contact-navbar.css';
import logo from '../../../assets/logo.png';
import instagram from "../../../assets/instagram.png";

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { NavLink, Link, useMatch, useResolvedPath } from 'react-router-dom';

const Contact = (props) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div>
            <div className="contact-navbar">
                <div className="contact-navbar-links">
                    <div className="contact-navbar-links_logo">
                        <Link to="/home"><img src={logo} alt="logo"/></Link>
                    </div>
                    <div className="navbar-links_container">
                        <ul>
                        <li><p className="contact-home-button"><NavLink to="/home">Home</NavLink></p></li>
                            <li><p className="contact-about-us"><NavLink to="/aboutUs">About Us</NavLink></p></li>
                            <li><p className="contact-contact-us"><NavLink to="/contactUs">Contact Us</NavLink></p></li>
                            <li><p className="contact-subscribe-button"><NavLink to="/subscribe">Subscribe</NavLink></p></li>
                            <li><p className="contact-log-in"><NavLink to='/login'>Sign In</NavLink></p></li>
                        </ul>
                    </div>
                </div>
                <div className="contact-navbar-menu">
                    {toggleMenu
                    ? <RiCloseLine color="#97B6DD" size={24} onClick={() =>setToggleMenu(false)}/>
                    : <RiMenu3Line color="#97B6DD" size={24} onClick={() =>setToggleMenu(true)}/>
                    }
                    {toggleMenu && (
                    <div className="contact-navbar-menu_container contact-scale-up-center">
                        <div className="contact-navbar-menu_container-links">              
                        <div className="contact-navbar-links_container">
                        <ul>
                            <li><p class="active" className="home-button"><Link to="/home">Home</Link></p></li>
                            <li><p className="contact-about-us"><Link to="/aboutUs">About Us</Link></p></li>
                            <li><p className="contact-contact-us"><Link to="/contactUs">Contact Us</Link></p></li>
                            <li><p className="contact-subscribe-button"><Link to="/subscribe">Subscribe</Link></p></li>
                            <li><p className="contact-log-in"><Link to="/login">Sign In</Link></p></li>
                        </ul>
                        </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>

            <div className='contact-section'>
                    <h1>Contact Us</h1>
                    <div className='contact-info'>
                        <div className='set-1'>
                            <p><strong>Rodrigo Del Aguila - Lead AI Developer</strong><br></br>rodrigo.daguila@gmail.com</p>
                            <p><strong>Tharakan Karunakaran - Business Analyst</strong><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tharakan.karunakaran@gmail.com</p>
                        </div>
                        <div className='set-2'>
                            <p><strong>Ishaan Agnihotri - Business Analyst</strong><br></br>ishaanagnihotri123@gmail.com</p>
                            <p><strong>Ashton Seebaran - Venture Manager</strong><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ashton.seebaran@gmail.com</p>
                        </div>
                        <div className='set-3'>
                            <p><strong>James Shapas - Lead Full Stack Developer</strong><br></br>jamesshapas@gmail.com</p>
                        </div>
                        <h1>Our Socials</h1>
                        <div className='socials'>
                            <Link to="/home"><img src={instagram} alt="instagram"/></Link>
                            <p>@temp123</p>
                        </div>
                        
                    </div>
            </div>
        </div>
    );

}

export default Contact;