import React from 'react'
import Createdordeteils from '../../user/creator/createdordeteils'
import right_icon from "../../../assets/img/right_icon.png"
import creator_image from "../../../assets/img/creator_image.png"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Accountlist() {
  return (
    <div>
        <div>
        <Createdordeteils/>
        </div>
        {/* list */}
        <div className='main_my_accounts' >
            <div className='bold_text  my_accounts_text '>My Accounts</div>
            <div>
                    <MyAccountsDetails title="Personal Information" path="/verified/user/personal-Information" />
                    <MyAccountsDetails title=" Account Information " path="/verified/user/account-details" />
                    <MyAccountsDetails title="Address " path="/verified/user/my-address" />
                    <MyAccountsDetails title="Banking Information " path="/verified/user/Bank-details" />
            </div>

            <div className='text-center mt-5' >
                <img src={creator_image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Accountlist


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