// import React, { useEffect, useState } from 'react';
// import "../../../styles/creator/AllCampain/forYou/foryouCart.css";
// import insta_icon from "../../../../assets/creator/insta-icon.png";
// import clock_image from "../../../../assets/creator/clock_image.png";
// import { Link } from 'react-router-dom';
// import { makeApi } from '../../../../api/callApi.tsx';
// import CardLoader from '../../../../utils/cardLoader.jsx';
// import MainLoader from '../../../../utils/loader.jsx';

// function ForyouCart({ selectedTab }) {
//   const [campaignList, setCampaignList] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchAllCampaigns = async () => {
//       try {
//         setLoading(true);
//         const response = await makeApi(`/v1/influencer/all-campaigns-for-influncers?type=${selectedTab}`, 'GET');
//         setCampaignList(response?.data.data || []);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchAllCampaigns();
//   }, [selectedTab]);

//   const formatDate = (deadline) => {
//     const dateObj = new Date(deadline);
//     const day = dateObj.getDate().toString().padStart(2, '0');
//     const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
//     const year = dateObj.getFullYear().toString().slice(-2);
//     return `${day}/${month}/${year}`;
//   };

//   return (
//     <>
//       {loading && <div className='mt-5 d-flex flex-column gap-5' >
//         <div className='' style={{ width: "100%", zIndex: "1000"}} >

//           <MainLoader />
//         </div>

//         <CardLoader />
//         <CardLoader />
//         <CardLoader />
//         <CardLoader />
//         <CardLoader />
//         <CardLoader />
//       </div>}
//       <div style={{ marginBottom: "130px" }}>
//         {campaignList.map(campaign => (
//           <div key={campaign._id} className='main_foryou_cart'>
//             {/* image */}
//             <div className='main_foryou_cart_image_div'>
//               {/* requirement */}
//               <div className='main_foryou_cart_requirement'>
//                 {/* left */}
//                 <div className='main_foryou_cart_requirement_left'>
//                   <div className='foryou_cart_ten_kay'>{campaign.followers}</div>
//                   <div className='text-white requiemnt_message'>Followers</div>
//                 </div>
//                 {/* right */}
//                 <div className='main_foryou_cart_requirement_left'>
//                   <div className='text-black requiemnt_message' style={{ fontSize: "14px", fontWeight: "bold" }}>10 <br /> slot</div>
//                 </div>
//               </div>
//               <img src="https://tixteen.com/tixteenapp/assets/img/Banner/paidbanner.jpg" alt="" className='main_foryou_cart_image' />
//             </div>
//             {/* content */}
//             <div className='main_foryou_cart_content'>
//               {/* left */}
//               <div className='main_foryou_cart_content_left'>
//                 {/* heading */}
//                 <div className='main_foryou_cart_content_left_heading'>
//                   {campaign.platforms === "Instagram" && (
//                     <div>
//                       <Link to={campaign.platform_link} target="_blank">
//                         <img src={insta_icon} alt="" />
//                       </Link>
//                     </div>
//                   )}
//                   {campaign.platforms === "Facebook" && (
//                     <Link to={campaign.platform_link} target="_blank" style={{ color: "blue" }}>
//                       <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
//                         <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
//                       </svg>
//                     </Link>
//                   )}
//                   <div>{campaign.campaign_name}</div>
//                 </div>
//                 {/* options */}
//                 <div>
//                   {campaign.deliverables && Array.isArray(campaign.deliverables) && (
//                     <ul className='main_foryou_cart_content_payout'>
//                       {campaign.deliverables.length > 0 ? (
//                         campaign.deliverables.map((deliverable, index) => (
//                           <li key={index}>{deliverable?.deliverable}</li>
//                         ))
//                       ) : (
//                         <li>No deliverables available</li>
//                       )}
//                     </ul>
//                   )}
//                 </div>
//               </div>
//               {/* right */}
//               <div className='main_foryou_cart_content_right'>
//                 {/* button */}
//                 {campaign.userApplied ? (
//                   // <Link style={{ textDecoration: "none" }} to={`/verified/creator/campaign/details/${campaign._id}`}>

//                   <div className='main_foryou_cart_content_Apply_button' >Applied</div>
//                   // </Link>

//                 ) : (
//                   <Link style={{ textDecoration: "none" }} to={`/verified/creator/campaign/details/${campaign._id}`}>
//                     <div className='main_foryou_cart_content_Apply_button'>Apply</div>
//                   </Link>
//                 )}
//                 {/* payout */}
//                 <div className='main_foryou_cart_content_payout'>Payout <span className='dark_yellow_color'>₹ </span>500</div>
//                 {/* link */}
//                 <div className='main_foryou_cart_content_payout d-flex gap-2 align-items-center'>
//                   <div>
//                     <img src={clock_image} alt="" className='main_foryou_cart_image_clock' />
//                   </div>
//                   <div>
//                     {formatDate(campaign?.dead_line)}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default ForyouCart;



