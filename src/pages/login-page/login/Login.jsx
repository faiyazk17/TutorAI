import React, { useRef, useEffect, useState, useContext } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import AuthContext from '../../../context/AuthProvider';
import axios from '../../../api/axios';

import styles from './login.module.css';
import logo from '../../../assets/logo.png';
import TLogo from '../../../assets/TLogo.png';

const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg("");
    }, [email, pass])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post(LOGIN_URL, JSON.stringify({ email, pwd: pass }),
            {
                headers: { 'Contect-Type': 'application/json'},
                withCredentials: true
            }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ email, pwd:pass, roles, accessToken })
            setEmail('');
            setPass('');
            setSuccess(true);
        } catch (err){
            if(!err?.response){
                setErrMsg('No Server Response');
            } else if(err.response?.status === 400){
                setErrMsg('Missing Email or Password');
            } else if(err.response?.status === 401){
                setErrMsg('Unauthorized');
            } else{
                setErrMsg('Login Failed.]');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <Link to="/dashboard"><h1>You are logged in!</h1></Link>
                </section>
            ) : (
                <div className={styles.login}>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                    <div className={styles.logo}>
                        <Link to="/home"><img src={logo} alt="logo" /></Link>
                    </div>

                    <div className={styles.formContainer}>
                        <form className={styles.loginForm} onSubmit={handleSubmit}>

                            <h2 className={styles.pageTitle}>Sign In</h2>

                            <img className={styles.tLogo} src={TLogo} alt="TLogo" />

                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <input
                                type="text"
                                id="email-login"
                                placeholder="Email"
                                ref={userRef}
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required>
                            </input>

                            <input
                                type="password"
                                id="password-login"
                                placeholder="Password"
                                onChange={(e) => setPass(e.target.value)}
                                value={pass}
                                required>
                            </input>

                            <button className={styles.signInButton} type="submit">Sign In</button>

                            <Link to="/register"><button className={styles.loginLinkButton}>Don't have an account?</button></Link>
                            <Link to="/forgot-password"><button className={styles.forgotPasswordButton}>Forgot password</button></Link>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default Login;