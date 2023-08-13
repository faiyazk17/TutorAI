import studentstyles from './registerstudent2.module.css';
import React, { useState } from 'react';
import MultipleChoice from '../MultipleChoiceForm.jsx';
import { questions } from './questions.js';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import TLogo from '../../../assets/TLogo.png';
import { useForm } from 'react-hook-form';

const RegisterStudent2 = (props) => {
    const{ handleSubmit } = useForm();

    const [level, setLevel] = useState('');
    const onOptionChange = (e) =>{
        setLevel(e.target.value);
    }

    return(
        <div className={studentstyles.registration2S}>
            <div className={studentstyles.logo}>
                <Link to="/home"><img className={studentstyles.reg2Logo} src={logo} alt="logo"/></Link>
            </div>
            
            <div className={studentstyles.formContainer2S}>
                <form className={studentstyles.registrationForm2S} onSubmit={handleSubmit()}>

                    <div className={studentstyles.reg2TitleLogo}>
                        <div>
                            <h2 className={studentstyles.reg2PageTitle}>Let's get started: Student</h2>
                            <p className={studentstyles.reg2Subtitle}>Join a network of tutors and students today and get the best learning experience<br></br>on the web!</p>
                        </div>
                        <div>
                            <img className={studentstyles.reg2TLogo} src={TLogo} alt="TLogo" /> 
                        </div>

                    </div>

                    <p className={studentstyles.selectorTitle}>I am in...?</p>
                    <div className={studentstyles.studentTypeSelect}>
                        
                        <div className={studentstyles.stuElementarySelect}>
                            <input type="radio" name="role" value="Elementary" id="e" onChange={onOptionChange}></input>
                            <p>Elementary</p>
                        </div>
                        <div className={studentstyles.stuSecondarySelect}>
                            <input type="radio" name="role" value="Secondary" id="s" onChange={onOptionChange}></input>
                            <p>Secondary</p>
                        </div>
                        <div className={studentstyles.stuPostSelect}>
                            <input type="radio" name="role" value="Post-Secondary" id="p" onChange={onOptionChange}></input>
                            <p>Post-Secondary</p>
                        </div>
                    </div>
                    
                    <div className={studentstyles.formStyleS2}>
                    {questions.map((q) => (
                        <div key={q.question}>
                        <MultipleChoice
                            question={q.question}
                            options={q.answers}
                        />
                        </div>
                    ))}
                    </div>

                    <div className={studentstyles.terms}>
                        <p>Terms of Service</p>
                        <div className={studentstyles.termsAgree}>
                            <input className={studentstyles.checkBox} type="checkbox" />

                            <p>I agree to the Terms of Service that my data will be taken and used to create<br></br>my Tutor.AI profile.</p>
                        </div>
                    </div>

                    <div className={studentstyles.buttonAccount}>
                        <div>
                            <Link to="/login"><button className={studentstyles.reg2SubmitPageButton} type="submit">Submit</button></Link>
                        </div>
                        <div>
                            <Link to="/login"><button className={studentstyles.reg2LinkButton} >Already have an account?</button></Link>
                        </div>
                           
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default RegisterStudent2;