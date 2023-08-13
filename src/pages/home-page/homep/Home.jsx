import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import './header.css';
import './process.css';
import logo from '../../../assets/logo.png';
import insightsPic from '../../../assets/insightsPic.png';
import matchingPic from '../../../assets/matchingPic.png';
import personalityPic from '../../../assets/personalityPic.png';
import questionsPic from '../../../assets/questionsPic.png';

import { NavLink, Link, useMatch, useResolvedPath } from 'react-router-dom';

const Home = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="home">
            <div className="top-half">
                <div className="navbar">
                    <div className="navbar-links">
                        <div className="navbar-links_logo">
                            <Link to="/home"><img src={logo} alt="logo"/></Link>
                        </div>
                        <div className="navbar-links_container">
                            <ul>
                                <li><p className="home-button"><NavLink to="/"><NavLink to="/home">Home</NavLink></NavLink></p></li>
                                <li><p className="about-us"><NavLink to="/aboutUs">About Us</NavLink></p></li>
                                <li><p className="contact-us"><NavLink to="/contactUs">Contact Us</NavLink></p></li>
                                <li><p className="subscribe-button"><NavLink to="/subscribe">Subscribe</NavLink></p></li>
                                <li><p className="log-in"><NavLink to='/login'>Sign In</NavLink></p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-menu">
                        {toggleMenu
                        ? <RiCloseLine color="#97B6DD" size={24} onClick={() =>setToggleMenu(false)}/>
                        : <RiMenu3Line color="#97B6DD" size={24} onClick={() =>setToggleMenu(true)}/>
                        }
                        {toggleMenu && (
                        <div className="navbar-menu_container scale-up-center">
                            <div className="navbar-menu_container-links">              
                            <div className="navbar-links_container">
                            <ul>
                                <li><p class="active" className="home-button"><Link to="/">Home</Link></p></li>
                                <li><p className="about-us"><Link to="/aboutUs">About Us</Link></p></li>
                                <li><p className="contact-us"><Link to="/contactUs">Contact Us</Link></p></li>
                                <li><p className="subscribe-button"><Link to="/subscribe">Subscribe</Link></p></li>
                                <li><p className="log-in"><Link to="/login">Sign In</Link></p></li>
                            </ul>
                            </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>

                <div className="header section__padding" id="home">
                    <div className="header-content">
                        <h1 className="slogan_1">
                            Simplifying Learning.
                        </h1>
                        <h1 className="slogan_2">
                            Advancing Education.
                        </h1>
                        <p>
                            Tutor.AI aims to match students with tutors in the most<br></br>compatible way with our advanced matching<br></br>algorithm
                        </p>
                        <div className="header-get_started">
                            <p><Link to="/login">Get Started</Link></p>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="process section__padding">
                <div className="process-content">
                    <h1 className="process-title">Our Process</h1>
                    <h3 className="process-subtitle">Step-by-Step</h3>

                    <br></br>
                    <br></br>
                    <br></br>

                    <div className="questionnaires">
                    <div className="questionnaires-logo">
                        <img src={questionsPic} alt="questionnaires"/>
                    </div>
                    <h2 className="questionnaires-title">Questionnaires</h2>
                    <p> 
                        Students are asked about their<br></br>behaviors in an academic<br></br>environment.
                    </p>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div className="insights">
                    <div className="insights-logo">
                        <img src={insightsPic} alt="insights"/>
                    </div>
                    <h2 className="insights-title">Insights</h2>
                    <p> 
                        We use industry standard<br></br>artificial intelligence algorithms<br></br>to evaluate your psychological<br></br>traits like focus, attention,<br></br>decision making, and more.
                    </p>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div className='personality'>
                        <div className='personality-logo'>
                            <img src={personalityPic} alt="personality"/>
                        </div>
                        <h2 className='personality-title'>Personality</h2> 
                        <p>After verifying credentials,<br></br> tutors take a similar test,<br></br> and their teaching style is evaluated.</p>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                       
                    <div className='matching'>
                        <div className='matching-logo'>
                            <img src={matchingPic} alt="matching"/>
                        </div>
                        <h2 className='matching-title'>Matching</h2> 
                        <p>Using data from students and tutors,<br></br> we form pairs that will result<br></br> in the highest chance of success.</p>
                    </div>

                </div>
            </div>

            <div className='bottom-half'>
                    
                <div className='testimonials'>
                    <h4 className='testimonials-ttl'>Testimonials</h4>
                    <p className='testimonials-p'>What people are saying</p>
                    <div className='testimonial-grid'>
                        <div className='testimonial-images'>
                            <img className='test-img' src='https://gitlab.com/uploads/-/system/project/avatar/3880238/Temp.png'></img>
                            <img className='test-img' src='https://gitlab.com/uploads/-/system/project/avatar/3880238/Temp.png'></img>
                            <img className='test-img' src='https://gitlab.com/uploads/-/system/project/avatar/3880238/Temp.png'></img>
                        </div>
                        <div className='testimonial-texts'>
                            <p className='test-txt'>TEXT</p>
                            <p className='test-txt'>TEXT</p>
                            <p className='test-txt'>TEXT</p>
                        </div>
                    </div>


                </div>
                    <div className='getting-started'>
                        <div className='get-started-1'>
                            <h3 className='get-started-txt1'>Get Started.</h3>
                            <h3 className='get-started-txt2'>See our plans.</h3>
                        </div>

                        <div className='get-started-2'>
                            <Link to="/subscribe"><button className='subscribes'>Subscribe</button></Link>
                        </div>
                        
                    </div>

                    <div className='footer'>
                        <img className="logo-2" src={logo} alt="logo"></img>
                        <p className='privacy'>Privacy Policy</p>
                        <p className='copyright'>© Copyright 2023 Tutor.Ai</p>
                    </div>
            </div>
        </div>
    )
}

export default Home;