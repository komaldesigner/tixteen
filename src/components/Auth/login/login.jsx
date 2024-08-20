

import React, { useEffect, useState } from 'react';
import "../../../styles/Auth/login.css"
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/img/logo.png"
import { makeApi } from '../../../api/callApi.tsx';
import eyeIcon from "../../../assets/img/eye 1.png" // Ensure these paths are correct
import MainLoader from '../../../utils/loader.jsx';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [Islogin, setIslogin] = useState(false);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem('token');

    // If token is not found, redirect to login page
    if (token) {
      navigate('/verified/creator/home');
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email) {
      toast.error('Please fill email');
      return;
    }
    if (!password) {
      toast.error('Please fill password');
      return;
    }
    try {
      setLoading(true);
      const response = await makeApi("/api/login-user", "POST", { password, email });
      localStorage.setItem("token", response.data.token);

      setIslogin(true);
      toast(response.data.message, {
        onClose: () => {
          navigate("/verified/creator/home");
        }
      });

    } catch (error) {
      console.error('Error sending data:', error.response.data);
      toast.error(error.response.data.message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer position="top-center" autoClose={2000} style={{ width: "300px" }} />
      {Loading && <div className='loaderbgcolor' >

        <MainLoader />
      </div>
      }
      <div className="i-phone-14-38">
        <div className="group-7869">
          <img className="tixteen-2-1" src={Logo} alt="Logo" />
        </div>
        <div className="group-8967">
          <div className="group-7882">
            <div className="group-119">
              <div className="login2">Login</div>
            </div>
            <div className="enter-your-email-phone-number-and-password-to-login">
              Enter Your email, phone number, and password to login.
            </div>
          </div>
          <div>
            <form id="login-form" onSubmit={handleLogin}>
              <div className="group-7880">
                <div className="group-7879">
                  <div className="group-159">
                    <div className="email">Email</div>
                  </div>
                  <div className="group-7878">
                    <div className="group-157">
                      <div className="fm">
                        <div className="profileIcon " style={{ backgroundColor: "#f1f3f8" }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                          </svg>
                        </div>
                        <input
                          type="email"
                          id="username"
                          name="email"
                          placeholder="jimhimtar@gmail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-158">
                  <div className="password">Password</div>
                  <div className="group-1572">
                    <div className="fm">
                      <div className="lockIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
                          <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5" />
                          <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                        </svg>
                      </div>
                      <div className="eyeIcon" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ?
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                            <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                          </svg>
                          :
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                            </svg>
                          </svg>
                        }
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        id="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div id="alertMessage" style={{ color: 'red' }}>
                    {alertMessage}
                  </div>
                  <div className="groupbutton">
                    {(!Islogin || Loading) &&
                      <input type="submit" name="influlogin" value="Login" className="loginbtn" />
                    }
                  </div>
                </div>
              </div>
            </form>
            <div className="don-t-have-an-account-s-ign-up">
              <span>
                <span className="don-t-have-an-account-s-ign-up-span">
                  Don’t have an account?
                </span>
                <Link to={'/creator/register'} style={{ textDecoration: 'none' }} >
                  <span className="don-t-have-an-account-s-ign-up-span2">Sign-up</span>
                </Link>
              </span>
            </div>
            {/* <div className="forgot-password" style={{textDecoration: 'none'}} >
              <a href="forgetpassword.php">Forgot password?</a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
