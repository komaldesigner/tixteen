
// import React, { useEffect, useState } from 'react';
// import { ToastContainer, toast } from "react-toastify";
// import userImage from "../../../assets/img/profileimg.png";
// import plusCircle from "../../../assets/img/plusCircle.png";
// import PinCodeImage from "../../../assets/img/Group 160.png";
// import ArrowImage from "../../../assets/img/Group 61.png";
// import GenderImage from "../../../assets/img/Group 7859.png";
// import locat from '../../../assets/img/locat.png';
// import axios from 'axios';
// import uploadToCloudinary from '../../../utils/cloudinaryUpload';
// import "react-toastify/dist/ReactToastify.css";
// import { makeApi } from '../../../api/callApi.tsx';
// import MainLoader from '../../../utils/loader.jsx';

// function CompleteProfile({ username, onSubmit }) {
//     const [previewSrc, setPreviewSrc] = useState(userImage);
//     const [pin, setPin] = useState('');
//     const [country, setCountry] = useState('');
//     const [address, setAddress] = useState('');
//     const [state, setState] = useState('');
//     const [city, setCity] = useState('');
//     const [selectedGender, setSelectedGender] = useState('');
//     const [dob, setDob] = useState('');
//     const [selectedLanguages, setSelectedLanguages] = useState([]);
//     const [mselectedLanguages, msetSelectedLanguages] = useState([]);
//     const [mdropdownOpen, msetDropdownOpen] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     const [profileImgError, setProfileImgError] = useState('');
//     const [pinError, setPinError] = useState('');
//     const [languageError, setLanguageError] = useState('');
//     const [dateError, setDateError] = useState('');
//     const [userprofile, setUserprofile] = useState();

//     const [loading, setLoading] = useState(false);
//     const [languages, setLanguages] = useState([]);
//     const [filteredlanguages, setFilterIndustry] = useState("");

//     const [isOpen, setIsOpen] = useState(false);

//     const handleToggle = () => {
//         setIsOpen(!isOpen);
//     };
//     const toggleIndustry = (industryName) => {
//         let updatedFilterIndustry;
//         const selectedIndustries = filteredlanguages ? filteredlanguages.split(',') : [];

//         if (selectedIndustries.includes(industryName)) {
//             updatedFilterIndustry = selectedIndustries.filter(name => name !== industryName).join(',');
//         } else {
//             updatedFilterIndustry = [...selectedIndustries, industryName].join(',');
//         }
//         setFilterIndustry(updatedFilterIndustry);
//     };


//     const fetchLanguages = async () => {
//         setLoading(true);
//         try {
//             const res = await makeApi('/v1/get-all-languages', 'GET');

//             setLanguages(res.data.data);
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     };
//     useEffect(() => {
//         fetchLanguages();
//     }, []);



//     const handleProfileImgChange = async (e) => {
//         try {
//             setIsLoading(true);
//             const videoUrl = await uploadToCloudinary(e.target.files[0]);
//             setUserprofile(videoUrl);
//             setIsLoading(false);

//         } catch (error) {
//             setIsLoading(false);
//             toast.error("Image upload failed");

//         } finally {
//             setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (pin.length === 6) {
//             searchPin();
//         }
//     }, [pin]);

//     const searchPin = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.get(`https://api.postalpincode.in/pincode/${pin}`);
//             const data = response.data;

//             if (data && data.length > 0 && data[0].Status === 'Success') {
//                 setCountry(data[0].PostOffice[0].Country);
//                 setState(data[0].PostOffice[0].State);
//                 setCity(data[0].PostOffice[0].District);
//             } else {
//                 setCountry('');
//                 setState('');
//                 setCity('');
//             }
//         } catch (error) {
//             console.log(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleCheckboxChange = (event) => {
//         const { value, checked } = event.target;
//         if (checked) {
//             msetSelectedLanguages([...mselectedLanguages, value]);
//         } else {
//             msetSelectedLanguages(mselectedLanguages.filter(lang => lang !== value));
//         }
//     };

