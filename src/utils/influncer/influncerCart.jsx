// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
// import Insta from '../../assets/img/brand/Insta.png'; // Update with the actual path to the Instagram image

// const InfluencerCard = ({ influencer }) => {
//   console.log("influencer----------",influencer.profile_img);
//   return (
//     <div className="user_profile_card_div" key={influencer._id}>
//       <Link to={`/brand/influnence-details/${influencer._id}`}>
//         <div
//           className={`influspc influpht${influencer._id} userPrfileCart_image`}
//           // style={{ backgroundImage: `url(${influencer.profile_img})` }}
//           style={{ backgroundImage: `url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D")` }}
//         >
//           <div className="lvlinflu">
//             <h4>L{influencer.level}</h4>
//           </div>
//           <div className="sndinvt">
//             <span>
//               Add To Cart <FontAwesomeIcon icon={faCartPlus} />
//             </span>
//           </div>
//         </div>
//       </Link>
//       <div className="infudtls">
//         <div className="d-flex justify-content-between">
//           <div>
//             <h3 style={{ textTransform: 'uppercase' }}>
//               {/* TX{influencer?.fname[0]}{influencer?._id} */}
//               TX2343
//             </h3>
//           </div>
//           <div className="text-center">
//             <span className="sclofinflu">
//               <img src={Insta} style={{ width: '10%' }} alt="Instagram" />
//               &nbsp;{influencer?.currentFollower}&nbsp;Followers
//             </span>
//           </div>
//         </div>
//         {/* <span>Starting Price: ₹{influencer.ClientVideo}</span> */}
//         <span>Starting Price: ₹{influencer?.intro_video_link}</span>
//         <p>{influencer.industry}</p>
//       </div>
//     </div>
//   );
// };

// export default InfluencerCard;

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Insta from '../../assets/img/brand/Insta.png'; // Update with the actual path to the Instagram image

const InfluencerCard = ({ influencer, addToCart }) => {
  return (
    <div className="user_profile_card_div" key={influencer.id}>
      <Link to={`/brand/influnence-details/${influencer.id}`}>
        <div
          className={`influspc influpht${influencer.id} userPrfileCart_image`}
          // style={{ backgroundImage: `url(${influencer.profile_img})` }}
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D)` }}
        >
          <div className="lvlinflu">
            <h4>L{influencer.level}</h4>
          </div>
          <div className="sndinvt" onClick={(e) => { e.preventDefault(); addToCart(influencer); }}>
            <span>
              Add To Cart <FontAwesomeIcon icon={faCartPlus} />
            </span>
          </div>
        </div>
      </Link>
      <div className="infudtls">
        <div className="d-flex justify-content-between">
          <div>
            <h3 style={{ textTransform: 'uppercase' }}>
              {/* TX{influencer.fname[0]}{influencer.id} */}
            </h3>
          </div>
          <div className="text-center">
            <span className="sclofinflu">
              <img src={Insta} style={{ width: '10%' }} alt="Instagram" />
              &nbsp;{influencer.currentFollower}&nbsp;Followers
            </span>
          </div>
        </div>
        <span>Starting Price: ₹{influencer.ClientVideo}</span>
        <p>{influencer.industry}</p>
      </div>
    </div>
  );
};

export default InfluencerCard;
