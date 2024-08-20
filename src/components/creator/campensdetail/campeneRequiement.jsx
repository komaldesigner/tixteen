import React, { useEffect, useState } from 'react'
import instaIcon from "../../../assets/creator/campens/campeninsta.png"
import FacebookIcon from "../../../assets/creator/campens/campenfacebbokk.png"
import YoutubeIcon from "../../../assets/creator/campens/campenyoutube.png"
// import fb2 from "../../../assets/img/icon--fb2.png"
// import youtue from "../../../assets/img/icon--youtue.png"
import "../../../styles/creator/campainDetsils/campeneRequiement.css"
import { makeApi } from '../../../api/callApi.tsx'

function CampeneRequiement({ campaignID }) {
    
    // const response = await makeApi(`/v1/required-follower/campaign/${id}`, 'GET');
    const [Data, setData] = useState(null);
    console.log("=====================",campaignID);
    console.log(Data);

    useEffect(() => {
        const fetchData = async () => {
            const response = await makeApi(`/V1/required-follower/campaign/74202312258`, "GET");
            setData(response.data.data);
        };
        fetchData();
    }, [campaignID]);

    return (
        <div className='campain_requement_main_div' >
            <div className='bold_text main_requiemnt_text' >Requirement</div>
            {/* social media */}
            <div className='campain_requement_social_media' >
                {/* instagram */}
                <div className='campain_requement_social_media_items' >
                    {/* icon */}
                    <div>
                        <img src={instaIcon} alt="" className='campain_requement_Icon' />
                    </div>
                    <div>
                        {/* numbers */}
                        <div className=' campain_requiemnt_number '>5K</div>
                        {/* items */}
                        <div className='campain_requement_social_media_items_items' >Followers</div>
                    </div>
                </div>
                <span className='bold_text'>
                    or
                </span>
                {/* facebook */}
                <div className='campain_requement_social_media_items'>
                    {/* icon */}
                    <div>
                        <img src={FacebookIcon} alt="" className='campain_requement_Icon' />
                    </div>
                    <div>

                        {/* numbers */}
                        <div className=' campain_requiemnt_number '>20K</div>
                        {/* items */}
                        <div className='campain_requement_social_media_items_items'>Likes</div>
                    </div>

                </div>
                <span className='bold_text'>
                    or
                </span>
                {/* Youtube */}
                <div className='campain_requement_social_media_items'>
                    {/* icon */}
                    <div>
                        <img src={YoutubeIcon} alt="" className='campain_requement_Icon' />
                    </div>
                    <div>

                        {/* numbers */}
                        <div className=' campain_requiemnt_number '  >20K</div>
                        {/* items */}
                        <div className='campain_requement_social_media_items_items'>Likes</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CampeneRequiement