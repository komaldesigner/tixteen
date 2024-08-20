// import React, { useState } from 'react';
// import { makeApi } from "../../../api/callApi.tsx";
// import { ToastContainer, toast } from "react-toastify";
// import profile from "../../../assets/img/profile.png";
// import eyeIcon from "../../../assets/img/eye 1.png";
// import passlock from "../../../assets/img/lock 1.png";
// import locat from '../../../assets/img/locat.png';
// import cil_industry from '../../../assets/img/cil_industry.png';
// import Vector from '../../../assets/img/Vector (3).png';
// import material from '../../../assets/img/material-symbols_person-outline.png';
// import MainLoader from '../../../utils/loader.jsx';
// import HaveAccountfooter from '../../../utils/haveAccountfooter.jsx';

// // Function to validate email format
// const isValidEmail = (email) => {
//     // Basic email validation regex
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// };

// function Basicdetails({ onBaiscDetailsFill }) {
//     const [formData, setFormData] = useState({
//         username: '',
//         phone: '',
//         email: '',
//         password: '',
//     });
//     const [formSubmitted, setFormSubmitted] = useState(false);
//     const [showPassword, setShowPassword] = useState(false);

//     // Function to toggle password visibility
//     const togglePasswordVisibility = () => {
//         setShowPassword(prevShowPassword => !prevShowPassword);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const { email, password, username, phone } = formData;

//         if (!email) {
//             toast.error("Please fill email");
//             return;
//         }
//         if (!isValidEmail(email)) {
//             toast.error("Please enter a valid email address");
//             return;
//         }
//         if (!password) {
//             toast.error("Please fill password");
//             return;
//         }
//         if (!username) {
//             toast.error("Please fill username");
//             return;
//         }
//         if (!phone) {
//             toast.error("Please fill phone");
//             return;
//         }
//         if (phone.length !== 10) {
//             toast.error("Please enter a valid phone number");
//             return;
//         }

//         try {
//             setFormSubmitted(true);
//             const response = await makeApi("/api/send-otp", "POST", { email });
//             if (response.data.message === "Email already exists") {
//                 toast.error("Email already exists");
//                 setFormSubmitted(false);
//                 return;
//             } else {
//                 toast.success(response.data.message, {
//                     onClose: () => {
//                         handleBasicDetailsFill();
//                     }
//                 });
//             }
//         } catch (error) {
//             toast.error(error.response?.message || "Error sending data");
//             console.error("Error sending data:", error);
//         }
//     };

//     const handleBasicDetailsFill = () => {
//         onBaiscDetailsFill(formData);
//     };

//     return (
//         <div>
//             {/* {formSubmitted && <MainLoader />} */}
//             {formSubmitted && <div className='loaderbgcolor' > <MainLoader /></div>}

//             <ToastContainer autoClose={900} style={{ width: "300px" }} />
//             <div className="create-account">
//                 <div className="fp1">
//                     <div className="Arrow21hd">
//                         <h3>Create account</h3>
//                     </div>
//                 </div>

//                 <div className="form-container">
//                     <form id="myForm" method="post">
//                         {/* Username */}
//                         <div className="fm">
//                             <label htmlFor="username">FullName</label>
//                             <div className="profileIcon" style={{ top: "64%" }} >
//                                 <img src={profile} alt="usericon" />
//                             </div>
//                             <input
//                                 type="text"
//                                 id="username"
//                                 name="username"
//                                 placeholder="Jim Halpert"
//                                 maxLength="50"
//                                 value={formData.username}
//                                 onChange={handleInputChange}
//                             />
//                         </div>

//                         {/* Phone number */}
//                         <div className="fm">
//                             <label htmlFor="phone">Phone number</label>
//                             <input
//                                 type="tel"
//                                 id="phone"
//                                 name="phone"
//                                 placeholder="123-456-7890"
//                                 value={formData.phone}
//                                 onChange={handleInputChange}
//                             />
//                         </div>

//                         {/* Email */}
//                         <div className="fm">
//                             <label htmlFor="email">Email</label>
//                             <div className="profileIcon" style={{ top: "64%" }} >
//                                 <img src="../assets/img/Group 73.png" alt="" />
//                             </div>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 id="email"
//                                 placeholder="xyz@gmail.com"
//                                 onChange={handleInputChange}
//                                 value={formData.email}
//                             />
//                         </div>

//                         {/* Password */}
//                         <div className="fm">
//                             <label htmlFor="password">Password</label>
//                             <div className="password-container">
//                                 <div className="lockIcon" style={{ top: "64%" }} >
//                                     <img src={passlock} alt="passlock" />
//                                 </div>
//                                 <div className="eyeIcon" onClick={togglePasswordVisibility}>
//                                     <img src={eyeIcon} id="eIcon" alt="eyelock" />
//                                 </div>
//                             </div>
//                             <input
//                                 type={showPassword ? "text" : "password"}
//                                 name="password"
//                                 id="password"
//                                 placeholder="********"
//                                 value={formData.password}
//                                 onChange={handleInputChange}
//                             />
//                         </div>

//                         <div className="group103">
//                             <div className="personIcons1">
//                                 <img src={material} alt="Person Icon" />
//                                 <div className="line line"></div>
//                             </div>
//                             <div className="loactionIcons1">
//                                 <img src={locat} alt="Location Icon" />
//                                 <div className="line line"></div>
//                             </div>
//                             <div className="industryIcons1">
//                                 <img src={cil_industry} alt="Industry Icon" />
//                                 <div className="line line"></div>
//                             </div>
//                             <div className="DashIcons1">
//                                 <img src={Vector} alt="Dash Icon" />
//                             </div>
//                         </div>

