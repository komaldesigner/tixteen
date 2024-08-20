import "../../../styles/brand/Campaign/ReviewCampaign.css";
// import React from 'react';

// const ReviewCampaign = () => {
//   const {
//     campaignname,
//     product,
//     industry,
//     age,
//     tillage,
//     gender,
//     language,
//     hashtag,
//     profiletag,
//     todo,
//     nottodo,
//     selectinfluencer,
//     influencerlevel,
//     remark,
//     platforms,
//     platformlink,
//     attachment,
//   } = {};

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Dummy submit function for demonstration
//     console.log('Form submitted');
//   };

//   return (
//     <div className="influtimelinesum">
//       <h3>MAKE CAMPAIGN</h3>
//       <div className="prjtmlsumbox2">
//         <div className="prjtmlsumboxcntnt admninflulvlprc">
//           <h4>REVIEW YOUR CAMPAIGN</h4>
//           <form id="makecampaign2" onSubmit={handleSubmit}>
//             <div className="row">
//               {/* Render campaign details */}
//             </div>
//             <div className="regfrmnavbtncnt1" style={{ marginTop: '2%' }}>
//               <div className="subbtn" style={{ width: '100%' }}>
//                 <input
//                   type="submit"
//                   name="ADDCAMPAIGN"
//                   value="ADD CAMPAIGN"
//                   style={{ fontSize: 'calc(1vw + 1.1vh)', background: 'unset', color: '#fff', border: 'none' }}
//                 />
//               </div>
//             </div>
//           </form>
//           <form method="POST" action="makecampaign.php" enctype="multipart/form-data">
//             <input className="btn btn-dark" type="submit" name="backtocampaign" value="<-BACK" style={{ fontSize: 'calc(1vw + 1vh)' }} />
//             {/* Hidden input fields */}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewCampaign;

import React from 'react';

const CampaignReview = () => {
  const {
    campaignname ,
    product,
    industry,
    age,
    tillage,
    gender,
    language,
    hashtag,
    profiletag,
    todo,
    nottodo,
    selectinfluencer,
    influencerlevel,
    platforms,
    platformlink,
    remark,
    attachment
  } = {};

  return (
    <div className="row">
      <DetailRow label="CAMPAIGN NAME" value={campaignname} />
      <DetailRow label="BRAND PRODUCT" value={product} />
      <DetailRow label="Industry" value={industry} />
      <DetailRow label="INFLUENCER'S AGE" value={`${age} - ${tillage}`} />
      <DetailRow label="INFLUENCER'S GENDER" value={gender} />
      <DetailRow label="Campaign Language" value={language} />
      <DetailRow label="HASHTAG" value={hashtag} />
      <DetailRow label="PROFILES TO TAG" value={profiletag} />
      {attachment && (
        <DetailRow label="Attachment" value={<img src={URL.createObjectURL(attachment)} alt="Attachment" width="80px" />} />
      )}
      <DetailRow label="PLATFORM PREFERENCE" value={`${platforms}, ${platformlink}`} />
      <DetailRow label="Do's" value={todo} />
      <DetailRow label="Don't" value={nottodo} />
      <InfluencerTable influencerlevel={influencerlevel} selectinfluencer={selectinfluencer} />
      <div className="col-sm-6">
        <div className="row">
          <div className="col-5">
            <div className="campfrm11">
              <p>Describe your Product</p>
            </div>
          </div>
          <div className="col-1">
            <div className="campfrm2">
              <p>:</p>
            </div>
          </div>
          <div className="col-6">
            <div className="campfrm2" style={{ height: '120px', overflow: 'scroll' }}>
              <p>{remark}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value }) => (
  <div className="col-sm-6">
    <div className="row">
      <div className="col-5">
        <div className="campfrm11">
          <p>{label}</p>
        </div>
      </div>
      <div className="col-1">
        <div className="campfrm2">
          <p>:</p>
        </div>
      </div>
      <div className="col-6">
        <div className="campfrm2">
          <p>{value}</p>
        </div>
      </div>
    </div>
  </div>
);

const InfluencerTable = ({ influencerlevel, selectinfluencer }) => (
  <div className="col-sm-6">
    <div className="row">
      <div className="col-5">
        <div className="campfrm11">
          <p>INFULENCERS</p>
        </div>
      </div>
      <div className="col-1">
        <div className="campfrm2">
          <p>:</p>
        </div>
      </div>
      <div className="col-6">
        <div className="row">
          <div className="campicn1">
            <div>
              <table className="table-bordered">
                <tbody>
                  <tr>
                    {influencerlevel.map((level, index) => (
                      <td key={index}>
                        <p>Level {level}</p>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {selectinfluencer.map((influencer, index) => (
                      <td key={index}>
                        <h4>{influencer}</h4>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CampaignReview;
