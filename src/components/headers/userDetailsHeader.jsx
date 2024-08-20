import React, { useEffect, useState } from 'react'
import "../../styles/headers/userdetailsHedaer.css"
import tixteen_icon from "../../assets/img/tixteen_icon.png"
import userDetsils_icon from "../../assets/img/userDetsils_icon.png"
import user from "../../assets/img/user.png"
import { Link } from 'react-router-dom'
import { makeApi } from '../../api/callApi.tsx'
function UserDetailsHeader() {
    const [isloading, setIsloading] = useState(false);
    const [userData, setUserData] = useState({});

    const fetchuser = async () => {
        try {
            const res = await makeApi('/api/my-profile', 'GET');
            console.log(res.data.user);
            setUserData(res.data.user);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchuser();
    }, []);
    return (
        <div className='main_user_details_header' >
            <div> <img src={tixteen_icon} /> </div>
            <div className='main_user_details_header_right_div' >
                <div className='main_user_details_header_right_div_text' >Hello, <br />{userData.user_name} </div>
                <Link to={"/verified/user/my-account"} >
                    <div className='main_user_details_header_right_div_icon' >
                        {/* <div> <img src={userDetsils_icon} className='userDetsils_icon_header' /> </div> */}
                        <div> <img src={userDetsils_icon} className='userDetsils_icon_header' /> </div>
                        <img src={userData.profile_img} style={{ borderRadius: "50%", maxWidth: "50px", maxHeight: "50px" }} />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default UserDetailsHeader