import React, { useEffect, useState } from 'react';
import "../../../styles/creator/AllCampain/forYou/foryouCart.css";
import insta_icon from "../../../../assets/creator/insta-icon.png";
import clock_image from "../../../../assets/creator/clock_image.png";
import { Link } from 'react-router-dom';
import { makeApi } from '../../../../api/callApi.tsx';
import CardLoader from '../../../../utils/cardLoader.jsx';
import MainLoader from '../../../../utils/loader.jsx';

function ForyouCart({ selectedTab }) {
  const [campaignList, setCampaignList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllCampaigns = async () => {
      try {
        setLoading(true);
        const response = await makeApi(`/v1/influencer/all-campaigns-for-influncers?type=${selectedTab}`, 'GET');
        setCampaignList(response?.data.data || []);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllCampaigns();
  }, [selectedTab]);

  const formatDate = (deadline) => {
    const dateObj = new Date(deadline);
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  };

  // Function to check if the campaign is completed
  const isCampaignCompleted = (deadline) => {
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);
    return deadlineDate < currentDate;
  };

  return (
    <>
      {loading && (
        <div className='mt-5 d-flex flex-column gap-5'>
          <div className='' style={{ width: "100%", zIndex: "1000" }}>
            <MainLoader />
          </div>
          <CardLoader />
          <CardLoader />
          <CardLoader />
          <CardLoader />
          <CardLoader />
          <CardLoader />
        </div>
      )}
      <div style={{ marginBottom: "130px" }}>
        {campaignList.map(campaign => (
          <div key={campaign._id} className='main_foryou_cart'>
            {/* image */}
            <div className='main_foryou_cart_image_div'>
              {/* requirement */}
              <div className='main_foryou_cart_requirement'>
                {/* left */}
                <div className='main_foryou_cart_requirement_left'>
                  <div className='foryou_cart_ten_kay'>{campaign.followers}</div>
                  <div className='text-white requiemnt_message'>Followers</div>
                </div>
                {/* right */}
                <div className='main_foryou_cart_requirement_left'>
                  <div className='text-black requiemnt_message' style={{ fontSize: "14px", fontWeight: "bold" }}>10 <br /> slot</div>
                </div>
              </div>
              <img src="https://tixteen.com/tixteenapp/assets/img/Banner/paidbanner.jpg" alt="" className='main_foryou_cart_image' />
            </div>
            {/* content */}
            <div className='main_foryou_cart_content'>
              {/* left */}
              <div className='main_foryou_cart_content_left'>
                {/* heading */}
                <div className='main_foryou_cart_content_left_heading'>
                  {campaign.platforms === "Instagram" && (
                    <div>
                      <Link to={campaign.platform_link} target="_blank">
                        <img src={insta_icon} alt="" />
                      </Link>
                    </div>
                  )}
                  {campaign.platforms === "Facebook" && (
                    <Link to={campaign.platform_link} target="_blank" style={{ color: "blue" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                      </svg>
                    </Link>
                  )}
                  <div>{campaign.campaign_name}</div>
                </div>
                {/* options */}
                <div>
                  {campaign.deliverables && Array.isArray(campaign.deliverables) && (
                    <ul className='main_foryou_cart_content_payout'>
                      {campaign.deliverables.length > 0 ? (
                        campaign.deliverables.map((deliverable, index) => (
                          <li key={index}>{deliverable?.deliverable}</li>
                        ))
                      ) : (
                        <li>No deliverables available</li>
                      )}
                    </ul>
                  )}
                </div>
              </div>
              {/* right */}
              <div className='main_foryou_cart_content_right'>
                {/* button */}
                {isCampaignCompleted(campaign.dead_line) ? (
                  <div className='p-1 btn-danger' style={{borderRadius: "5px"}}>Completed</div>
                ) : campaign.userApplied ? (
                  <div className='main_foryou_cart_content_Apply_button'>Applied</div>
                ) : (
                  <Link style={{ textDecoration: "none" }} to={`/verified/creator/campaign/details/${campaign._id}`}>
                    <div className='main_foryou_cart_content_Apply_button'>Apply</div>
                  </Link>
                )}
                {/* payout */}
                <div className='main_foryou_cart_content_payout'>Payout <span className='dark_yellow_color'>₹ </span>500</div>
                {/* link */}
                <div className='main_foryou_cart_content_payout d-flex gap-2 align-items-center'>
                  <div>
                    <img src={clock_image} alt="" className='main_foryou_cart_image_clock' />
                  </div>
                  <div>
                    {formatDate(campaign?.dead_line)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ForyouCart;
