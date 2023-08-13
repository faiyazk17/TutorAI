import './registertutor2.css';
import React, { useState } from 'react';
import MultipleChoice from '../MultipleChoiceForm.jsx';
import { questions } from './questions.js'
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import TLogo from '../../../assets/TLogo.png';
import { useForm } from 'react-hook-form';

const RegisterTutor2 = (props) => {
    const{ handleSubmit } = useForm();

    const [level, setLevel] = useState('');
    const onOptionChange = (e) =>{
        setLevel(e.target.value);
    }

    return(
        <div className="registration2T">
            <div className="logo">
                <Link to="/home"><img className='reg2-logo' src={logo} alt="logo"/></Link>
            </div>
            
            <div className="form-container2T">
                <form className="registration-form2T" onSubmit={handleSubmit()}>

                    <div className='reg2-title-logoT'>
                        <div>
                            <h2 className="reg2-page-titleT">Let's get started: Tutor</h2>
                            <p className='reg2-subtitleT'>Join a network of tutors and students today and get the best learning experience<br></br>on the web!</p>
                        </div>
                        <div>
                            <img className="reg2-t-logoT" src={TLogo} alt="TLogo" /> 
                        </div>

                    </div>

                    <p className='selector-titleT'>I tutor...?</p>
                    <div className="student-type-selectT">
                        
                        <div className="stu-elementary-selectT">
                            <input type="radio" name="role" value="Elementary" id="e" onChange={onOptionChange}></input>
                            <p>Elementary</p>
                        </div>
                        <div className="stu-secondary-select">
                            <input type="radio" name="role" value="Secondary" id="s" onChange={onOptionChange}></input>
                            <p>Secondary</p>
                        </div>
                        <div className="stu-post-select">
                            <input type="radio" name="role" value="Post-Secondary" id="p" onChange={onOptionChange}></input>
                            <p>Post-Secondary</p>
                        </div>
                    </div>
                    
                    <div className="formStyleS2T">
                    {questions.map((q) => (
                        <div key={q.question}>
                        <MultipleChoice
                            question={q.question}
                            options={q.answers}
                        />
                        </div>
                    ))}
                    </div>

                    <div className='termsT'>
                        <p>Terms of Service</p>
                        <div className='terms-agreeT'>
                            <input className='check-boxT' type="checkbox" />

                            <p>I agree to the Terms of Service that my data will be taken and used to create<br></br>my Tutor.AI profile.</p>
                        </div>
                    </div>

                    <div className='button-accountT'>
                        <div>
                            <Link to="/login"><button className='submit-buttonT' id="reg2-submit-page-button" type="submit">Submit</button></Link>
                        </div>
                        <div>
                            <Link to="/login"><button className='account-linkT' id="reg2-link-button">Already have an account?</button></Link>
                        </div>
                           
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default RegisterTutor2;