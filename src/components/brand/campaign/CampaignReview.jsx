import React from 'react';

const CampaignReview = ({ formData }) => {
  const {
    campaignname,
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
  } = formData;

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
                                                        