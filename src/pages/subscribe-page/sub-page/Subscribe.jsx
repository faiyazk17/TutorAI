import React, { useState } from 'react';
import './subscribe.css';
import './subscription-nav.css';
import logo from '../../../assets/logo.png';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { NavLink, Link } from 'react-router-dom';

const Subscribe = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="subscribe">
            <div className="sub-navbar">
                <div className="sub-navbar-links">
                    <div className="sub-navbar-links_logo">
                        <Link to="/home"><img src={logo} alt="logo"/></Link>
                    </div>
                    <div className="sub-navbar-links_container">
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
                            <li><p class="active" className="home-button"><Link to="/home">Home</Link></p></li>
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
            
            <div className="pricing">
                <div className="pricing-plan">

                    <div className="cards">
                        <div className="card" id="basic">
                            <h1 className="card-title">BASIC</h1>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h2 className="card-price" id="basic-price">$10</h2>
                            <p className="cost-rate">Per Session</p>
                            <p className="num-sessions">3 Sessions</p>
                            <ul className="card-plan-1">
                                <li id="card1_service1"> Service</li>
                                <li id="card1_service2"> Service</li>
                                <li id="card1_service3"> Service</li>
                            </ul>
                            <button type="button" className="card-btn">Choose Plan</button>
                        </div>

                        <div className="card" id="standard">
                            <h1 className="card-title">STANDARD</h1>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h2 className="card-price" id="standard-price">$15</h2>
                            <p className="cost-rate">Per Session</p>
                            <p className="num-sessions">5 Sessions</p>
                            <ul className="card-plan-2">
                                <li id="card2_service1"> Service</li>
                                <li id="card2_service2"> Service</li>
                                <li id="card2_service3"> Service</li>
                            </ul>
                            <button type="button" className="card-btn">Choose Plan</button>
                        </div>

                        <div className="card" id="basic">
                            <h1 className="card-title">PREMIUM</h1>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h2 className="card-price" id="premium-price">$20</h2>
                            <p className="cost-rate">Per Session</p>
                            <p className="num-sessions">10 Sessions</p>
                            <ul className="card-plan-3">
                                <li id="card3_service1"> Service</li>
                                <li id="card3_service2"> Service</li>
                                <li id="card3_service3"> Service</li>
                            </ul>
                            <button type="button" className="card-btn">Choose Plan</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Subscribe;