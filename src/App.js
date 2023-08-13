import React, { Component } from 'react';
import './App.css';

import { Home } from './pages/home-page';
import { Login } from './pages/login-page';
import { Contact } from './pages/contact-us';
import { Register } from './pages/register-page-1';
import { Subscribe } from './pages/subscribe-page';
import { RegisterStudent2 } from './pages/register-page-2';
import { RegisterTutor2 } from './pages/register-page-2';
import { Reset } from './pages/password-reset-page';
import { Dashboard } from './pages/logged-in-page';
import { Forgot } from './pages/forgot-password-page';
import { About } from './pages/about-us';
import { Route, Routes } from 'react-router-dom';

export default class App extends Component{

    constructor() {
        super();
        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        }
    }
    render(){
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/" render={props => (<Dashboard {...props} loggedInStatus={this.state.loggedInStatus}/>)}/> */}
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contactUs" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/subscribe" element={<Subscribe />} />
                <Route path="/registerstudent" element={<RegisterStudent2 />}/>
                <Route path="/registertutor" element={<RegisterTutor2 />}/>
                <Route path="/reset-password" element={<Reset />}/>
                <Route path="/forgot-password" element={<Forgot />}/>
                <Route path="/aboutUs" element={<About />}/> 
                <Route path="/dashboard" element={<Dashboard />}/> 
            </Routes>            
        </div>
    )
    }
}