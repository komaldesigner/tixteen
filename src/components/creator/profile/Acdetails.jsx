
import React, { useState, useEffect } from 'react';
import BackHEader from '../../headers/backeHeader';
import { Link, useNavigate } from 'react-router-dom';
import { makeApi } from '../../../api/callApi.tsx'; 
import axios from 'axios'; 
import { ToastContainer, toast } from 'react-toastify';


function Acdetails({ userDatas }) {
    const navigate = useNavigate();

    const [age, setAge] = useState('');
    const [date, setDate] = useState(userDatas.dob);
    const [industry, setIndustry] = useState(userDatas.industry);
    const [username, setUsername] = useState();
    const [followersCount, setFollowersCount] = useState("");
    const [instadata,setInstadata]= useState([]);
    const [loading, setLoading] = useState(false);
    const [validInstagram, setValidInstagram] = useState(true);

    useEffect(() => {
        if (userDatas.dob) {
            const calculateAge = (dob) => {
                const birthDate = new Date(dob);
                const today = new Date();
                let age = today.getFullYear() - birthDate.getFullYear();
                const monthDifference = today.getMonth() - birthDate.getMonth();
                if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                return age;
            };
            setAge(calculateAge(userDatas.dob));
        }
    }, [userDatas]);

    const fetchFacebookFollowers = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://graph.facebook.com/17841401994416697?fields=business_discovery.username(${username}){followers_count}&access_token=EAAHHE4tDdh0BOzQrktlrZA7Tewp6iWIp0d16UWkl7zNVaZAHPg95FKtcwUqv0oyjm9OdjylL0qe2psqwjtD7UFbC3tTfZBZBVpcgiopiRVfN4EmzdQsiVXrSZCpKTpn9tN2ZAl1WTsAOf5SuQtBgEajIjPavtm2FN1YZBNgfrsIYvKy0XlPASfVosf3`);
            const followersCount = response.data.business_discovery.followers_count;
            
            if (followersCount < 500) {
                toast.error('Instagram followers must be at least 500 to proceed.');
                setValidInstagram(false);
            }else{
                setFollowersCount(followersCount);
                const dataToSend = {
                    link: `https://www.instagram.com/${username}`,
                    follower :followersCount
                };
        
                try {
                    await makeApi('/api/update-my-social-media', 'PUT', dataToSend);
                    toast.success('Social media details updated successfully.');
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        } catch (error) {
            console.error('Error fetching followers:', error);
            toast.error('Invalid Instagram username');

            toast.error(error)
            setValidInstagram(false);

        } finally {
            setLoading(false);
        }
    };

    const handleSaveUserDetails = async () => {
        const dataToSend = {
            dob: date,
            industry,
            username
        };

        try {
            await makeApi(`/api/update-user/${userDatas._id}`, 'PUT', dataToSend);
            navigate('/verified/user/my-details');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSaveSocialMedia = async () => {
        await fetchFacebookFollowers()
        // if (!validInstagram) {
        //     toast.error('Please ensure Instagram follower count is valid.');
        //     return;
        // }
    };


    const socialMedia = async () => {
        try {
            const response = await makeApi('/api/get-my-social-media', "GET");
            const fullLink = response.data.data[0].link;
            const username = fullLink.split('/').pop();
            setUsername(username);
            // setFollowersCount(response.data.data[0].follower);
            setInstadata(response.data.data[0]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        socialMedia();
    }, []);



    return (
        <div>
            <ToastContainer position='top-center' />
            <div className='main_personal_info_div' style={{ height: "100vh" }}>
                <div>
                    <Link to={"/verified/user/my-details"} style={{ textDecoration: "none", color: "black" }}>
                        <BackHEader title={"Account Details"} />
                    </Link>
                </div>
                <div className='main_influencer_data'>
                    <div>
                        <div>Enter Your Age</div>
                        <div className='mt-1'>
                            <input
                                type="text"
                                value={age}
                                readOnly
                                className='influncer_item_second_input w-100 p-2'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div>

                        {/* Calendar */}
                        <div className='mt-3'>
                            <input
                                type="date"
                                // value={date}
                                value={date || userDatas.dob}
                                onChange={(e) => setDate(e.target.value)}
                                className='influncer_item_second_input w-100 p-2'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div>
                    </div>
                    {/* <div>Industry</div>
                    <div className='mt-1'>
                        <input
                            type="text"
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                            className='influncer_item_second_input w-100 p-2'
                            style={{ border: "1px solid var(--light-gray-color)" }}
                        />
                    </div> */}
                </div>

                <div className='addhar_card_heading'>
                    Primary Account
                </div>
                <div className='main_influencer_data'>
                    <div>
                        <div className='mt-1 d-flex primary_account_div'>
                            <div>
                                <img src='https://tixteen.com/tixteenapp/influencer/assets/svg/Instagram.svg' alt="Instagram" />
                            </div>
                            <div className='w-100'>
                             
                                <input
                                    type="text"
                                    style={{ border: "none", background: "transparent" }}
                                    className='simple_input_filed'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div>{instadata.follower}</div>
                        </div>
                        <small>Add Username Only</small>
                    </div>
                </div>
                <div className='w-100 text-center'>
                    <div className='btn btn-warning w-75 mt-4' onClick={handleSaveUserDetails}>
                        Update Age
                    </div>
                    <div className='btn btn-success w-75 mt-4' onClick={handleSaveSocialMedia}>
                        Update Social Media
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Acdetails;
