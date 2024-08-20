
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import Verification from './otpVerifi.jsx';
import CompleteProfile from './userprofile.jsx';
import Basicdetails from './basicdetails.jsx';
import SocailMedia from './SocailMedial.jsx';
import UploadVideoAuth from './filechange.jsx';
import { makeApi } from '../../../api/callApi.tsx';
import { Link, useNavigate } from "react-router-dom";
import MainLoader from '../../../utils/loader.jsx';

const CreateAccount = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '', 
    password: '',
    pin: '',
    country: '',
    address: '',
    state: '',
    city: '',
    selectedGender: '',
    dob: '',
    gender: '',
    selectedLanguages: "",
    instaUser: '',
    youtubeUser: '',
    linkdinUser: '',
    twiterUser: '',
    instaResult: '',
    youtubeResult: '',
    linkdinResult: '',
    twiterResult: '',
    Industry: '',
    videoUrl: '',
    userprofile: '',
    regs_date: formatDate(new Date())
  });
  function formatDate(date) {
    const options = { day: '2-digit', month: 'short', year: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'UTC' };
    return new Intl.DateTimeFormat('en-GB', options).format(date).replace(',', '');
  }

  const [currentStage, setCurrentStage] = useState("user-Basic-Details");
  // const [currentStage, setCurrentStage] = useState("Complete Profile");
  const [loading , setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await makeApi("/api/register-user", "POST", { formData });
      localStorage.setItem("token", response.data.token);
      toast.success("Account created successfully", {
        onClose: () => {  
          navigate("/verified/creator/home");
          // if (response.data.user.role === "admin") {
          //   navigate("/admin/admin-dashboard");
          // }
        }
      });
    } catch (error) {
      toast.error(error.response.message);
      console.error("Error sending data:", error);
    } finally {
      setLoading(false);
    }
  };

  // current page UI rendering
  const handleOtpVerified = () => {
    setCurrentStage("Complete Profile");
  };

  // collecting data from other page
  const handleBaicDetailsSubmit = async (basicDetails) => {
    await setFormData(prevData => ({ ...prevData, ...basicDetails }));
    setCurrentStage("otp-verification");
  };

  const handleProfileSubmit = async (profileData) => {
    await setFormData(prevData => ({ ...prevData, ...profileData }));
    setCurrentStage("Social Media");
  };

  const handelUserSocialData = async (userSocalData) => {
    const { socialMediaData, industry, totalFollowers, socialMediaIds } = userSocalData;
    await setFormData(prevData => ({
      ...prevData,
      influ_soc_link: socialMediaIds,
      Industry: industry
      // socialMediaData,
      // totalFollowers,
      // socialMediaIds
    }));
    setCurrentStage("VideoUpload");
  };

  const handleVideoUpload = async (videoData) => {
    await setFormData(prevData => ({ ...prevData, ...videoData }));
    handleSubmit();
  };

  // render UI
  const renderCurrentStage = () => {
    switch (currentStage) {
      case "user-Basic-Details":
        return (
          <Basicdetails onBaiscDetailsFill={handleBaicDetailsSubmit} />
        )
      case "otp-verification":
        return <Verification email={formData.email} onOtpVerified={handleOtpVerified} />;
      case "Complete Profile":
        return <CompleteProfile username={formData.username} onSubmit={handleProfileSubmit} />
      case "Social Media":
        return <SocailMedia userSocialData={handelUserSocialData} />
      case "VideoUpload":
        return <UploadVideoAuth onVideoUpload={handleVideoUpload} />
      default:
        return null;
    }
  };

  return (
    <>
            {loading && <div className='loaderbgcolor' > <MainLoader /></div>}

      <ToastContainer />
      {renderCurrentStage()}
    </>
  );
};

export default CreateAccount;


// 
