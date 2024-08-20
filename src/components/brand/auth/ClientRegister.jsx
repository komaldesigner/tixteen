

import React, { useState } from 'react';
import './ClientRegister.css'; 
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // import Toastify CSS
import Personal from "../../../assets/img/brand/Personal-Information-icon-1.png";
import Industrial from "../../../assets/img/brand/Industrial-selection-icon-1.png";
import Content from "../../../assets/img/brand/Content-Capabilities-icon-1.png";
import Plaform from "../../../assets/img/brand/Plaform-Selection-vector.png";
import Next from "../../../assets/img/brand/Next-icon.png";
import previous from "../../../assets/img/brand/previous-icon.png";
import PersonalInformation from "../../../assets/img/brand/Personal-Information-vector.png";
import ContentCapabilitiesvector from "../../../assets/img/brand/Content-Capabilities-vector.png";
import { makeApi } from '../../../api/callApi.tsx';





const ClientRegister = () => {
  const [mobileError, setMobileError] = useState('');
  const [form, setForm] = useState({ 
    ClientName: '',
    mobile: '',
    email: '',
    Nation: '',
    State: '',
    City: '',
    BrandName: '',
    Website: '',
    GSTNo: '',
    Password: '',
    ConfirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const validateMobile = () => {
    const { mobile } = form;
    if (mobile.length !== 10 || !/^\d+$/.test(mobile)) {
      setMobileError('Mobile number must be 10 digits long and contain only numbers.');
    } else {
      setMobileError('');
    }
  };

  const checkPasswordMatch = () => {
    if (form.Password !== form.ConfirmPassword) {
      toast.error('Passwords do not match!');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkPasswordMatch()) {
    const requiredFields = [];

    if (!form.ClientName) {
      requiredFields.push('ClientName');
    }
    if (!form.mobile) {
      requiredFields.push('mobile');
    }
    if (!form.email) {
      requiredFields.push('email');
    }
    if (!form.Nation) {
      requiredFields.push('Nation');
    }
    if (!form.State) {
      requiredFields.push('State');
    }
    if (!form.City) {
      requiredFields.push('City');
    }
    if (!form.BrandName) {
      requiredFields.push('BrandName');
    }
    if (!form.Website) {
      requiredFields.push('Website');
    }
   
    if (!form.Password) {
      requiredFields.push('Password');
    }
    if (!form.ConfirmPassword) {
      requiredFields.push('ConfirmPassword');
    }




      if (requiredFields.length > 0) {
        const fieldNames = requiredFields.join(", ");
        toast.error(`Please fill all required fields: ${fieldNames}`);
        return;
      }
      try {
        const response = await makeApi('/brand/api/register-brand', 'POST', {
          ClientName: form.ClientName,
          EmailId: form.email,
          PhoneNumber: form.mobile,
          Nation: form.Nation,
          State: form.State,
          City: form.City,
          BrandName: form.BrandName,
          Website: form.Website,
          GSTNo: form.GSTNo,
          Password: form.Password
        });
        toast.success("Brand created successfully.");
        // Handle additional logic after successful registration
      } catch (error) {
        toast.error(error.response.data.message || "Registration failed.");
      }
    }
  };

  return (
    <>
      <ToastContainer/>
      <div className="regbanner1">
        <div id="pageloader">
          <img src="assets/img/circle.gif" alt="processing..." />
        </div>
        <div className="row">
          <div className="col-lg-12" style={{ margin: 'auto' }}>
            <div className="registersec">
              <h2>CLIENT REGISTRATION</h2>
              <p>Register yourself to the world of Tixteen.</p>
              <div className="regsteppanel  "  >
                <div className='col-6' style={{ margin: 'auto' }} >
                  <div className="regstatusline"></div>
                  <div className="regstimgcont">
                    <div className="row ">
                      <div className="col-4  "  >
                        <a href="#regpersonal">
                          <div id="regstatcolor1" className="regstepimg">
                            <img id="regstatimg1" src={Personal} alt="Personal Information" />
                          </div>
                          <div className='d-flex justify-content-center'>
                            <p>Personal Information</p>
                          </div>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#regindustry">
                          <div id="regstatcolor2" className="regstepimg">
                            <img id="regstatimg2" src={Industrial} alt="Brand Information" />
                          </div>
                          <div className='d-flex justify-content-center'>

                            <p>Brand Information</p>
                          </div>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#regcontent">
                          <div id="regstatcolor4" className="regstepimg">
                            <img id="regstatimg4" src={Content} alt="Complete Registration" />
                          </div>
                          <div className='d-flex justify-content-center'>

                            <p>Complete Registration</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form id="regForm" onSubmit={handleSubmit} className="newregsecall">
                {/* Personal Information */}
                <div className="row client_register_images_sections" id="regpersonal">
                  <div className="col-lg-4">
                    <div className="regsidestatimg regpersonalimg">
                      <img src={Plaform} alt="Personal Information" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="formsection persnlinf">
                      <h4>Personal Information</h4>
                      <div className="formcont">
                        <div className="row">
                          <div className="col-sm-4">
                            <input type="text" name="ClientName" placeholder="Contact Name*" value={form.ClientName} onChange={handleInputChange} required />
                          </div>
                          <div className="col-sm-4">
                            <div style={{ display: 'flex', alignItems: 'baseline' }}>
                              +91<input type="tel" id="mobile" name="mobile" placeholder="Mobile Number*" value={form.mobile} onChange={(e) => { handleInputChange(e); validateMobile(); }} required />
                            </div>
                            {mobileError && <span style={{ color: 'red' }}>{mobileError}</span>}
                          </div>
                          <div className="col-sm-4">
                            <input type="email" name="email" placeholder="Email Id*" value={form.email} onChange={handleInputChange} required />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <input type="text" name="Nation" placeholder="Country*" value={form.Nation} onChange={handleInputChange} required />
                          </div>
                          <div className="col-sm-4">
                            <input type="text" name="State" placeholder="State*" value={form.State} onChange={handleInputChange} required />
                          </div>
                          <div className="col-sm-4">
                            <input type="text" name="City" placeholder="City*" value={form.City} onChange={handleInputChange} required />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="regfrmdwnupbtncnt">
                      <div className="regnextbtn">
                        <a href="#regindustry"><img src={Next} alt="Next" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Brand Information */}
                <div className="row client_register_images_sections" id="regindustry">
                  <div className="col-lg-4">
                    <div className="regsidestatimg regindustryimg">
                      <img src={PersonalInformation} alt="Brand Information" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="formsection persnlinf">
                      <h4>Brand Information</h4>
                      <div className="formcont">
                        <div className="row">
                          <div className="col-sm-6">
                            <input type="text" name="BrandName" placeholder="Brand Name*" value={form.BrandName} onChange={handleInputChange} required />
                          </div>
                          <div className="col-sm-6">
                            <input type="text" name="Website" placeholder="Website*" value={form.Website} onChange={handleInputChange} required />
                          </div>
                          <div className="col-sm-12">
                            <input type="text" name="GSTNo" placeholder="GST No" value={form.GSTNo} onChange={handleInputChange} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="regfrmdwnupbtncnt">
                      <div className="regnextbtn">
                        <a href="#regpersonal"><img src={previous} alt="Previous" /></a>
                      </div>
                      <div className="regnextbtn">
                        <a href="#regcontent"><img src={Next} alt="Next" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Complete Registration */}
                <div className="row client_register_images_sections" id="regcontent">
                  <div className="col-lg-4">
                    <div className="regsidestatimg regcontentimg">
                      <img src={ContentCapabilitiesvector} alt="Complete Registration" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="formsection persnlinf">
                      <h4>Complete Registration</h4>
                      <div className="formcont">
                        <div className="row">
                          <div className="col-sm-6" style={{ position: 'relative' }}>
                            <input type="password" id="password" name="Password" placeholder="Password*" value={form.Password} onChange={handleInputChange} required />
                            <i className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`} onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 'calc(1vw + 1vh)', top: '40%' }}></i>
                          </div>
                          <div className="col-sm-6" style={{ position: 'relative' }}>
                            <input type="password" id="password2" name="ConfirmPassword" placeholder="Confirm Password*" value={form.ConfirmPassword} onChange={handleInputChange} required />
                            <i className={`fas ${showPassword2 ? 'fa-eye' : 'fa-eye-slash'}`} onClick={() => setShowPassword2(!showPassword2)} style={{ position: 'absolute', right: 'calc(1vw + 1vh)', top: '40%' }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="regfrmdwnupbtncnt">
                      <div className="regnextbtn">
                        <a href="#regindustry"><img src={previous} alt="Previous" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4"></div>
                  <div className="col-lg-8" style={{ textAlign: 'center' }}>
                    <input type="submit" name="register" className="btn btn-dark" value="Sign Up" style={{ fontSize: 'calc(1vw + 1.1vh)' }} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientRegister;
