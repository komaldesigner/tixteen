import React, { useEffect, useState } from 'react'
import "../../../styles/user/creator/createdordeteils.css"
import notification from "../../../assets/img/notification (1).png"
import MyAccountheader from './myAccountheader'
import { makeApi } from '../../../api/callApi.tsx'
import MainLoader from '../../../utils/loader.jsx'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


function Createdordeteils() {
    const percentage = 70
    const location = useLocation();
    const [userDatas, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const fetchUser = async () => {
        try {
            const res = await makeApi('/api/my-profile', 'GET');
            setUserData(res.data.user);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchUser();
    }, [location]);

    if (isLoading) {
        return <div>
            <div className='loaderbgcolor' > <MainLoader /></div>

        </div>;
    }
    return (
        <div>
            {isLoading && <div className='loaderbgcolor'style={{top:"0"}} > <MainLoader /></div>}
            <MyAccountheader BackPath={'/verified/creator/home'} />

            {/* upper section */}
            <Link style={{ textDecoration: "none" }} to={"/verified/user/my-details"} >
            <div className='createdordeteils_user_uppersection ps-3' >
                {/* image */}
                <div>
                    <img src={userDatas.profile_img} style={{ borderRadius: "50%", maxWidth: "80px", maxHeight: "80px" }} alt="" className='createdordeteils_user_image' />
                </div>
                {/* details */}
                <div className='createdordeteils_user_details' >
                    <div className='createdordeteils_user_name bold_text text-black' >Hi, {userDatas.user_name} </div>
                    <div className='createdordeteils_user_description bold_text text-primary' >Complete your account on here </div>
                </div>
                {/* notification */}
                {/* <div>
                    <img src={notification} alt="" />
                </div> */}
            </div>
            {/* profile complete */}
            {/* <div>
                <div className="hairline-container">
                    <div className="hairline">
                        <div className="filled" style={{ width: `${percentage}%` }}></div>
                        <div className="unfilled" style={{ width: `${100 - percentage}%` }}></div>
                    </div>
                </div>
                <div className='createdordeteils_profile_complete' >

                    <div className='createdordeteils_profile_complete_text bold_text' >
                        profile 70% complete
                    </div>
                    <div className='createdordeteils_profile_pending_text bold_text' >
                        pending Steps..
                    </div>
                </div>
            </div> */}
            </Link>
        </div>
    )
} 

export default Createdordeteils