import React from 'react';
import '../../styles/utils/Auth/VerifiPopup.css';
import logo from '../../assets/img/tixteen_icon.png';
import crock from '../../assets/img/chick 1.png';

const VerifyPOP = ({ onClose }) => {
  return (
    <div className="d-flex justify-content-center main_top_head_verifi_popup">
      <div className="main_verifi_popup_div">
        <div className="verifi_popup_header">
          <img src={logo} alt="Tixteen Logo" className="verifi_popup_logo" />
        </div>
        <div className="root_container">
          <h1 className="Verifi_popup_title">Your Account is Under Review</h1>
          <img src={crock} alt="Crock Image" className="root_crockImage" />
          <div className="Verifi_popup_uppper_side_text">
            We're currently reviewing your account.
          </div>
          <div className="Verifi_popup_uppper_root_thanks">
            During this time, you may experience limited access to some features. This review is part of our standard procedure to ensure the security and integrity of our platform.
          </div>
          <div className="Verifi_popup_bottom_info">
            <div><strong>What You Can Do:</strong></div>
            <div><strong>Check Your Email:</strong> We may have sent you an email with more details about the review process.</div>
            <div><strong>Explore Our Campaigns:</strong> While we review your account, take a moment to explore our latest campaigns and discover new opportunities.</div>
            <div><strong>Contact Support:</strong> If you have any questions or need further assistance, please reach out to our support team.</div>
          </div>
          <p className="root_thanks_message_verifi_popup">Thanks for hanging in there with us!</p>
          <button className="root_exploreButton" onClick={onClose}>EXPLORE</button>
        </div>
      </div>
    </div>
  );
};

export default VerifyPOP;
