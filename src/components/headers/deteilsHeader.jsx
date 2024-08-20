import React from 'react'
import "../../styles/headers/deteilsHeader.css"
import tabler_share from "../../assets/img/tabler_share.png"
import back_arrow from "../../assets/img/back-arrow.png"
import { Link } from 'react-router-dom'

function DeteilsHeader({BackPath, title}) {
    return (
        <div className='main_details_header' >
            <div>
                <Link to={BackPath} >
                <img src={back_arrow} className='details_header_icons' />
                </Link>
            </div>
            <div>
                {title}
            </div>
            <div>
                <img src={tabler_share} className='details_header_icons' />
            </div>
        </div>
    )
}

export default DeteilsHeader