//                         {/* Submit Button */}
//                         <div className="submitbtn">
//                             <div id="emailCheck" className="error" style={{ color: "red" }}></div>
//                             {!formSubmitted ?
//                                 <input type="submit" name="influregistrbtn" id="yourButtonId" value="Next" onClick={handleSubmit} style={{ cursor: "pointer" }} />
//                                 :
//                                 <input type="submit" name="influregistrbtn" id="yourButtonId" value="Loading..." disabled />
//                             }
//                         </div>
//                     </form>

//                     {/* Already have an account */}
//                     {/* <div>
//                         <div className="AlreadyHaveAnAccountSignIn">
//                             <span>Already have an account? </span>
//                             <a href="../login/login.php">Sign-in</a>
//                         </div>

//                         <div className="TermsAndConditionsPolicy">Terms and conditions Policy.</div>
//                     </div> */}
//                     <HaveAccountfooter />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Basicdetails;

import React, { useState } from 'react';
import { makeApi } from "../../../api/callApi.tsx";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLock, faUser, faPhone, faEnvelope, faMapMarkerAlt, faIndustry, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import MainLoader from '../../../utils/loader.jsx';
import HaveAccountfooter from '../../../utils/haveAccountfooter.jsx';

// Function to validate email format
const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

function Basicdetails({ onBaiscDetailsFill }) {
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        email: '',
        password: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password, username, phone } = formData;

        if (!email) {
            toast.error("Please fill email");
            return;
        }
        if (!isValidEmail(email)) {
            toast.error("Please enter a valid email address");
            return;
        }
        if (!password) {
            toast.error("Please fill password");
            return;
        }
        if (!username) {
            toast.error("Please fill username");
            return;
        }
        if (!phone) {
            toast.error("Please fill phone");
            return;
        }
        if (phone.length !== 10) {
            toast.error("Please enter a valid phone number");
            return;
        }

        try {
            setFormSubmitted(true);
            const response = await makeApi("/api/send-otp", "POST", { email, number: phone });
            // if (response.data.message === "Email already exists") {
            if (response.data.status === 400) {
                toast.error(response.data.message);
                setFormSubmitted(false);
                return;
            } else {
                toast.success(response.data.message, {
                    onClose: () => {
                        handleBasicDetailsFill();
                    }
                });
            }
        } catch (error) {
            if (error.response.status === 400) {
                toast.error(error.response.data.message);
                setFormSubmitted(false);
                return;
            } else {
                toast.error(error.response?.message || "Error sending data");
            }
        }
    };

    const handleBasicDetailsFill = () => {
        onBaiscDetailsFill(formData);
    };

    return (
        <div>
            {formSubmitted && <div className='loaderbgcolor'><MainLoader /></div>}

            <ToastContainer autoClose={900} style={{ width: "300px" }} />
            <div className="create-account">
                <div className="fp1">
                    <div className="Arrow21hd">
                        <h3>Create account</h3>
                    </div>
                </div>

                <div className="form-container">
                    <form id="myForm" method="post">
                        {/* Username */}
                        <div className="fm">
                            <label htmlFor="username">FullName</label>
                            <div className="profileIcon" style={{ top: "64%" }}>
                                <FontAwesomeIcon icon={faUser} size="lg" />
                            </div>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Jim Halpert"
                                maxLength="50"
                                value={formData.username}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Phone number */}
                        <div className="fm">
                            <label htmlFor="phone">Phone number</label>
                            <div className="profileIcon" style={{ top: "64%" }}>
                                <FontAwesomeIcon icon={faPhone} size="lg" />
                            </div>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="123-456-7890"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Email */}
                        <div className="fm">
                            <label htmlFor="email">Email</label>
                            <div className="profileIcon" style={{ top: "64%" }}>
                                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="xyz@gmail.com"
                                onChange={handleInputChange}
                                value={formData.email}
                            />
                        </div>

                        {/* Password */}
                        <div className="fm">
                            <label htmlFor="password">Password</label>
                            <div className="password-container">
                                <div className="lockIcon" style={{ top: "64%" }}>
                                    <FontAwesomeIcon icon={faLock} size="lg" />
                                </div>
                                <div className="eyeIcon" onClick={togglePasswordVisibility}>
                                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} size="lg" />
                                </div>
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="********"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="group103">
                            <div className="personIcons1">
                                <FontAwesomeIcon icon={faUser} size="lg" />
                                <div className="line line"></div>
                            </div>
                            <div className="loactionIcons1">
                                <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                                <div className="line line"></div>
                            </div>
                            <div className="industryIcons1">
                                <FontAwesomeIcon icon={faIndustry} size="lg" />
                                <div className="line line"></div>
                            </div>
                            <div className="DashIcons1">
                                <FontAwesomeIcon icon={faTachometerAlt} size="lg" />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="submitbtn">
                            <div id="emailCheck" className="error" style={{ color: "red" }}></div>
                            {!formSubmitted ?
                                <input type="submit" name="influregistrbtn" id="yourButtonId" value="Next" onClick={handleSubmit} style={{ cursor: "pointer" }} />
                                :
                                <input type="submit" name="influregistrbtn" id="yourButtonId" value="Loading..." disabled />
                            }
                        </div>
                    </form>

                    <HaveAccountfooter />
                </div>
            </div>
        </div>
    );
}

export default Basicdetails;
