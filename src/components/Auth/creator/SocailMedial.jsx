
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import insta from "../../../assets/img/insta (1).png";
import fb2 from "../../../assets/img/icon--fb2.png";
import youtue from "../../../assets/img/icon--youtue.png";
import twiter from "../../../assets/img/icon--twiter.png";
import linkdin from "../../../assets/img/icon--linkdin.png";
import locat from '../../../assets/img/locat.png';
import cil_industry from '../../../assets/img/cil_industry.png';
import Vector from '../../../assets/img/Vector (3).png';
import material from '../../../assets/img/material-symbols_person-outline.png';
import MainLoader from '../../../utils/loader';
import HaveAccountfooter from '../../../utils/haveAccountfooter';
import { makeApi } from '../../../api/callApi.tsx';
import { faEye, faEyeSlash, faLock, faUser, faPhone, faEnvelope, faMapMarkerAlt, faIndustry, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../../../styles/Auth/register.css";

function SocialMedia({ userSocialData }) {
    const [industry, setIndustry] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [instaResult, setInstaResult] = useState('');
    const [youtubeResult, setYoutubeResult] = useState('');
    const [instaUser, setInstaUser] = useState('');
    const [youtubeUser, setYoutubeUser] = useState('');
    const [twitterUser, setTwitterUser] = useState('');
    const [linkedinUser, setLinkedinUser] = useState('');
    const [showContinueButton, setShowContinueButton] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [loading, setLoading] = useState(false);
    const [validInstagram, setValidInstagram] = useState(false);
    const [IndustryList, setIndustryList] = useState([]);
    const [filterIndustry, setFilterIndustry] = useState("");
    const [instagramFollowerValid, setInstagramFollowerValid] = useState(true);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://graph.facebook.com/17841401994416697?fields=business_discovery.username(${instaUser}){followers_count}&access_token=EAAHHE4tDdh0BOzQrktlrZA7Tewp6iWIp0d16UWkl7zNVaZAHPg95FKtcwUqv0oyjm9OdjylL0qe2psqwjtD7UFbC3tTfZBZBVpcgiopiRVfN4EmzdQsiVXrSZCpKTpn9tN2ZAl1WTsAOf5SuQtBgEajIjPavtm2FN1YZBNgfrsIYvKy0XlPASfVosf3`);
            if (response) {
                const followersCount = response.data.business_discovery.followers_count;
                setInstaResult(followersCount);

                if (followersCount < 500) {
                    setInstagramFollowerValid(false);
                    toast.error('Instagram followers must be at least 500 to proceed.');
                    setValidInstagram(false);
                    setInstaUser('');
                } else {
                    setInstagramFollowerValid(true);
                    setValidInstagram(true);
                    setShowContinueButton(true)
                }
            }
        } catch (error) {
            console.error('Error:', error.message);
            setInstaUser('');
            toast.error('Invalid Instagram username');
            setValidInstagram(false);
            setInstagramFollowerValid(false);
            setShowContinueButton(false)

        } finally {
            setLoading(false);
        }
    };

    const toggleIndustry = (industryName) => {
        let updatedFilterIndustry;
        const selectedIndustries = filterIndustry ? filterIndustry.split(',') : [];

        if (selectedIndustries.includes(industryName)) {
            updatedFilterIndustry = selectedIndustries.filter(name => name !== industryName).join(',');
        } else {
            if (selectedIndustries.length >= 5) {
                toast.error('You cannot select more than 5 industries');
                return;
            }
            updatedFilterIndustry = [...selectedIndustries, industryName].join(',');
        }
        setFilterIndustry(updatedFilterIndustry);
    };

    const FetchIndustryList = async () => {
        setLoading(true);
        try {
            const res = await makeApi('/v1/get-all-industries', 'GET');
            setIndustryList(res.data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        FetchIndustryList();
    }, []);

    const validateYoutube = async () => {
        try {
            setLoading(true);
            const APIKey = 'AIzaSyDrjEkkPontrgsCdgxnkKq3EUG3VCxZQZE';
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${APIKey}`);
            const subscriberCount = response.data.items[0].statistics.subscriberCount;
            setYoutubeResult(subscriberCount);
        } catch (error) {
            console.error('Error:', error.message);
            toast.error('Invalid YouTube channel ID');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!filterIndustry) {
            toast.error('Please select at least one industry');
            return;
        }

        if (!instaUser && !youtubeUser && !twitterUser && !linkedinUser) {
            toast.error('Please fill in at least one social media field');
            return;
        }

        if (instaUser) {
            await fetchData();
        }
        if (youtubeUser) {
            await validateYoutube();
        }

        // if (instagramFollowerValid) {
        //     setShowContinueButton(true);
        // }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);

        const socialMediaData = [];
        let totalFollowers = 0;

        if (instaUser) {
            socialMediaData.push({
                platform: 'Instagram',
                link: `https://www.instagram.com/${instaUser}`,
                follower: instaResult,
                avgrange: '0',
                verify: '0',
                influ_soc_link: null
            });
            totalFollowers += parseInt(instaResult, 10);
        }

        if (youtubeUser) {
            socialMediaData.push({
                platform: 'youtube',
                link: `https://www.youtube.com/channel/${youtubeUser}`,
                follower: youtubeResult,
                avgrange: '0',
                verify: '0',
                influ_soc_link: null
            });
            totalFollowers += parseInt(youtubeResult, 10);
        }

        try {
            const response = await makeApi('/api/create-social-media', "POST", socialMediaData);
            const socialMediaIds = response.data.data.map(item => item.id).join(',');
            userSocialData({
                socialMediaData,
                industry: filterIndustry,
                totalFollowers,
                socialMediaIds: `${socialMediaIds}`
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        } finally {
            setSubmitting(false);
        }
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {loading && <div className='loaderbgcolor' > <MainLoader /></div>}
        <div className="complete-profile">

            <ToastContainer style={{maxWidth: '300px'}} autoClose={1000} position="top-center" />
 
            <div className="fp1">
                <div  style={{ width: '100%' }}>
                    <div className="Arrow21" id="backButton">
                        <img src="../assets/img/Group 61.png" alt="" style={{ display: 'none' }} />
                        <input type="submit" name="backup2bttn" value="Submit" style={{ display: 'none' }} />
                    </div>

                    <div className="Arrow21hd">
                        <h3>Complete Profile</h3>
                    </div>

                    <div className="accordion-container">
                        <div className="">

                            <div className='industy_accordion'>
                                <div className='industy_accordion-header' onClick={handleToggle}>
                                    <h3>Industry Filter</h3>
                                    <span className={`industy_accordion-icon ${isOpen ? 'open' : ''}`}>
                                        {isOpen ? '-' : '+'}
                                    </span>
                                </div>
                                {isOpen && (
                                    <div className='industy_filter_checkbox_parent_div'>
                                        {IndustryList.map((industry) => (
                                            <div key={industry.name} className='d-flex align-items-center industy_dropdown_checkbox_items'>
                                                <div className='w-25'>
                                                    <input
                                                        type="checkbox"
                                                        id={industry.name}
                                                        value={industry.name}
                                                        checked={filterIndustry.split(',').includes(industry.name)}
                                                        onChange={() => toggleIndustry(industry.name)}
                                                        style={{ width: "20px", height: "20px", cursor: "pointer" }}
                                                    />
                                                </div>
                                                <div className='w-100'>
                                                    <label htmlFor={industry.name}>{industry.name}</label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <span id="error-msg" style={{ color: "red" }}>{errorMsg}</span>
                        </div>
                    </div>

                    <div>
                        <div className="PrimaryPlateform">Primary Platform</div>
                        <div className="social-platform">
                            <div className="insta">
                                <img src={insta} alt="" />
                            </div>
                            <input type="text" name="instagram[]" id="instauser" placeholder="Add User Name" value={instaUser} onChange={(e) => setInstaUser(e.target.value)} />
                            {instaResult && <p>Followers: {instaResult}</p>}
                        </div>
                        <div className="social-platform">
                            <div className="insta">
                                <img src={fb2} alt="" />
                            </div>
                            <input type="text" name="instagram[]" id="facebook" placeholder="Add link" disabled />
                        </div>
                        <div className="social-platform">
                            <div className="insta">
                                <img src={youtue} alt="" />
                            </div>
                            <input type="text" name="instagram[]" id="youtuser" value={youtubeUser} onChange={(e) => setYoutubeUser(e.target.value)} placeholder="Add Channel Id" disabled />
                            {youtubeResult && <p>Subscribers: {youtubeResult}</p>}
                        </div>
                        <div className="social-platform">
                            <div className="insta">
                                <img src={twiter} alt="" />
                            </div>
                            <input type="text" name="instagram[]" id="twitter" placeholder="Add link" value={twitterUser} onChange={(e) => setTwitterUser(e.target.value)}  disabled/>
                        </div>
                        <div className="social-platform">
                            <div className="insta">
                                <img src={linkdin} alt="" />
                            </div>
                            <input type="text" name="instagram[]" id="linkedin" placeholder="Add link" value={linkedinUser} onChange={(e) => setLinkedinUser(e.target.value)} disabled />
                        </div>
                        <span id="socialmedia"></span>
                    </div>

                    {/* <div className="group103">
                        <div className="personIcons1">
                            <img src={material} alt="Person Icon" />
                            <div className="line line2"></div>
                        </div>
                        <div className="loactionIcons1">
                            <img src={locat} alt="Location Icon" />
                            <div className="line line2"></div>
                        </div>
                        <div className="industryIcons1">
                            <img src={cil_industry} alt="Industry Icon" />
                            <div className="line line"></div>
                        </div>
                        <div className="DashIcons1">
                            <img src={Vector} alt="Dash Icon" />
                        </div>
                    </div> */}
                       <div className="group103">
                            <div className="personIcons1">
                                <FontAwesomeIcon icon={faUser} size="lg" />
                                <div className="line line2"></div>
                            </div>
                            <div className="loactionIcons1">
                                <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                                <div className="line line2"></div>
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
                        {!showContinueButton ?
                            <>
                                {submitting ?
                                    <input type="submit" value="Fetching..." id="buttonfinel" name="influregistrbtn"  />
                                    :
                                    <input type="submit" value="Continue" id="buttonfinel" name="influregistrbtn" onClick={(e) => handleSubmit(e)} style={{ cursor: 'pointer' }}  />
                                }
                            </>
                            :
                            <input type="submit" value="Submit" id="buttonfinel" name="influregistrbtn" onClick={handleFormSubmit} />
                        }
                    </div>
                </div>
                {/* Your Already have an account section */}
                {/* <HaveAccountfooter/> */}
            </div>
        </div>
        </>
    );
}

export default SocialMedia;

