// import React, { useState, useEffect } from 'react';
// // import './ChooseInfluencer.css';
// import "../../../styles/brand/User/ChooseInfluencer.css";


// const ChooseInfluencer = ({ campaignnum, influlevel }) => {
//   const [influencers, setInfluencers] = useState([]);
//   const [totalInfluencers, setTotalInfluencers] = useState(0);

//   useEffect(() => {
//     // Dummy data for influencers
//     const dummyInfluencers = [
//       {
//         id: 1,
//         fname: 'John',
//         age: 28,
//         level: influlevel,
//         industry: 'Fashion',
//         profileimg: 'https://tixteen.com/assets/img/profileimg/8ffa0241f32fef2cf258a44604b03763IMG_9518.JPG',
//         contenttype: 'Broadcast',
//         ClientBroadcast: 150,
//         ClientImage: 200,
//         ClientVideo: 250,
//         influsoclink: 'john_soclink',
//         primaryplatform: 'Instagram',
//         followers: 15000,
//       },
//       {
//         id: 2,
//         fname: 'Jane',
//         age: 24,
//         level: influlevel,
//         industry: 'Fitness',
//         profileimg: 'https://tixteen.com/assets/img/profileimg/8ffa0241f32fef2cf258a44604b03763IMG_9518.JPG',
//         contenttype: 'Images',
//         ClientBroadcast: 120,
//         ClientImage: 180,
//         ClientVideo: 220,
//         influsoclink: 'jane_soclink',
//         primaryplatform: 'YouTube',
//         followers: 20000,
//       },
//       // Add more dummy influencer objects as needed
//     ];

//     setInfluencers(dummyInfluencers);
//     setTotalInfluencers(dummyInfluencers.length);
//   }, [influlevel]);

//   const handleInviteSubmit = (influencerId) => {
//     if (window.confirm('Are you sure you want to invite this influencer?')) {
//       console.log(`Invited influencer with ID: ${influencerId}`);
//       // Perform the invitation logic here
//     }
//   };

//   return (
//     <div className="adinflubgclr">
//       <div className="invtinflu">
//         <div className="col-12">
//           <div className="influgllry">
//             <h3 id="dv">CHOOSE INFLUENCER</h3>
//             <p>against rejected influencer</p>
//             <div className="row">
//               {influencers.map((influencer) => (
//                 <div className="col-lg-3 col-md-4 col-sm-6" key={influencer.id}>
//                   <div className={`influpht${influencer.id}`}>
//                     <div className="lvlinflu">
//                       <h4>L{influencer.level}</h4>
//                       {influencer.id}
//                     </div>
//                     <div className="sndinvt">
//                       <span>
//                         <button
//                           className="btn btn-warning"
//                           onClick={() => handleInviteSubmit(influencer.id)}
//                         >
//                           Invite
//                         </button>
//                       </span>
//                     </div>
//                   </div>
//                   <div className="infudtls">
//                     <div className="row">
//                       <div className="col-sm-6">
//                         <h3 style={{ textTransform: 'uppercase' }}>
//                           TX{influencer.fname[0]}{influencer.id}
//                         </h3>
//                       </div>
//                       <div className="col-sm-6 text-center">
//                         <span style={{ fontWeight: 'bold' }}>
//                           {influencer.primaryplatform}: {influencer.followers}
//                         </span>
//                       </div>
//                     </div>
//                     <span>Age: {influencer.age}</span>
//                     <br />
//                     <span>
//                       Starting Price: ₹
//                       {influencer.contenttype.includes('Broadcast')
//                         ? influencer.ClientBroadcast
//                         : influencer.contenttype.includes('Images')
//                         ? influencer.ClientImage
//                         : influencer.ClientVideo}
//                     </span>
//                     <br />
//                     <span>{influencer.industry}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChooseInfluencer;
import React, { useState, useEffect } from 'react';
// import './InfluencerList.css';
import "../../../styles/brand/User/ChooseInfluencer.css";


const InfluencerList = () => {
  const [influencers, setInfluencers] = useState([]);
  const campaignnum = 1;
  const influlevel = "L2";

  useEffect(() => {
    // Dummy data for influencers
    const dummyInfluencers = [
      {
        influid: '1',
        fname: 'John',
        age: 28,
        level: '2',
        industry: 'Fashion',
        profileimg: 'https://tixteen.com/assets/img/profileimg/8ffa0241f32fef2cf258a44604b03763IMG_9518.JPG',

        contenttype: 'Broadcast',
        ClientBroadcast: 150,
        ClientImage: 200,
        ClientVideo: 250,
        primaryplatform: 'Instagram',
        followerCount: 15000,
      },
      {
        influid: '2',
        fname: 'Jane',
        age: 32,
        level: '3',
        industry: 'Tech',
        // profileimg: 'jane_profile.jpg',
        profileimg: 'https://tixteen.com/assets/img/profileimg/8ffa0241f32fef2cf258a44604b03763IMG_9518.JPG',

        contenttype: 'Images',
        ClientBroadcast: 180,
        ClientImage: 220,
        ClientVideo: 270,
        primaryplatform: 'YouTube',
        followerCount: 12000,
      },
    ];

    setInfluencers(dummyInfluencers);
  }, [campaignnum, influlevel]);

  const handleInvite = (influencer) => {
    if (window.confirm('Are you sure you want to invite this influencer?')) {
      console.log('Invited:', influencer);
    }
  };

  return (
    <div className="adinflubgclr">
      <div className="invtinflu">
        <div className="col-12">
          <div className="influgllry">
            <h3 id="dv">CHOOSE INFLUENCER</h3>
            <p>against rejected influencer</p>
            <div className="row">
              {influencers.map((influencer) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={influencer.influid}>
                  <form onSubmit={() => handleInvite(influencer)}>
                    <div className="influspc">
                      <div
                        className={`influpht influpht${influencer.influid}`}
                        style={{ backgroundImage: `url(${influencer.profileimg})` }}
                      >
                        <div className="lvlinflu">
                          <h4>L{influencer.level}</h4>
                          {influencer.influid}
                        </div>
                        <div className="sndinvt">
                          <input
                            type="submit"
                            className="btn btn-warning"
                            value="Invite"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="infudtls">
                      <div className="row">
                        <div className="col-sm-6">
                          <h3 style={{ textTransform: 'uppercase' }}>
                            TX{influencer.fname.charAt(0)}{influencer.influid}
                          </h3>
                        </div>
                        <div className="col-sm-6 text-center">
                          <span style={{ fontWeight: 'bold' }}>
                            {influencer.primaryplatform}:{influencer.followerCount}
                          </span>
                        </div>
                      </div>
                      <span>Age: {influencer.age}</span>
                      <br />
                      <span>
                        Starting Price: ₹
                        {influencer.contenttype.includes('Broadcast')
                          ? influencer.ClientBroadcast
                          : influencer.contenttype.includes('Images')
                          ? influencer.ClientImage
                          : influencer.ClientVideo}
                      </span>
                      <br />
                      <span>{influencer.industry}</span>
                    </div>
                  </form>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerList;
