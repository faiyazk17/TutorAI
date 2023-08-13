import React, { useState } from 'react';
import './reset.css'
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import TLogo from '../../../assets/TLogo.png';
import axios from 'axios';

const Reset = (props) =>{
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState(props.match.params.token);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password.length < 8){
      alert("Password must be 8 or more characters")
    }
    else if (password === confirmPassword) {
      try {
        const response = await axios.post('/api/reset-password', {
          token: props.match.params.token,
          password: password
        });
        alert(response.data.message);
        props.history.push('/login');
      } catch (error) {
        alert(error.response.data.message);
      }
    }
    else {
      alert("Passwords do not match.");
    }
  };

  return (
    <div className="reset">
        <div className="reset-logo">  
                <Link to="/home"><img src={logo} alt="logo"/></Link>
        </div>

        <div className="reset-form-container">
            <form className="reset-form" onSubmit={handleSubmit}>
                <h2 className="reset-page-title">Reset Password</h2>
                <img className="reset-t-logo" src={TLogo} alt="TLogo" /> 
                <label>
                    <input type="password" placeholder="New Password (Minimum 8 characters)" value={password} onChange={(event) => setPassword(event.target.value)} />
                </label>
                <label>
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                </label>
                <Link to="/home"><button className="reset-submit-page-button" type="reset-submit">Reset Password</button></Link>
            </form>
        </div>
    </div>
  );
}
export default Reset;