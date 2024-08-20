
import React, { useEffect, useState } from 'react';
import BackHeader from '../../headers/backeHeader';
import "../../../styles/creator/campain/campainList.css";
import { makeApi } from '../../../api/callApi.tsx';
import { Link } from 'react-router-dom';
import insta_icon from "../../../assets/creator/insta-icon.png";
import clock_image from "../../../assets/creator/clock_image.png";
import CardLoader from '../../../utils/cardLoader.jsx';
import uploadToCloudinary from '../../../utils/cloudinaryUpload.jsx';
import MainLoader from '../../../utils/loader.jsx';
import { ToastContainer, toast } from "react-toastify";


function CampaignList() {
    const [campaignList, setCampaignList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    // const [progress, setUploadProgress] = useState(0);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedCampaign, setSelectedCampaign] = useState(null);
    const [showCorrectionPopup, setShowCorrectionPopup] = useState(false); // New state for popup visibility

    const fetchAllCampaigns = async () => {
        setLoading(true);
        try {
            const response = await makeApi('/v1/influencer/my-apply-campaigns?submition=yes', 'GET');
            setCampaignList(response?.data.apply || []);
        } catch (error) {
            console.error('Error fetching campaigns:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllCampaigns();
    }, []);

    const formatDate = (deadline) => {
        const dateObj = new Date(deadline);
        const day = dateObj.getDate().toString().padStart(2, '0');
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const year = dateObj.getFullYear().toString().slice(-2);
        return `${day}/${month}/${year}`;
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile || !selectedCampaign) {
            return toast.error('Please select a file.');
        }
        setIsLoading(true);
        setUploading(true);
        try {
            const file = selectedFile;
            const uploadedImageUrl = await uploadToCloudinary(file, setUploadProgress);
            console.log();

            await makeApi(`/v1/influencer/edit-apply-campaign/${selectedCampaign.influ_id}/${selectedCampaign.campaign_no}`, 'PUT', {
                content: uploadedImageUrl,
            });

            fetchAllCampaigns();

        } catch (error) {
            console.error('Error uploading file:', error);
        } finally {
            setUploading(false);
            setIsLoading(false);
            setUploadProgress(0);
            setSelectedFile(null);
            setSelectedCampaign(null);
        }
    };

    const updateCampaign = async () => {
        try {
            const response = await makeApi(`/v1/influencer/edit-apply-campaign/${selectedCampaign.influ_id}/${selectedCampaign.campaign_no}`, 'PUT', {
                post_link: selectedCampaign.post_link,
            });

            fetchAllCampaigns();
        } catch (error) {
            console.error('Error updating campaign:', error);
        }
    };

    return (
        <>
            <div>
                <div>
                    <Link to={"/verified/creator/home"} style={{ textDecoration: "none" }} >
                    <BackHeader title={"Projects"} />
                    </Link>
                </div>
                {campaignList.length > 0 ? (
                    <div style={{ marginBottom: "130px" }} className='px-2'>
                        {isLoading && <div className='loaderbgcolor' > <MainLoader /></div>}
                        {loading && <div> <CardLoader />
                            <CardLoader /><CardLoader />
                        </div>}

                        {campaignList.map(campaign => (
                            <div key={campaign._id} className='main_foryou_cart'>
                                <div className='main_foryou_cart_image_div '>
                                    <div className='main_foryou_cart_requirement'>
                                        <div className='main_foryou_cart_requirement_left'>
                                            <div className='foryou_cart_ten_kay'>{campaign.followers}</div>
                                            <div className='text-white requiemnt_message'>
                                                <div className='main_foryou_cart_content_payout d-flex gap-1 align-items-center'>
                                                    <div>
                                                        <img src={clock_image} alt="" className='' width={"20px"} />
                                                    </div>
                                                    <div>
                                                        {formatDate(campaign.campaignDetails.dead_line)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='main_foryou_cart_requirement_left'>

                                            <div className='text-black requiemnt_message' style={{ fontSize: "14px", fontWeight: "bold" }}>Status: <br />
                                                <Link to={`/verified/creator/status/${campaign._id}`}  >
                                                    <div style={{ cursor: "pointer" }}>

                                                        {campaign.content_approved || "N/A"}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="https://tixteen.com/tixteenapp/assets/img/Banner/paidbanner.jpg" alt="" className='main_foryou_cart_image' />
                                </div>
                                <div className='main_foryou_cart_content flex-column gap-2 justify-content-center'>
                                    <div className='main_foryou_cart_content_left'>
                                        <div className='main_foryou_cart_content_left_heading'>
                                            {campaign.campaignDetails.platforms === "Instagram" && (
                                                <div>
                                                    <Link to={campaign.campaignDetails.platform_link} target="_blank">
                                                        <img src={insta_icon} alt="" />
                                                    </Link>
                                                </div>
                                            )}
                                            {campaign.campaignDetails.platforms === "Facebook" && (
                                                <Link to={campaign.campaignDetails.platform_link} target="_blank" style={{ color: "blue" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                                    </svg>
                                                </Link>
                                            )}
                                            <div>{campaign.campaignDetails.campaign_name}</div>
                                        </div>
                                        <div>
                                            {campaign.campaignDetails.deliverables && Array.isArray(campaign.campaignDetails.deliverables) && (
                                                <ul className='main_foryou_cart_content_payout'>
                                                    {campaign.campaignDetails.deliverables.length > 0 ? (
                                                        campaign.campaignDetails.deliverables.map((deliverable, index) => (
                                                            <li key={index}>{deliverable}</li>
                                                        ))
                                                    ) : (
                                                        <li>No deliverables available</li>
                                                    )}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                    <div className='main_foryou_cart_content_right'>
                                        <div className='main_foryou_cart_content_payout d-flex gap-1 align-items-center'>
                                            {/* <div>
                                            <img src="https://tixteen.com/tixteenapp/assets/img/Icon/hand.png" alt="" />
                                        </div> */}
                                            {/* <div>
                                            Payout <br /> {campaign.campaignDetails.payout} ₹
                                        </div> */}
                                        </div>
                                    </div>
                                    {/* content */}
                                    <div className='my-3 mx-3 text-white d-flex justify-content-between'>
                                        {campaign.approval === "Pending" && (campaign.content_approved === "" || campaign.content_approved === " ") && campaign.content && (
                                            <div>
                                                <div>

                                                    <div>Reward: ₹0</div>
                                                    <div>Waiting for approval</div>
                                                </div>
                                                {/* <div>
                                                    <button> {campaign.influ_approval}/ </button>
                                                </div> */}

                                            </div>
                                        )}
                                        {campaign.influ_approval === "Rejected" && (
                                            <div>
                                                <div className='text-danger' >Rejected</div>
                                            </div>

                                        )}
                                        {
                                            campaign.influ_approval === "Accepted" && campaign.content_approved === "correction" && (
                                                <div className='d-flex gap-3 text-center w-100  ' >
                                                    <div className='' style={{ width: "50%" }} >
                                                        <div className='w-100 text-start' >

                                                            <div className='text-warning mb-3' >Correction Pending</div>
                                                            <div
                                                                className=' requiemnt_message p-2 correction_popup_btn btn btn-secondary text-white '
                                                                onClick={() => {
                                                                    setSelectedCampaign(campaign);
                                                                    setShowCorrectionPopup(true);
                                                                }}
                                                            >
                                                                View Correction
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='text-end' style={{ width: "70%" }} >
                                                        <div className='apply_btn text-white  justify-content-between  '>
                                                            <div className='w-100 requiemnt_message mb-2  d-flex justify-content-end' >

                                                                <input type="file" onChange={handleFileChange} className='form-control requiemnt_message w-75' />
                                                            </div>
                                                            <div className='w-100' >
                                                                <button
                                                                    onClick={() => {
                                                                        setSelectedCampaign(campaign);
                                                                        handleUpload();
                                                                    }}
                                                                    disabled={!selectedFile || uploading}
                                                                    className='btn btn-warning requiemnt_message p-2'
                                                                    style={{ cursor: 'pointer' }}
                                                                >
                                                                    {uploading ? `Uploading... (${uploadProgress}%)` : 'ReUpload Content'}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        }
                                        {
                                            campaign.approval === "" && campaign.influ_approval === "Accepted" && (
                                                <div className='apply_btn text-white d-flex justify-content-between w-100'>
                                                    <div className='w-75' >

                                                        <input type="file" onChange={handleFileChange} className='form-control' />
                                                    </div>
                                                    <div className='w-50' >

                                                        <button
                                                            onClick={() => {
                                                                setSelectedCampaign(campaign);
                                                                handleUpload();
                                                            }}
                                                            disabled={!selectedFile || uploading}
                                                            className='btn btn-warning'
                                                            style={{ cursor: 'pointer', fontSize: "12px" }}
                                                        >
                                                            {uploading ? `Uploading... (${uploadProgress}%)` : 'Upload Content'}
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {
                                            campaign.content_approved === "Accepted" && campaign.approval === "0" && campaign.submition !== "Completed" && (
                                                <div className='d-flex justify-content-between gap-3'>
                                                    <div>
                                                        <input
                                                            type='text'
                                                            placeholder='Enter Post Link'
                                                            className='form-control'
                                                            name="post_link"
                                                            value={selectedCampaign && selectedCampaign._id === campaign._id ? selectedCampaign.post_link : campaign.post_link}
                                                            onChange={(e) => setSelectedCampaign({ ...campaign, post_link: e.target.value })}
                                                        />
                                                    </div>
                                                    <div className='btn btn-warning' onClick={() => {
                                                        setSelectedCampaign(campaign);
                                                        updateCampaign();
                                                    }}>Upload</div>
                                                </div>
                                            )
                                        }
                                        <div>
                                            {campaign.post_link && <div>Post Link: <Link className='btn btn-success' to={campaign.post_link} target="_blank" rel="noopener noreferrer">View</Link></div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                ) : (
                    <div className='main_campain_list' >
                        <div className=' bold_text no_campain_text_campain_list' >
                            No Campgain is Running.
                        </div>
                    </div>
                )}
            </div>

            {/* Correction Popup */}
            {showCorrectionPopup && (
                <div className='correction_popup_overlay'>
                    <div className='correction_popup_container'>
                        <div className='correction_popup_header'>
                            <h3>Correction Details</h3>
                            <button className='correction_popup_close_btn' onClick={() => setShowCorrectionPopup(false)}>×</button>
                        </div>
                        <div className='correction_popup_content'>
                            <p>{selectedCampaign?.change_reason || "No correction reason provided."}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CampaignList;


