// import React from 'react';
// import { Link } from 'react-router-dom';
// import insta_icon from "../../../assets/creator/insta-icon.png";
// import clock_image from "../../../assets/creator/clock_image.png";
// import CardLoader from '../../../utils/cardLoader.jsx';
// import uploadToCloudinary from '../../../utils/cloudinaryUpload.jsx';
// import MainLoader from '../../../utils/loader.jsx';
// import { ToastContainer, toast } from "react-toastify";

// function Earningsummarycards({ data }) {

//     const formatDate = (deadline) => {
//         const dateObj = new Date(deadline);
//         const day = dateObj.getDate().toString().padStart(2, '0');
//         const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
//         const year = dateObj.getFullYear().toString().slice(-2);
//         return `${day}/${month}/${year}`;
//     }; 

//     // Extract campaign details from data
//     const { monthlyData, campaignDetails } = data || {};


//     // Flatten campaignDetails to access individual campaigns
//     const campaignList = data.campaignDetails || [];
//     const toNumber = (value) => {
//         const number = Number(value);
//         return isNaN(number) ? 0 : number;
//     };


//     return (
//         <>
//             <div className='mx-4'>
//                 <div style={{ marginBottom: "130px" }}>
//                     {campaignList.length > 0 ? (
//                         campaignList.map(campaign => (
//                             <div key={campaign._id} className='main_foryou_cart'>
//                                 <div className='main_foryou_cart_image_div'>
//                                     <div className='main_foryou_cart_requirement'>
//                                         <div className='main_foryou_cart_requirement_left'>
//                                             <div className='foryou_cart_ten_kay'>{campaign.followers}</div>
//                                             <div className='text-white requiemnt_message'>
//                                                 <div className='main_foryou_cart_content_payout d-flex gap-1 align-items-center'>
//                                                     <div>
//                                                         <img src={clock_image} alt="" className='' width={"20px"} />
//                                                     </div>
//                                                     <div>
//                                                         {formatDate(campaign.campaignDetails.dead_line)}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className='main_foryou_cart_requirement_left'>

//                                             <div className='text-black requiemnt_message' style={{ fontSize: "14px", fontWeight: "bold" }}>Status: <br />
//                                                 <Link to={`/verified/creator/status/${campaign._id}`}  >
//                                                     <div style={{ cursor: "pointer" }}>

//                                                         {campaign.content_approved || "N/A"}
//                                                     </div>
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <img src="https://tixteen.com/tixteenapp/assets/img/Banner/paidbanner.jpg" alt="" className='main_foryou_cart_image' />
//                                 </div>
//                                 <div className='main_foryou_cart_content'>
//                                     <div className='main_foryou_cart_content_left'>
//                                         <div className='main_foryou_cart_content_left_heading'>
//                                             {campaign.campaignDetails.platforms === "Instagram" && (
//                                                 <div>
//                                                     <Link to={campaign.campaignDetails.platform_link} target="_blank">
//                                                         <img src={insta_icon} alt="" />
//                                                     </Link>
//                                                 </div>
//                                             )}
//                                             {campaign.campaignDetails.platforms === "Facebook" && (
//                                                 <Link to={campaign.campaignDetails.platform_link} target="_blank" style={{ color: "blue" }}>
//                                                     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
//                                                         <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
//                                                     </svg>
//                                                 </Link>
//                                             )}
//                                             <div>{campaign.campaignDetails.campaign_name}</div>
//                                         </div>
//                                     </div>
//                                     <div className='main_foryou_cart_content_right'>
//                                         <div className='main_foryou_cart_content_payout d-flex gap-1 align-items-center'>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='my-3 mx-3 text-white d-flex justify-content-between'>
//                                     <div></div>
//                                     <Link to={`/verified/creator/status/${campaign._id}`}  >
//                                         <div className='btn btn-success' >
//                                             {campaign.rewards && <div> + ₹{(toNumber(campaign.rewards) + toNumber(campaign.amount))} </div>}
//                                             {!campaign.rewards && <div>+ ₹ {toNumber(campaign.amount)} ₹</div>}
//                                         </div>
//                                     </Link>
//                                 </div>
//                                 <div className='my-3 mx-3 text-white d-flex justify-content-between'>
//                                     <div>
//                                         <Link style={{ textDecoration: "none" }} to={`/verified/creator/campaign/details/${campaign.campaignDetails._id}`}>
//                                             <div className='btn btn-warning'>view campaign </div>
//                                         </Link>
//                                     </div>
//                                     <div>
//                                         {campaign.post_link && <div>Post Link: <Link className='btn btn-primary' to={campaign.post_link} target="_blank" rel="noopener noreferrer">View</Link></div>}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <div>No campaign data available</div>
//                     )}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Earningsummarycards;

