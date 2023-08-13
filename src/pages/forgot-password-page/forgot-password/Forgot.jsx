import React, { useState } from 'react';
import fstyles from './forgot.module.css';
import logo from '../../../assets/logo.png';
import TLogo from '../../../assets/TLogo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Forgot = () => {
    const [email, setEmail] = useState('');

    const resetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/reset-password', { email });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        <div className={fstyles.forgotPassword}>
            <div className={fstyles.logo}>
                <Link to="/home"><img src={logo} alt="logo"/></Link>
            </div>
            <div className={fstyles.forgotFormContainer}>
                <form className={fstyles.forgotForm} onSubmit={resetPassword}>
                    <div className={fstyles.forgotHeader}>
                        <h2 className={fstyles.forgotTitle}>Forgot Password?</h2>
                            <img className={fstyles.forgotTLogo} src={TLogo} alt="TLogo" /> 
                    </div>
                <br></br>
                <div className={fstyles.emailInput}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email-login" name='email'/>
                </div>
                    <button className={fstyles.forgotSubmitButton} type="submit">Forgot Password</button>
                </form>
            </div>
        </div>
    );
} 
export default Forgot;