//     const toggleDropdown = () => {
//         msetDropdownOpen(!mdropdownOpen);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!pin) {
//             toast.error("Please fill pin");
//             return;
//         }
//         if (!country) {
//             toast.error("Please fill country");
//             return;
//         }
//         if (!address) {
//             toast.error("Please fill address");
//             return;
//         }
//         if (!state) {
//             toast.error("Please fill state");
//             return;
//         }
//         if (!city) {
//             toast.error("Please fill city");
//             return;
//         }
//         if (!selectedGender) {
//             toast.error("Please select gender");
//             return;
//         }
//         if (!dob) {
//             toast.error("Please select date of birth");
//             return;
//         }
//         if (!filteredlanguages) {
//             toast.error("Please select at least one language");
//             return;
//         }
//         if (!userprofile) {
//             toast.error("Please upload profile image");
//             return;
//         }

//         const formData = {
//             pin,
//             country,
//             address,
//             state,
//             city,
//             selectedGender,
//             userprofile,
//             dob,
//             selectedLanguages: filteredlanguages, 
//         };
//         onSubmit(formData);
//     };

//     const minDob = new Date();
//     minDob.setFullYear(minDob.getFullYear() - 4);

//     return (
//         <>
//             {loading && <div className='loaderbgcolor' > <MainLoader /></div>}
//             <ToastContainer style={{ width: "300px" }} />
//             <div className="complete-profile">
//                 <div className="fp1">
//                     <div className="Arrow21" style={{ display: 'none' }}>
//                         <img src={ArrowImage} alt="..." />
//                     </div>
//                     <div className="Arrow21hd">
//                         <h3>Complete Profile</h3>
//                     </div>
//                 </div>

//                 <form id="myform" encType="multipart/form-data">
//                     <div style={{ display: 'flex', alignItems: 'center', margin: '7% 0 5%' }}>
//                         <div className="profile">
//                             <label htmlFor="profileimg">
//                                 <input className="file-upload" type="file" accept="image/jpg, image/jpeg, image/png" id="profileimg" name="profileimg" style={{ display: 'none' }} onChange={handleProfileImgChange} />
//                                 <div className="circle">
//                                     {isLoading ? (
//                                         <div className="loader"></div>
//                                     ) : (
//                                         <img className="profile_pic" id="preview" src={userprofile ? userprofile : userImage} alt="Profile Image" />
//                                     )}
//                                     <div className="p-image upload-button">
//                                         <img src={plusCircle} alt="Upload Image" />
//                                     </div>
//                                 </div>
//                             </label>
//                             {profileImgError && <p style={{ color: 'red' }}>{profileImgError}</p>}
//                         </div>
//                         <div>
//                             <div className="HiUsername">Hi, {username}</div>
//                             <label htmlFor="pi" className="UploadProfileLabel upload-button">
//                                 <input className="file-upload" type="file" accept="image/jpg, image/jpeg, image/png" />
//                                 Upload Profile Picture
//                             </label>
//                         </div>
//                     </div>

//                     <div className="pfbox">
//                         <div className="pf">
//                             <label htmlFor="pin">Pincode</label>
//                             <div className="pinIcon">
//                                 <img src={PinCodeImage} alt="" />
//                             </div>
//                             <input type="number" name="shippin" id="pin" placeholder="******"
//                                 value={pin}
//                                 onChange={(e) => setPin(e.target.value)}
//                                 onBlur={searchPin}
//                             />
//                             <span id="result"></span>
//                             <span id="error-msg">{pinError}</span>
//                         </div>
//                         <div className="pf">
//                             <label htmlFor="cntry">Country</label>
//                             <div className="cntryIcon">
//                                 <img src={PinCodeImage} alt="" />
//                             </div>
//                             <input type="text" name="shipcountry" value={country} onChange={(e) => setCountry(e.target.value)} readOnly className="cntryico" />
//                         </div>
//                     </div>

//                     <div className="pfbox">
//                         <div className="pf">
//                             <label htmlFor="state">State</label>
//                             <div className="cntryIcon">
//                                 <img src={PinCodeImage} alt="" />
//                             </div>
//                             <input type="text" name="shipstate" readOnly value={state} onChange={(e) => setState(e.target.value)} id="state" />
//                         </div>
//                         <div className="pf">
//                             <label htmlFor="city">City</label>
//                             <div className="cntryIcon">
//                                 <img src={PinCodeImage} alt="" />
//                             </div>
//                             <input type="text" name="shipcity" readOnly value={city} onChange={(e) => setCity(e.target.value)} id="city" />
//                         </div>
//                     </div>
//                     <div className="pfbox">
//                         <div className="pf">
//                             <label htmlFor="gender">Gender</label>
//                             <div className="cntryIcon">
//                                 <img src={GenderImage} alt="" />
//                             </div>
//                             <select id="gender" name="gender" value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
//                                 <option value="">Select Gender</option>
//                                 <option value="Male">Male</option>
//                                 <option value="Female">Female</option>
//                                 <option value="Other">Other</option>
//                             </select>
//                         </div>
//                         <div className="pf">
//                             <label htmlFor="DOB">DOB</label>
//                             <input type="date" name="dob" id="bday" placeholder="DD/MM/YYYY" value={dob} max={minDob.toISOString().split('T')[0]} onChange={(e) => setDob(e.target.value)} />
//                             <span className="doberror">{dateError}</span>
//                         </div>
//                     </div>
//                     <div className="pfbox">
//                         <div className="pf">
//                             <label htmlFor="Address">Address</label>
//                             <div className="cntryIcon">
//                                 <img src={locat} alt="" />
//                             </div>
//                             <input type="text" name="Address" id="Address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
//                         </div>
//                     </div>
//                     <div className="accordion-container">
//                         <div className="">