import React from 'react';
import { Link } from 'react-router-dom';
import insta_icon from "../../../assets/creator/insta-icon.png";
import clock_image from "../../../assets/creator/clock_image.png";
import './Earningsummarycards.css';

function Earningsummarycards({ data }) {

    const formatDate = (deadline) => {
        const dateObj = new Date(deadline);
        const day = dateObj.getDate().toString().padStart(2, '0');
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const year = dateObj.getFullYear().toString().slice(-2);
        return `${day}/${month}/${year}`;
    };

    // Extract campaign details from data
    const { monthlyData, campaignDetails } = data || {};

    // Flatten campaignDetails to access individual campaigns
    const campaignList = data.campaignDetails || [];
    const toNumber = (value) => {
        const number = Number(value);
        return isNaN(number) ? 0 : number;
    };

    return (
        <div className='earning-container'>
            {campaignList.length > 0 ? (
                campaignList.map(campaign => (
                    <div key={campaign._id} className='earning-card'>
                        <div className='earning-card-image'>
                            <img src="https://tixteen.com/tixteenapp/assets/img/Banner/paidbanner.jpg" alt="Campaign Banner" />
                        </div>
                        <div className='earning-card-content'>
                            <div className='earning-card-header'>
                                {campaign.campaignDetails.platforms === "Instagram" && (
                                    <Link to={campaign.campaignDetails.platform_link} target="_blank">
                                        <img src={insta_icon} alt="Instagram" className='earning-platform-icon' />
                                    </Link>
                                )}
                                {campaign.campaignDetails.platforms === "Facebook" && (
                                    <Link to={campaign.campaignDetails.platform_link} target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="earning-platform-icon" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                        </svg>
                                    </Link>
                                )}
                                <div className='earning-campaign-title'>
                                    {campaign.campaignDetails.campaign_name}
                                    <Link to={campaign.campaignDetails.platform_link} target="_blank" rel="noopener noreferrer" className='text-black'  > <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                                            </svg></Link>
                                </div>
                            </div>
                            <div className='earning-card-details'>
                                <div className='earning-detail-item'>
                                    {/* <img src={clock_image} alt="Deadline" className='earning-detail-icon' /> */}
                                    <div className='earning-detail-text'>
                                         Complete At : {formatDate(campaign.cam_complt_date)}
                                        {/* {campaign.cam_complt_date} */}
                                    </div>
                                </div>
                                {/* <div className='earning-detail-item'>
                                    <span className='earning-detail-label'>Status:</span>
                                    <Link to={`/verified/creator/status/${campaign._id}`} className='earning-status-link'>
                                        {campaign.content_approved || "N/A"}
                                    </Link>
                                </div> */}
                            </div>
                            <div className='earning-card-footer'>
                                <Link to={`/verified/creator/status/${campaign._id}`} className='earning-payout-btn'>
                                    {campaign.rewards && <span> + ₹{(toNumber(campaign.rewards) + toNumber(campaign.amount))} </span>}
                                    {!campaign.rewards && <span>+ ₹ {toNumber(campaign.amount)}</span>}
                                </Link>
                                <div className='earning-actions'>
                                    <Link to={`/verified/creator/campaign/details/${campaign.campaignDetails._id}`} className='earning-view-campaign-btn'>
                                        View Campaign
                                    </Link>
                                    {campaign.post_link && (
                                        <div className='earning-post-link'>
                                            <Link to={campaign.post_link} target="_blank" rel="noopener noreferrer" className='earning-post-view-link'>Post <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                                            </svg></Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className='earning-no-data'>No campaign data available</div>
            )}
        </div>
    );
}

export default Earningsummarycards;
