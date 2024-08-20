// import React, { useState } from "react";
// import "../../../styles/creator/earning/eariningSummary.css";
// import calender from "../../../assets/earning/calender.png";
// import dollar from "../../../assets/earning/dollar 1.png";
// import saponser from "../../../assets/earning/saponser.png";
// import bill from "../../../assets/earning/bill 1.png";

// function EariningSummary({ earningData }) {
//     const [showPopup, setShowPopup] = useState(false);
//     const [selectedCampaigns, setSelectedCampaigns] = useState([]);

//     const totalCampaigns = earningData.reduce((acc, item) => acc + item.totalCampaigns, 0);
//     const totalEarnings = earningData.reduce((acc, item) => acc + item.totalPayment, 0);
//     const totalPending = earningData.reduce((acc, item) => acc + item.totalPendingPayment, 0);

//     const handlePendingClick = () => {
//         const pendingCampaigns = earningData
//             .map(item => item.campaignDetails)
//             .flat()
//             .filter(campaign => 
//                 campaign.submition === "Completed" && 
//                 campaign.pay_scedule_date && 
//                 !campaign.transaction_id
//             );
//         setSelectedCampaigns(pendingCampaigns);
//         setShowPopup(true);
//     };

//     return (
//         <div className='earining_summary_main_div '>
//             <EariningSummaryData title="Year" image={calender} number={new Date().getFullYear()} />
//             <EariningSummaryData title="Campaign" image={saponser} number={totalCampaigns} />
//             <EariningSummaryData title="Earnings" image={dollar} number={`Rs. ${totalEarnings}`} />
//             <EariningSummaryData 
//                 title="Pending payment" 
//                 image={bill} 
//                 number={`Rs. ${totalPending}`} 
//                 onClick={handlePendingClick} 
//             />

//             {/* Popup for pending payments */}
//             {showPopup && (
//                 <div className="earning_popup">
//                     <div className="earning_popup-content">
//                         <h2>Pending Payment Details</h2>
//                         {selectedCampaigns.length > 0 ? (
//                             selectedCampaigns.map((campaign, index) => (
//                                 <div key={index}>
//                                     <p>Campaign No: {campaign.campaign_no}</p>
//                                     <p>Scheduled Payment Date: {campaign.pay_scedule_date}</p>
//                                     <p>Total Amount: Rs. {Number(campaign.amount) + Number(campaign.rewards)}</p>
//                                     <p>Status: {campaign.submition}</p>
//                                     {/* Add more details as needed */}
//                                 </div>
//                             ))
//                         ) : (
//                             <p>No pending payments available.</p>
//                         )}
//                         <button onClick={() => setShowPopup(false)}>Close</button>
//                     </div>
//                 </div>
//             )}

//             {/* Campaign Details Section */}
          
//         </div>
//     );
// }

// export default EariningSummary;




// function EariningSummaryData({ title, image, number, onClick }) {
//     return (
//         <div className='earining_summary_items' onClick={onClick}>
//             <div>
//                 <img src={image} alt="" className='earining_summary_items_image' />
//             </div>
//             <div>
//                 <div className='earining_summary_items_title'>
//                     {title}
//                 </div>
//                 <div className='bold_text'>
//                     {number}
//                 </div>
//             </div>
//         </div>
//     );
// } 

import React, { useState } from "react";
import "../../../styles/creator/earning/eariningSummary.css";
import calender from "../../../assets/earning/calender.png";
import dollar from "../../../assets/earning/dollar 1.png";
import saponser from "../../../assets/earning/saponser.png";
import bill from "../../../assets/earning/bill 1.png";

function EariningSummary({ earningData }) {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedCampaigns, setSelectedCampaigns] = useState([]);

    // Calculate totals
    const totalCampaigns = earningData.reduce((acc, item) => acc + item.totalCampaigns, 0);
    const totalEarnings = earningData.reduce((acc, item) => acc + item.totalPayment, 0);
    const totalPending = earningData.reduce((acc, item) => acc + item.totalPendingPayment, 0);

    // Check if there are any pending campaigns
    const pendingCampaigns = earningData
        .map(item => item.campaignDetails || [])
        .flat()
        .filter(campaign => 
            campaign.submition === "Completed" && 
            campaign.pay_scedule_date && 
            !campaign.transaction_id
        );

    const handlePendingClick = () => {
        if (pendingCampaigns.length > 0) {
            setSelectedCampaigns(pendingCampaigns);
            setShowPopup(true);
        }
    };

    return (
        <div className='earining_summary_main_div'>
            <EariningSummaryData title="Year" image={calender} number={new Date().getFullYear()} />
            <EariningSummaryData title="Campaign" image={saponser} number={totalCampaigns} />
            <EariningSummaryData title="Earnings" image={dollar} number={`Rs. ${totalEarnings}`} />
            <EariningSummaryData 
                title="Pending payment" 
                image={bill} 
                number={`Rs. ${totalPending}`}
                onClick={handlePendingClick}
                disabled={totalPending === 0}  // Disable if no pending payments
            />

            {/* Popup for pending payments */}
            {showPopup && (
                <div className="earning_popup">
                    <div className="earning_popup-content">
                        <h2>Pending Payment Details</h2>
                        {selectedCampaigns.length > 0 ? (
                            selectedCampaigns.map((campaign, index) => (
                                <div key={index}>
                                    <p>Campaign No: {campaign.campaign_no}</p>
                                    <p>Scheduled Payment Date: {campaign.pay_scedule_date}</p>
                                    <p>Total Amount: Rs. {Number(campaign.amount) + Number(campaign.rewards)}</p>
                                    <p>Status: {campaign.submition}</p>
                                    {/* Add more details as needed */}
                                </div>
                            ))
                        ) : (
                            <p>No pending payments available.</p>
                        )}
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EariningSummary;

function EariningSummaryData({ title, image, number, onClick, disabled }) {
    return (
        <div className='earining_summary_items' onClick={onClick} style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>
            <div>
                <img src={image} alt="" className='earining_summary_items_image' />
            </div>
            <div>
                <div className='earining_summary_items_title'>
                    {title}
                </div>
                <div className='bold_text'>
                    {number}
                </div>
            </div>
        </div>
    );
}