//                             <div className='industy_accordion'>
//                                 <div className='industy_accordion-header' onClick={handleToggle}>
//                                     <h6>Language</h6>
//                                     <span className={`industy_accordion-icon ${isOpen ? 'open' : ''}`}>
//                                         {isOpen ? '-' : '+'}
//                                     </span>
//                                 </div>
//                                 {isOpen && (
//                                     <div className='industy_filter_checkbox_parent_div'>
//                                         {languages.map((industry) => (
//                                             <div key={industry.language} className='d-flex align-items-center industy_dropdown_checkbox_items'>
//                                                 <div className='w-25'>
//                                                     <input
//                                                         type="checkbox"
//                                                         id={industry.language}
//                                                         value={industry.language}
//                                                         checked={filteredlanguages.split(',').includes(industry.language)}
//                                                         onChange={() => toggleIndustry(industry.language)}
//                                                         style={{ width: "20px", height: "20px", cursor: "pointer" }}
//                                                     />
//                                                 </div>
//                                                 <div className='w-100'>
//                                                     <label htmlFor={industry.language}>{industry.language}</label>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>






//                     <div className="profilebtn">
//                         <input type="submit" value="Submit" name="influregistrbtn" onClick={(e) => handleSubmit(e)} />
//                     </div>
//                 </form>
//             </div>
//         </>
//     );
// }

// export default CompleteProfile;


