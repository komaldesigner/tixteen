import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ForgotPassword.css'; // Add your CSS styling here
// import Logo from "../../assets/img/tixteen_icon.png";
import Logo from "../../../assets/img/tixteen_icon.png";


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [websitmail, setWebsitmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [hashedPassword, setHashedPassword] = useState('');

  useEffect(() => {
    const fetchWebsiteEmail = async () => {
      try {
        const response = await axios.get('/api/getWebsiteEmail');
        setWebsitmail(response.data.websiteemail);
      } catch (error) {
        console.error('Error fetching website email', error);
      }
    };

    fetchWebsiteEmail();
  }, []);

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/checkEmail', { email });
        console.log(response.data)
    } catch (error) {
      console.error('Error checking email', error);
      alert('Failed to send OTP');
    }
  };

  const handleSubmitOtp = async (e) => {
    e.preventDefault();
    if (otp === enteredOtp) {
      try {
        await axios.post('/api/updatePassword', { email, password: hashedPassword });
        alert('Password Updated Successfully');
        window.location.href = '/';
      } catch (error) {
        console.error('Error updating password', error);
      }
    } else {
      alert('Wrong OTP');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="text-center">
        <a href="/"><img style={{ width: '195px' }} src={Logo} alt="Logo" /></a>
      </div>
      <div id="pageloader">
        <img src="../assets/img/circle.gif" alt="processing..." />
      </div>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            {!otpSent ? (
              <form onSubmit={handleSubmitEmail} className="form-signin">
                <h2 className="form-signin-heading">Forgot Password</h2>
                <hr />
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Repeat Password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    required
                  />
                </div>
                <hr />
                <div className="form-group">
                  <button type="submit" className=" btn btn-warning   btn-block" name="forgt">
                    Submit
                  </button>
                  <hr />
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmitOtp} className="form-signin">
                <h2 className="form-signin-heading">Enter OTP</h2>
                <hr />
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter OTP"
                    value={enteredOtp}
                    onChange={(e) => setEnteredOtp(e.target.value)}
                    required
                  />
                </div>
                <hr />
                <div className="form-group">
                  <button type="submit" className="btn btn-warning btn-block">
                    Submit
                  </button>
                  <hr />
                </div>
              </form>
            )}
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
