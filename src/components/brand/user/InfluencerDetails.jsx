
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faPrint, faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

const InfluencerAllDetails = () => {
  const [influencer, setInfluencer] = useState({});
  const [bankDetails, setBankDetails] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);
  const [checklist, setChecklist] = useState([]);
  const [primeContent, setPrimeContent] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState('');

  useEffect(() => {
    // Dummy data for testing
    const dummyInfluencer = {
      id: 1,
      fname: 'John',
      lname: 'Doe',
      email: 'john.doe@example.com',
      mobile: '1234567890',
      mobile2: '0987654321',
      address: '123 Main St',
      country: 'India',
      state: 'Maharashtra',
      city: 'Indore',
      pin: '123456',
      shippingaddress: '456 Secondary St',
      shipcountry: 'India ',
      shipstate: 'Maharashtra',
      shipcity: 'pune',
      shippin: '654321',
      industry: ['Technology' , 'Education', 'Health', 'Sports'],
      introvideo: 'intro.mp4',
      whatsappconnect: 1,
      sleepmode: 0,
      suspend: 0,
      primeContent: 'full',
    };
    const dummyBankDetails = [
      {
        id: 1,
        accholdername: 'John Doe',
        bankname: 'Bank Name',
        accountnumber: '1234567890',
        ifsccode: 'IFSC1234',
        phone: '1234567890',
        verify: 'Pending',
      },
    ];
    const dummySocialLinks = [
      {
        id: 1,
        platform: 'Facebook',
        link: 'http://facebook.com/johndoe',
        verify: 'approved',
      },
      {
        id: 2,
        platform: 'Instagram',
        link: 'http://instagram.com/johndoe',
        verify: 'rejected',
      },
    ];
    const dummyChecklist = [
      { id: 1, text: 'Profile Picture', checked: true },
      { id: 2, text: 'Bio', checked: false },
    ];

    setInfluencer(dummyInfluencer);
    setBankDetails(dummyBankDetails);
    setSocialLinks(dummySocialLinks);
    setChecklist(dummyChecklist);
    setPrimeContent(dummyInfluencer.primeContent === 'full');
  }, []);

  const handlePrimeContentClick = () => {
    setPrimeContent(!primeContent);
  };

  const handleVerificationChange = (event) => {
    setVerificationStatus(event.target.value);
  };

  return (
    <div className="container mt-4">
      <h3>
        <b><a href="clientprojectdetaillevel.php"><FontAwesomeIcon icon={faArrowCircleLeft} /></a></b> &nbsp; Influencers Verification
      </h3>
      <div className="prjtmlsumbox">
        <div className="prjtmlsumboxcntnt" id="new">
          <div className="row prjtmlboxborder">
            <div className="col-lg-6">
              <h5>Personal Details</h5>
              <div className="row">
                <div className="col-6">Influencer id</div>
                <div className="col-6" style={{ textTransform: 'uppercase' }}>
                  TX{influencer.fname?.charAt(0)}{influencer.id}
                </div>
                <div className="col-6">Name</div>
                <div className="col-6">{influencer.fname} {influencer.lname}</div>
                <div className="col-6">Email</div>
                <div className="col-6">{influencer.email}</div>
                <div className="col-6">Mobile</div>
                <div className="col-6">
                  {influencer.mobile}
                  <a target="_blank" aria-label="Chat on WhatsApp" href={`https://wa.me/+91${influencer.mobile}`}>
                    <img src="../assets/img/WhatsApp.png" width="20px" alt="WhatsApp" />
                  </a>
                </div>
                <div className="col-6">Secondary Mobile</div>
                <div className="col-6">{influencer.mobile2}</div>
                <div className="col-6">Permanent Address</div>
                <div className="col-6">
                  {`${influencer.address}, ${influencer.country}, ${influencer.state}, ${influencer.city}, ${influencer.pin}`}
                </div>
                <div className="col-6">Shipping Address</div>
                <div className="col-6">
                  {`${influencer.shippingaddress}, ${influencer.shipcountry}, ${influencer.shipstate}, ${influencer.shipcity}, ${influencer.shippin}`}
                </div>
                <div className="col-6">Industries</div>
                {/* <div className="col-6">{influencer.industry}</div> */}
                {/* map mathod for industry */}
                <div className="col-6 ">
                  <ul>
                    {influencer.industry?.map((industry, index) => (
                      <li key={index}>{industry}</li>
                    ))}
                  </ul>
                  </div>
              </div>
              {bankDetails.map(bank => (
                <React.Fragment key={bank.id}>
                  <hr />
                  <h5>Bank Details</h5>
                  <div className="row">
                    <div className="col-6">Account Holder Name</div>
                    <div className="col-6">{bank.accholdername}</div>
                    <div className="col-6">Bank Name</div>
                    <div className="col-6">{bank.bankname}</div>
                    <div className="col-6">Bank Account</div>
                    <div className="col-6">{bank.accountnumber}</div>
                    <div className="col-6">IFSC</div>
                    <div className="col-6" style={{ textTransform: 'uppercase' }}>{bank.ifsccode}</div>
                    <div className="col-6">Linked Phone Number</div>
                    <div className="col-6">{bank.phone}</div>
                    <div className="col-6">Bank Verification</div>
                    <div className="col-6">
                      <form method="POST" id="influbnkstsfrm">
                        <input type="hidden" name="bnkinfluid" value={influencer.id} />
                        <select name="influbnkstschng" id="influbnkstats" className="form-control" defaultValue={bank.verify}>
                          <option value="Pending">Pending</option>
                          <option value="Verified">Verified</option>
                        </select>
                      </form>
                    </div>
                  </div>
                </React.Fragment>
              ))}
              <hr />
              <div className="row">
                <div className="col-6">
                  <h5>Introduction Video</h5>
                  <video width="180" height="90" controls>
                    <source src={`../assets/img/inflintvideo/${influencer.introvideo}`} type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                  </video>
                </div>
                <div className="col-6">
                  <h5>Download Certificate</h5>
                  <a href={`certificate.php?influencerid=${influencer.id}`} target="blank">
                    <button className="btn btn-warning">
                      <FontAwesomeIcon icon={faPrint} /> Print / Save
                    </button>
                  </a>
                </div>
              </div>
              <hr />
              <div>
                <form method="POST" id="influwhtsapcnctfrm">
                  <input type="hidden" name="whtsapconnectinfluid" value={influencer.id} />
                  <input type="checkbox" name="whatsappconnect" id="influwhtsapcnct" defaultChecked={influencer.whatsappconnect === 1} />
                  <label htmlFor="influwhtsapcnct">Connected on Whatsapp?</label>
                </form>
              </div>
              <hr />
              <div className="sleepmodeswitch">
                <form method="POST" id="admnsleepmodeform">
                  <label>Sleep Mode</label>
                  <label className="switch">
                    <input type="hidden" name="admnsleepmodeinfluid" value={influencer.id} />
                    <input type="checkbox" name="admnsleepmodeonoff" id="admnsleepmodeonoff" defaultChecked={influencer.sleepmode === 1} />
                    <span className="slider round"></span>
                  </label>
                </form>
              </div>
              <hr />
              <div className="sleepmodeswitch">
                <form method="POST" id="admnsuspendform">
                  <label>Suspend Account</label>
                  <label className="switch">
                    <input type="hidden" name="admnsuspendinfluid" value={influencer.id} />
<input type="checkbox" name="admnsuspendonoff" id="admnsuspendonoff" defaultChecked={influencer.suspend === 1} />
<span className="slider round"></span>
</label>
</form>
</div>
<hr />
<div>
<h5>Prime Content Access</h5>
<form method="POST" id="primecontentfrm">
<label className="switch">
<input type="hidden" name="primecontentinfluid" value={influencer.id} />
<input type="checkbox" name="primecontentonoff" id="primecontentonoff" checked={primeContent} onChange={handlePrimeContentClick} />
<span className="slider round"></span>
</label>
</form>
</div>
</div>
<div className="col-lg-6">
<h5>Verification</h5>
<div className="form-group">
<label>Status</label>
<select className="form-control" onChange={handleVerificationChange} value={verificationStatus}>
<option value="Pending">Pending</option>
<option value="Approved">Approved</option>
<option value="Rejected">Rejected</option>
</select>
</div>
<div className="form-group">
<label>Reason</label>
<textarea className="form-control" rows="3"></textarea>
</div>
<div className="form-group">
<button type="button" className="btn btn-primary">Submit</button>
</div>
</div>
</div>
<hr />
<h5>Social Links</h5>
<div className="row">
{socialLinks.map(link => (
<div key={link.id} className="col-6">
<div>
<a href={link.link} target="_blank">{link.platform}</a>
{link.verify === 'approved' ? (
<FontAwesomeIcon icon={faCheckCircle} className="text-success ml-2" />
) : (
<FontAwesomeIcon icon={faTimes} className="text-danger ml-2" />
)}
</div>
</div>
))}
</div>
<hr />
<h5>Checklist</h5>
<div className="row">
{checklist.map(item => (
<div key={item.id} className="col-6">
<div>
<input type="checkbox" checked={item.checked} disabled /> {item.text}
</div>
</div>
))}
</div>
</div>
</div>
</div>
);
};

export default InfluencerAllDetails;
