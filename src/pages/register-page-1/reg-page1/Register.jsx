import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import regstyles from './register.module.css';
import logo from '../../../assets/logo.png';
import TLogo from '../../../assets/TLogo.png';
import axios from '../../../api/axios';

const NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{1,23}$/;
const EMAIL_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{1,23}$/;
const PASS_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{8,24}$/;

const REGISTER_URL = '/register';

const Register = () => {

    const [selectedValue, setSelectedValue] = useState('');
    const [countrySelected, setCountrySelected] = useState('');
    
    const userRef = useRef();
    const errRef = useRef();

    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pass, setPass] = useState('');
    const [validPass, setValidPass] = useState(false);
    const [passFocus, setPassFocus] = useState(false);

    const [confirmPass, setConfirmPass] = useState('');
    const [validConfirm, setValidConfirm] = useState(false);
    const [confrimFocus, setConfirmFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = NAME_REGEX.test(name);
        console.log(result);
        console.log(name);
        setValidName(result);
    }, [name])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email])

    useEffect(() => {
        const result = PASS_REGEX.test(pass);
        console.log(result);
        console.log(name);
        setValidPass(result);
        const match = pass === confirmPass;
        setValidConfirm(match);
    }, [pass, confirmPass])

    useEffect(() => {
        setErrMsg('');
    }, [name, email, pass, confirmPass])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const v1 = NAME_REGEX.test(name);
        const v2 = EMAIL_REGEX.test(email);
        const v3 = PASS_REGEX.test(pass);
        if(!v1 || !v2 || !v3){
            setErrMsg("Invalid Entry");
            return;
        }

        try{
            const response = await axios.post(REGISTER_URL, JSON.stringify({ user: name, pwd: pass, email }),
            {
                headers: { 'Content-Type': 'application/json'},
                withCredentials: true
            }
            );
            console.log(response.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);

            setName('');
            setPass('');
            setConfirmPass('');

        } catch (err){
            if(!err?.response){
                setErrMsg("No Server Response");
            } else if (err.response?.status === 409){
                setErrMsg("Login info taken.")
            } else {
                setErrMsg("Registration failed.")
            }
            errRef.current.focus();
        }
    }

    return(
        <>
        {success ? (
            <section>
                <h1>Success!</h1>
                <p>
                    <a href="#">Sign In</a>
                </p>
            </section>
        ) : (

            <div className={regstyles.registration}>
                
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                <div className={regstyles.regLogo}>
                    <Link to="/home"><img src={logo} alt="logo"/></Link>
                </div>

                
                <div className={regstyles.formContainer}>


                    <form className={regstyles.registrationForm} onSubmit={handleSubmit}>
                        <div className={regstyles.titleLogo}>
                            <div className={regstyles.titleSubtitle}>
                                <h2 className={regstyles.reg1PageTitle}>Let's get started</h2>
                                <p className={regstyles.subtitle}>Join a network of tutors and students today and get the best learning experience<br></br>on the web!</p>
                            </div>
                            
                            <img className={regstyles.reg1tLogo} src={TLogo} alt="TLogo" /> 
                        </div>
                        
                        <div className={regstyles.inputs}>
                            <input className={regstyles.fullName}
                                type="text"
                                id="full-name"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setName(e.target.value)}
                                required
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby="namenote"
                                onFocus={() => setNameFocus(true)}
                                onBlur={() => setNameFocus(false)}
                                placeholder="Full Name">
                            </input>
                            {/* <p id="namenote" className={nameFocus && name && !validName ? "instructions" : "offscreen"}>Invalid Name</p> */}

                            <input className={regstyles.email}
                                type="email"
                                id="email"
                                autoComplete="off"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                aria-invalid={validEmail ? "false" : "true"}
                                aria-describedby="emailnote"
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                                placeholder="Email">
                            </input>
                            {/* <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>Invalid Email</p> */}


                            <input className={regstyles.password}
                                type="password"
                                id="password"
                                onChange={(e) => setPass(e.target.value)}
                                required
                                aria-invalid={validPass ? "false" : "true"}
                                aria-describedby="passnote"
                                onFocus={() => setPassFocus(true)}
                                onBlur={() => setPassFocus(false)}
                                placeholder="Password (minimum 8 characters)">
                            </input>
                            {/* <p id="passnote" className={passFocus && !validPass ? "instructions" : "offscreen"}>Invalid Password</p> */}

                            <input className={regstyles.confirmpwd}
                                type="password"
                                id="confirmpwd"
                                onChange={(e) => setConfirmPass(e.target.value)}
                                required
                                aria-invalid={validConfirm ? "false" : "true"}
                                aria-describedby="confirmnote"
                                onFocus={() => setConfirmFocus(true)}
                                onBlur={() => setConfirmFocus(false)}
                                placeholder="Confirm Password">
                            </input>
                            {/* <p id="confirmnote" className={confirmPass && !validConfirm ? "instructions" : "offscreen"}>Passwords do not match</p> */}

                            <select className={regstyles.countrySelect}>
                                <option className={regstyles.countryDefaultValue} 
                                        defaultValue>Country
                                </option>
                                <option value="Canada"
                                        checked={countrySelected === 'Canada'} 
                                        onChange={(e) => setCountrySelected(e.target.value)}
                                >Canada</option>
                                <option value="United States"
                                        checked={countrySelected === 'United States'} 
                                        onChange={(e) => setCountrySelected(e.target.value)}
                                >United States</option>
                                <option value="Other"
                                        checked={countrySelected === 'Other'} 
                                        onChange={(e) => setCountrySelected(e.target.value)}
                                >Other</option>
                            </select>
                        </div>

                        <p className={regstyles.roleSelectTitle}>I am a?</p>
                        <div className={regstyles.roleSelect}>
                            <div className={regstyles.studentSelect}>
                                <input className={regstyles.studentSelctor} type="radio" name="role" id="student" value="student" checked={selectedValue === 'student'} onChange={(e) => setSelectedValue(e.target.value)}></input>
                                <p className={regstyles.studentTitle}>Student</p>
                            </div>
                        
                            <div className={regstyles.tutorSelect}>
                                <input className={regstyles.tutorSelctor} type="radio" name="role" id="tutor" value="tutor" checked={selectedValue === 'tutor'} onChange={(e) => setSelectedValue(e.target.value)}></input>
                                <p className={regstyles.tutorTitle}>Teacher</p>
                            </div>
                        </div>
                        <br></br>

                        <div className={regstyles.nextHaveAccount}>
                            {
                                selectedValue === "student" ? (<Link to="/registerstudent"><button disabled={!selectedValue} className={regstyles.nextPageButton}>Next</button></Link>)
                                : selectedValue === "tutor" ? (<Link to="/registertutor"><button disabled={!selectedValue} className={regstyles.nextPageButton}>Next</button></Link>)
                                :(<button disabled={!selectedValue} className={regstyles.nextPageButton}>Next</button>)
                            }
                        </div>

                    </form>
                </div>
            
            </div>
        )}
        </>
    )
}

export default Register;