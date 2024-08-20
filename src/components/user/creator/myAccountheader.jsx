import React from 'react'
import back_arrow from "../../../assets/img/back-arrow.png"
import "../../../styles/user/creator/myaccountHeader.css"
import { Link } from 'react-router-dom'

function MyAccountheader({ BackPath, title }) {
    return (
        <div>
            <Link to={BackPath} className='css_for_link_tag' >
                <div className='back_arrow_parent_div'  >
                    <div>
                        <img src={back_arrow} className='back_arrow_icon_for_back' />
                    </div>
                   
                </div>
            </Link>
        </div>
    )
}

export default MyAccountheader