// import React, { useState, useEffect } from 'react';

// const CampaignDetails = ({ campaignnum, Clientid }) => {
//   const [campaignData, setCampaignData] = useState([]);
//   const [srlnum4, setSrlnum4] = useState(0);

//   useEffect(() => {
//     const fetchCampaignData = async () => {
//       try {
//         // Fetch campaign data from the server using campaignnum and Clientid
//         const response = await fetch(`api/getCampaignData?campaignnum=${campaignnum}&Clientid=${Clientid}`);
//         const data = await response.json();
//         setCampaignData(data);
//       } catch (error) {
//         console.error('Error fetching campaign data:', error);
//       }
//     };

//     fetchCampaignData();
//   }, [campaignnum, Clientid]);

//   const handleInfluencerSelection = (influencerId) => { 
//     // Handle influencer selection logic
//   };

//   return (
//     <div>
//       <div className="prjtmlsumboxcntnt filter c4" id="mypromotion">
//         <div className="pdtl">
//           <table className="table table-bordered">
//             <thead>
//               <tr>
//                 <th className="text-center">OPT DATE</th>
//                 <th className="text-center">Influencer ID</th>
//                 <th className="text-center">LEVEL</th>
//                 <th className="text-center">CONTENT</th>
//                 <th className="text-center">STATUS</th>
//                 <th className="text-center">LINK</th>
//                 <th className="text-center">REWARD</th>
//               </tr>
//             </thead>
//             <tbody>
//               {campaignData.map((campaign, index) => (
//                 <tr key={index}>
//                   <td className="text-center">{campaign.optdate || 'Listed to OPT'}</td>
//                   <td className="text-center">{campaign.influencerId}</td>
//                   <td className="text-center">L{campaign.Level}</td>
//                   <td className="text-center">{campaign.contentname}</td>
//                   <td className="cmplt">
//                     <p>
//                       {campaign.influapproval === 'Listed'
//                         ? 'Listed to OPT'
//                         : campaign.influapproval === 'Pending'
//                         ? 'Influencer Approval Pending'
//                         : campaign.influapproval === 'Rejected'
//                         ? 'Invitation Rejected'
//                         : campaign.submition || 'In Process'}
//                     </p>
//                   </td>
//                   <td>
//                     <div className="linklogo">
//                       {campaign.postlink && (
//                         <a href={campaign.postlink} target="_blank" rel="noopener noreferrer">
//                           <i className="fas fa-external-link-alt"></i>
//                         </a>
//                       )}
//                     </div>
//                   </td>
//                   <td className="payrwd">
//                     {campaign.payment === '' && (campaign.rewards !== '0' || campaign.rewards !== '') ? (
//                       campaign.rewards === '0' || campaign.rewards === '' ? (
//                         // Razorpay payment Gateway form
//                         <form className="mright5 action-button go-to-portal" action="../razorpayreward/pay.php?checkout=manual" method="POST">
//                           <input type="number" id="amnt" value={campaign.GrandTotal} name="amnt" placeholder="Reward Amount" />
//                           {/* Other form inputs */}
//                           <input type="submit" className="paybtn" value="Pay" style={{ padding: '0%' }} />
//                         </form>
//                       ) : (
//                         <section className="text-center">REWARD Paid of ₹{campaign.rewards}</section>
//                       )
//                     ) : (
//                       <section className="text-center">-</section>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );

// };

// export default CampaignDetails;

import React, { useState } from 'react';

function CampaignDetails() {
  const [campaignData, setCampaignData] = useState([
    {
      optdate: '2024-05-27',
      influencerId: 'TX123',
      Level: 1,
      contentname: 'Promotional Content 1',
      influapproval: 'Listed',
      submition: 'Submitted',
      postlink: 'https://example.com',
      payment: '',
      rewards: '50',
      GrandTotal: 50
    },
    {
      optdate: '2024-05-28',
      influencerId: 'TX456',
      Level: 2,
      contentname: 'Promotional Content 2',
      influapproval: 'Pending',
      submition: '',
      postlink: 'https://example.com',
      payment: '',
      rewards: '',
      GrandTotal: 0
    }
  ]);

  return (
    <div>
      <div className="prjtmlsumboxcntnt filter c4" id="mypromotion">
        <div className="pdtl">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="text-center">OPT DATE</th>
                <th className="text-center">Influencer ID</th>
                <th className="text-center">LEVEL</th>
                <th className="text-center">CONTENT</th>
                <th className="text-center">STATUS</th>
                <th className="text-center">LINK</th>
                <th className="text-center">REWARD</th>
              </tr>
            </thead>
            <tbody>
              {campaignData.map((campaign, index) => (
                <tr key={index}>
                  <td className="text-center">{campaign.optdate || 'Listed to OPT'}</td>
                  <td className="text-center">{campaign.influencerId}</td>
                  <td className="text-center">L{campaign.Level}</td>
                  <td className="text-center">{campaign.contentname}</td>
                  <td className="cmplt">
                    <p>
                      {campaign.influapproval === 'Listed'
                        ? 'Listed to OPT'
                        : campaign.influapproval === 'Pending'
                          ? 'Influencer Approval Pending'
                          : campaign.influapproval === 'Rejected'
                            ? 'Invitation Rejected'
                            : campaign.submition || 'In Process'}
                    </p>
                  </td>
                  <td>
                    <div className="linklogo">
                      {campaign.postlink && (
                        <a href={campaign.postlink} target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      )}
                    </div>
                    
                  </td>
                  <td className="payrwd" style={{ width: '20%' }}>
                    {campaign.payment === '' && (campaign.rewards !== '0' || campaign.rewards !== '') ? (
                      campaign.rewards === '0' || campaign.rewards === '' ? (
                        <form className="mright5 action-button go-to-portal" action="../razorpayreward/pay.php?checkout=manual" method="POST">
                          <input type="number" id="amnt" value={campaign.GrandTotal} name="amnt" placeholder="Reward Amount" />
                          <input type="submit" className="paybtn" value="Pay" style={{ padding: '0%' }} />
                        </form>
                      ) : (
                        <section className="text-center">REWARD Paid of ₹{campaign.rewards}</section>
                      )
                    ) : (
                      <section className="text-center">-</section>
                    )}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CampaignDetails;