import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMapPin, faUser, faArrowLeft, faCalendarAlt, faGlobe, faGenderless } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import { faMapMarkerAlt, faIndustry, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import uploadToCloudinary from '../../../utils/cloudinaryUpload';
import "react-toastify/dist/ReactToastify.css";
import { makeApi } from '../../../api/callApi.tsx';
import MainLoader from '../../../utils/loader.jsx';

function CompleteProfile({ username, onSubmit }) {
    const [previewSrc, setPreviewSrc] = useState('');
    const [pin, setPin] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [dob, setDob] = useState('');
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [mselectedLanguages, msetSelectedLanguages] = useState([]);
    const [mdropdownOpen, msetDropdownOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const [profileImgError, setProfileImgError] = useState('');
    const [pinError, setPinError] = useState('');
    const [languageError, setLanguageError] = useState('');
    const [dateError, setDateError] = useState('');
    const [userprofile, setUserprofile] = useState();

    const [loading, setLoading] = useState(false);
    const [languages, setLanguages] = useState([]);
    const [filteredlanguages, setFilterIndustry] = useState("");

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const toggleIndustry = (industryName) => {
        let updatedFilterIndustry;
        const selectedIndustries = filteredlanguages ? filteredlanguages.split(',') : [];

        if (selectedIndustries.includes(industryName)) {
            updatedFilterIndustry = selectedIndustries.filter(name => name !== industryName).join(',');
        } else {
            updatedFilterIndustry = [...selectedIndustries, industryName].join(',');
        }
        setFilterIndustry(updatedFilterIndustry);
    };

    const fetchLanguages = async () => {
        setLoading(true);
        try {
            const res = await makeApi('/v1/get-all-languages', 'GET');
            setLanguages(res.data.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLanguages();
    }, []);

    // const handleProfileImgChange = async (e) => {
    //     try {
    //         setIsLoading(true);
    //         const videoUrl = await uploadToCloudinary(e.target.files[0]);
    //         setUserprofile(videoUrl);
    //         setIsLoading(false);
    //     } catch (error) {
    //         setIsLoading(false);
    //         toast.error("Image upload failed");
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    const handleProfileImgChange = async (e) => {
        try {
            setUploading(true); // Show loader
            setProgress(0);    // Reset progress

            const uploadTask = uploadToCloudinary(e.target.files[0], (event) => {
                if (event.loaded && event.total) {
                    const percent = Math.round((event.loaded / event.total) * 100);
                    setProgress(percent); // Update progress
                }
            });

            const videoUrl = await uploadTask;
            setUserprofile(videoUrl);
        } catch (error) {
            toast.error("Image upload failed");
        } finally {
            setUploading(false); // Hide loader
        }
    };


    useEffect(() => {
        if (pin.length === 6) {
            searchPin();
        }
    }, [pin]);

    const searchPin = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.postalpincode.in/pincode/${pin}`);
            const data = response.data;

            if (data && data.length > 0 && data[0].Status === 'Success') {
                setCountry(data[0].PostOffice[0].Country);
                setState(data[0].PostOffice[0].State);
                setCity(data[0].PostOffice[0].District);
            } else {
                setCountry('');
                setState('');
                setCity('');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            msetSelectedLanguages([...mselectedLanguages, value]);
        } else {
            msetSelectedLanguages(mselectedLanguages.filter(lang => lang !== value));
        }
    };

    const toggleDropdown = () => {
        msetDropdownOpen(!mdropdownOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!pin) {
            toast.error("Please fill pin");
            return;
        }
        if (!country) {
            toast.error("Please fill country");
            return;
        }
        if (!address) {
            toast.error("Please fill address");
            return;
        }
        if (!state) {
            toast.error("Please fill state");
            return;
        }
        if (!city) {
            toast.error("Please fill city");
            return;
        }
        if (!selectedGender) {
            toast.error("Please select gender");
            return;
        }
        if (!dob) {
            toast.error("Please select date of birth");
            return;
        }
        if (!filteredlanguages) {
            toast.error("Please select at least one language");
            return;
        }
        if (!userprofile) {
            toast.error("Please upload profile image");
            return;
        }

        const formData = {
            pin,
            country,
            address,
            state,
            city,
            selectedGender,
            userprofile,
            dob,
            selectedLanguages: filteredlanguages,
        };
        onSubmit(formData);
    };

    const minDob = new Date();
    minDob.setFullYear(minDob.getFullYear() - 4);

    return (
        <>
            {loading && <div className='loaderbgcolor'><MainLoader /></div>}
            <ToastContainer style={{ width: "300px" }} position="top-center" />
            <div className="complete-profile">
                <div className="fp1">
                    <div className="Arrow21" style={{ display: 'none' }}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <div className="Arrow21hd">
                        <h3>Complete Profile</h3>
                    </div>
                </div>

                <form id="myform" encType="multipart/form-data">
                    <div style={{ display: 'flex', alignItems: 'center', margin: '7% 0 5%' }}>
                        {/* <div className="profile">
                            <label htmlFor="profileimg">
                                <input className="file-upload" type="file" accept="image/jpg, image/jpeg, image/png" id="profileimg" name="profileimg" style={{ display: 'none' }} onChange={handleProfileImgChange} />
                                <div className="circle">
                                    {isLoading ? (
                                        <div className="loader"></div>
                                    ) : (
                                        <img className="profile_pic" id="preview" src={userprofile ? userprofile : previewSrc} alt="Profile Image" />
                                    )}
                                    <div className="p-image upload-button">
                                        <FontAwesomeIcon icon={faPlusCircle} size="2x" />
                                    </div>
                                </div>
                            </label>
                            {profileImgError && <p style={{ color: 'red' }}>{profileImgError}</p>}
                        </div> */}
                        {uploading && (
                            <div className="uploading-overlay">
                                <div className="upload-progress-bar" style={{ width: `${progress}%` }}></div>
                                <div className="upload-loader"></div>
                                <div className="upload-progress-text">{progress}%</div>
                            </div>
                        )}

                        <div className="profile">
                            <label htmlFor="profileimg">
                                <input className="file-upload" type="file" accept="image/jpg, image/jpeg, image/png" id="profileimg" name="profileimg" style={{ display: 'none' }} onChange={handleProfileImgChange} />
                                <div className="circle">
                                    <img className="profile_pic" id="preview" src={userprofile ? userprofile : previewSrc} alt="Profile Image" />
                                    <div className="p-image upload-button">
                                        <FontAwesomeIcon icon={faPlusCircle} size="2x" />
                                    </div>
                                </div>
                            </label>
                            {profileImgError && <p style={{ color: 'red' }}>{profileImgError}</p>}
                        </div>

                        <div>
                            <div className="HiUsername">Hi, {username}</div>
                            <label htmlFor="pi" className="UploadProfileLabel upload-button">
                                <input className="file-upload" type="file" accept="image/jpg, image/jpeg, image/png" />
                                Upload Profile Picture
                            </label>
                        </div>
                    </div>

                    <div className="pfbox">
                        <div className="pf">
                            <label htmlFor="pin">Pincode</label>
                            <div className="pinIcon">
                                <FontAwesomeIcon icon={faMapPin} />
                            </div>
                            <input type="number" name="shippin" id="pin" placeholder="******"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                onBlur={searchPin}
                            />
                            <span id="result"></span>
                            <span id="error-msg">{pinError}</span>
                        </div>
                        <div className="pf">
                            <label htmlFor="cntry">Country</label>
                            <div className="cntryIcon">
                                <FontAwesomeIcon icon={faGlobe} />
                            </div>
                            <input type="text" name="shipcountry" value={country} onChange={(e) => setCountry(e.target.value)} readOnly className="cntryico" />
                        </div>
                    </div>

                    <div className="pfbox">
                        <div className="pf">
                            <label htmlFor="state">State</label>
                            <div className="cntryIcon">
                                <FontAwesomeIcon icon={faMapPin} />
                            </div>
                            <input type="text" name="shipstate" readOnly value={state} onChange={(e) => setState(e.target.value)} id="state" />
                        </div>
                        <div className="pf">
                            <label htmlFor="city">City</label>
                            <div className="cntryIcon">
                                <FontAwesomeIcon icon={faMapPin} />
                            </div>
                            <input type="text" name="shipcity" readOnly value={city} onChange={(e) => setCity(e.target.value)} id="city" />
                        </div>
                    </div>
                    <div className="pfbox">
                        <div className="pf">
                            <label htmlFor="gender">Gender</label>
                            <div className="cntryIcon">
                                <FontAwesomeIcon icon={faGenderless} />
                            </div>
                            <select id="gender" name="gender" value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="pf">
                            <div className='d-flex gap-2' >
                                <label htmlFor="DOB">DOB</label>
                                <div className="dobIcon">
                                </div>
                                <FontAwesomeIcon icon={faCalendarAlt} />
                            </div>
                            <input type="date" name="dob" id="bday" placeholder="DD/MM/YYYY" value={dob} max={minDob.toISOString().split('T')[0]} onChange={(e) => setDob(e.target.value)} />
                            <span className="doberror">{dateError}</span>
                        </div>
                    </div>
                    <div className="pfbox">
                        <div className="pf">
                            <label htmlFor="Address">Address</label>
                            <div className="cntryIcon">
                                <FontAwesomeIcon icon={faMapPin} />
                            </div>
                            <input type="text" name="Address" id="Address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                    </div>
                    <div className="accordion-container">
                        <div className="">
                            <div className='industy_accordion'>
                                <div className='industy_accordion-header' onClick={handleToggle}>
                                    <h6>Language</h6>
                                    <span className={`industy_accordion-icon ${isOpen ? 'open' : ''}`}>
                                        {isOpen ? '-' : '+'}
                                    </span>
                                </div>
                                {isOpen && (
                                    <div className='industy_filter_checkbox_parent_div'>
                                        {languages.map((industry) => (
                                            <div key={industry.language} className='d-flex align-items-center industy_dropdown_checkbox_items'>
                                                <div className='w-25'>
                                                    <input
                                                        type="checkbox"
                                                        id={industry.language}
                                                        value={industry.language}
                                                        checked={filteredlanguages.split(',').includes(industry.language)}
                                                        onChange={() => toggleIndustry(industry.language)}
                                                        style={{ width: "20px", height: "20px", cursor: "pointer" }}
                                                    />
                                                </div>
                                                <div className='w-100'>
                                                    <label htmlFor={industry.language}>{industry.language}</label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="group103">
                        <div className="personIcons1">
                            <FontAwesomeIcon icon={faUser} size="lg" />
                            <div className="line line2"></div>
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
                    <div className="profilebtn">
                        <input type="submit" value="Submit" name="influregistrbtn" onClick={(e) => handleSubmit(e)} />
                    </div>
                </form>
            </div>
        </>
    );
}

export default CompleteProfile;
