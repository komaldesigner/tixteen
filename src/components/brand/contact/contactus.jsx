import React, { useState } from 'react';
// import './Contact.css';
import "../../../styles/brand/contact/contactus.css"
import Vector from  "../../../assets/img/brand/Vector-Smart001.png"
import Service from  "../../../assets/img/brand/Call-Service.png"
import CallServiceSupportPNG from  "../../../assets/img/brand/Call-Service-Support-PNG.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: '',
    name: '',
    mobile: '',
    mail: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://your-backend-endpoint.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Thanks for Contacting us, We will revert back to you soon.');
    } else {
      alert('Message Sent failed');
    }
  };

  return (
    <div>
      <link rel="canonical" href="https://www.tixteen.com/contact" />
      <title>Tixteen: Tixteen Influencer Marketing: Partner with Us to Amplify Your Brand's Voice</title>
      <meta name="description" content="Get in touch with Tixteen's team of influencer marketing experts. We specialize in creating effective campaigns that drive results for your brand. Contact us to learn how we can help you increase brand awareness, drive sales and build a loyal community." />
      <meta name="keywords" content="Best Influencer Marketing Agency India, Influencer marketing, Influencer marketing agencies, Best Influencer Marketing Platform For Small Business, Connect Influencers With Brands, Tixteen Customer Care" />

      <div className="cntmain">
        <div className="row">
          <div className="col-6">
            <div className="calling">
              <img src={Vector} alt="Calling" />
            </div>
          </div>
          <div className="col-6">
            <div className="cntus">
              <h3>CONTACT</h3>
              <h4>US</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="ylowcnt">
        <div className="csbus">
          <div className="row">
            <div className="col-4">
              <div className="cussup">
                <img src={Service} alt="Customer Support" />
                <h3>CUSTOMER SUPPORT</h3>
                <p><a href="mailto:support@tixteen.com">support@tixteen.com</a></p>
                <p><a href="tel:+918360057380">83600 57380</a></p>
              </div>
            </div>
            <div className="col-4">
              <div className="cussup">
                <img src={CallServiceSupportPNG} alt="Business" />
                <h3>BUSINESS</h3>
                <p><a href="mailto:support@tixteen.com">support@tixteen.com</a></p>
                <p><a href="tel:+918968435512">89684 35512</a></p>
              </div>
            </div>
            <div className="col-4">
              <div className="cussup">
                <div style={{ fontSize: '4.8vw' }}>
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                    {/* <i className="fas fa-map-marker-alt"></i> */}
                    </div>
                <h3>ADDRESS</h3>
                <p><a>Tixteen Pvt Ltd<br />
                  Scf-61, First Floor, Opp. CFC School, F Block, Bhai Randhir Singh Nagar, Ludhiana, Punjab 141012</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="cntfrm">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6 col-6">
                <div className="tag1"><h3>FIRST NAME</h3></div>
                <input type="text" name="fname" value={formData.fname} onChange={handleChange} />
              </div>
              <div className="col-6 col-6">
                <div className="tag1"><h3>LAST NAME</h3></div>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="col-6 col-6" style={{ paddingTop: '2%' }}>
                <div className="tag1"><h3>MOBILE NO.</h3></div>
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
              </div>
              <div className="col-6 col-6" style={{ paddingTop: '2%' }}>
                <div className="tag1"><h3>EMAIL ADDRESS</h3></div>
                <input type="text" name="mail" value={formData.mail} onChange={handleChange} />
              </div>
              <div className="col" style={{ paddingTop: '2%' }}>
                <div className="tag2"><h3>MESSAGE</h3></div>
                <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
              </div>
              </div>
              <div>
              <div>
                <input type="submit" className="cntbtn1" value="SUBMIT" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
