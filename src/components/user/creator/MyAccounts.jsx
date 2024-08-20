import React from 'react'
import right_icon from "../../../assets/img/right_icon.png"
import creator_image from "../../../assets/img/creator_image.png"
import "../../../styles/user/creator/MyAccounts.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function MyAccounts() {
    const navigate = useNavigate()
    const Logoutuser=()=>{
        localStorage.clear()
        navigate('/auth/login')
    }

    return (
        <div className='main_my_accounts' >
            <div className='bold_text  my_accounts_text '>My Accounts</div>
            <div>
                    <MyAccountsDetails title="Earning" path="/verified/creator/earning/my-earnings" />
                    <MyAccountsDetails title="My Campaigns " path="/verified/creator/campanes/list" />
                {/* <MyAccountsDetails title="Tickets " path="" /> */}
                {/* <MyAccountsDetails title="Notification " path="/verified/report" /> */}
            </div>
            <div className='bold_text  my_accounts_text' onClick={Logoutuser} style={{ cursor: "pointer" }} >Logout</div>

            <div className='text-center mt-5' >
                <img src={creator_image} alt="" />
            </div>
        </div>
    )
}

export default MyAccounts



function MyAccountsDetails({ title, path }) {
    return (
        <div>
            <Link to={path} className='css_for_link_tag text-black' >
                <div className='main_my_accounts_details' >
                    <div className='main_my_accounts_details_earning' >
                        <div className='bold_text  earning_text_my_accounts ' >{title}</div>
                        <div> <img src={right_icon} alt="" /> </div>
                    </div>

                </div>
            </Link>
        </div>
    )
}