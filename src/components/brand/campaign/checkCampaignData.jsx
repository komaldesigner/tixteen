// import React, { useState } from 'react';
// import CampaignReview from './CampaignReview';

// const ReCheckCampaignData = () => {
//   const [formData, setFormData] = useState({
//     campaignname: 'Summer Sale Campaign',
//     product: 'Sunscreen Lotion',
//     industry: 'Cosmetics',
//     age: '18',
//     tillage: '35',
//     gender: 'Any',
//     language: 'English',
//     hashtag: '#SummerGlow',
//     profiletag: '@beauty_influencer',
//     todo: 'Promote the product on Instagram stories',
//     nottodo: 'Do not make false claims about the product',
//     selectinfluencer: ['Influencer A', 'Influencer B', 'Influencer C'],
//     influencerlevel: ['1', '2'],
//     platforms: 'Instagram, YouTube',
//     platformlink: 'www.instagram.com, www.youtube.com',
//     remark: 'Our sunscreen lotion is perfect for all skin types and offers broad-spectrum protection.',
//     attachment: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === 'file') {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleMultiSelectChange = (e) => {
//     const { name, options } = e.target;
//     const values = Array.from(options).filter(option => option.selected).map(option => option.value);
//     setFormData({ ...formData, [name]: values });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(formData);
//   };

//   return (
//     <div className="influtimelinesum">
//       <h3>MAKE CAMPAIGN</h3>
//       <div className="prjtmlsumbox2">
//         <div className="prjtmlsumboxcntnt admninflulvlprc">
//           <h4>REVIEW YOUR CAMPAIGN</h4>
//           <form id="makecampaign2" onSubmit={handleSubmit}>
//             <CampaignReview formData={formData} />
//             <div className="row">
//               <div className="col-12">
//                 <div className="regfrmnavbtncnt1" style={{ marginTop: '2%' }}>
//                   <div className="subbtn" style={{ width: '100%' }}>
//                     <input type="submit" name="ADDCAMPAIGN" value="ADD CAMPAIGN" style={{ fontSize: 'calc(1vw + 1.1vh)', background: 'unset', color: '#fff', border: 'none' }} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </form>
//           <form method="POST" action="makecampaign.php" encType="multipart/form-data">
//             <input className="btn btn-dark" type="submit" name="backtocampaign" value="<-BACK" style={{ fontSize: 'calc(1vw + 1vh)' }} />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default ReCheckCampaignData

import React, { useState } from 'react';
import CampaignReview from './CampaignReview';

const ReCheckCampaignData = () => {
  const [formData, setFormData] = useState({
    campaignname: 'Summer Sale Campaign',
    product: 'Sunscreen Lotion',
    industry: 'Cosmetics',
    age: '18',
    tillage: '35',
    gender: 'Any',
    language: 'English',
    hashtag: '#SummerGlow',
    profiletag: '@beauty_influencer',
    todo: 'Promote the product on Instagram stories',
    nottodo: 'Do not make false claims about the product',
    selectinfluencer: ['Influencer A', 'Influencer B', 'Influencer C'],
    influencerlevel: ['1', '2'],
    platforms: 'Instagram, YouTube',
    platformlink: 'www.instagram.com, www.youtube.com',
    remark: 'Our sunscreen lotion is perfect for all skin types and offers broad-spectrum protection.',
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleMultiSelectChange = (e) => {
    const { name, options } = e.target;
    const values = Array.from(options).filter(option => option.selected).map(option => option.value);
    setFormData({ ...formData, [name]: values });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="influtimelinesum">
      <h3>MAKE CAMPAIGN</h3>
      <div className="prjtmlsumbox2">
        <div className="prjtmlsumboxcntnt admninflulvlprc">
          <h4>REVIEW YOUR CAMPAIGN</h4>
          <form id="makecampaign2" onSubmit={handleSubmit}>
            <CampaignReview formData={formData} />
            <div className="row">
              <div className="col-12">
                <div className="regfrmnavbtncnt1" style={{ marginTop: '2%' }}>
                  <div className="subbtn" style={{ width: '100%' }}>
                    <input type="submit" name="ADDCAMPAIGN" value="ADD CAMPAIGN" style={{ fontSize: 'calc(1vw + 1.1vh)', background: 'unset', color: '#fff', border: 'none' }} />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <form method="POST" action="makecampaign.php" encType="multipart/form-data">
            {/* Added opening curly brace */}
            <input className="btn btn-dark" type="submit" name="backtocampaign" value="<-BACK" style={{ fontSize: 'calc(1vw + 1vh)' }} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReCheckCampaignData;
