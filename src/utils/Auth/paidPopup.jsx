import React from 'react';
import '../../styles/utils/Auth/VerifiPopup.css';
import logo from '../../assets/img/tixteen_icon.png';
import crock from '../../assets/img/chick 1.png';

const Paidpopup = ({ onClose }) => {
  return (
    <div className="d-flex justify-content-center main_top_head_verifi_popup">
      <div className="main_verifi_popup_div">
        <div className="verifi_popup_header">
          <img src={logo} alt="Tixteen Logo" className="verifi_popup_logo" />
        </div>
        <div className="root_container">
          <h1 className="Verifi_popup_title">Follower Requirement</h1>
          <img src={crock} alt="Crock Image" className="root_crockImage" />
          <div className="Verifi_popup_uppper_side_text">
            You need more than 5,000 followers to access paid campaigns.
          </div>
          <div className="Verifi_popup_uppper_root_thanks">
            It looks like you don't have enough followers to apply for paid campaigns at the moment. Please grow your following to 5,000 or more to unlock this feature.
          </div>
          <div className="Verifi_popup_bottom_info">
            <div><strong>What You Can Do:</strong></div>
            <div><strong>Build Your Audience:</strong> Focus on growing your social media presence to reach the required follower count.</div>
            <div><strong>Explore Barter Campaigns:</strong> While you're building your audience, you can still participate in barter campaigns and gain valuable experience.</div>
            <div><strong>Contact Support:</strong> If you have any questions or need further assistance, please reach out to our support team.</div>
          </div>
          <p className="root_thanks_message_verifi_popup">We appreciate your efforts!</p>
          <button className="root_exploreButton" onClick={onClose}>EXPLORE</button>
        </div>
      </div>
    </div>
  );
};

export default Paidpopup;
