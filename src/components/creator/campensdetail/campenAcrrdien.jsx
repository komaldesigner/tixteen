// import React, { useEffect, useState } from 'react';
// import "../../../styles/creator/campainDetsils/campenAcrrdien.css";
// import { AccordienOptions, Accordion } from './accordienOptions';
// import foundation_male_female from "../../../assets/creator/campens/foundation_male-female.png";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { makeApi } from '../../../api/callApi.tsx';
// import MainLoader from '../../../utils/loader';
// import { useNavigate } from "react-router-dom";
// import VerifyPOP from '../../../utils/Auth/VerifiPopup.jsx';

// // Function to format the date
// function formatDate(dateString) {
//     const date = new Date(dateString);
//     const day = String(date.getUTCDate()).padStart(2, '0');
//     const month = String(date.getUTCMonth() + 1).padStart(2, '0');
//     const year = date.getUTCFullYear();

//     return `${day}-${month}-${year}`;
// }

// function CampenAcrrdien({ campaignData }) {
//     const navigate = useNavigate();

//     const accordionData = campaignData;
//     const [openAccordion, setOpenAccordion] = useState(null);
//     const [checkedDeliverables, setCheckedDeliverables] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);



//     const [isverify, setIsverify] = useState(false);
 

//     const FetachData = async () => {
//         setIsLoading(true);
//         try {
//             const res = await makeApi('/api/my-profile', 'GET');
//             if (res.data.user.verification === 'Social Media Verification Pending') {
//                 setIsverify(true);
//             }
//             setIsLoading(false);
//         } catch (error) {
//             console.error(error);
//             setIsLoading(false);
//         }
//     };
//     useEffect(() => {
//         FetachData();
//     }, []);










//     const handleToggle = (accordionId) => {
//         setOpenAccordion(openAccordion === accordionId ? null : accordionId);
//     };

//     const handleCheckboxChange = (deliverableId) => {
//         setCheckedDeliverables(prevState =>
//             prevState.includes(deliverableId)
//                 ? prevState.filter(id => id !== deliverableId)
//                 : [...prevState, deliverableId]
//         );

//         if (filteredDeliverables.length === checkedDeliverables.length + 1) {
//             toast("All deliverables checked!");
//         }
//     };

//     const handleSubmit = async () => {
//         if (!allChecked) {
//             toast.error("Please check all deliverables before submitting.");
//         } else {
//             setIsLoading(true);
//             try {
//                 const response = await makeApi(`/V1/apply-campaign`, "POST", {
//                     content_type: accordionData.content_type,
//                     client_id: accordionData.client_id,
//                     campaign_no: accordionData.campaign_no,
//                     amount: accordionData.price,
//                 })
//                 if (response.status === 200) {
//                     toast("Congratulations! You have applied successfully.");
//                     setTimeout(() => {
//                         navigate("/verified/creator/home");
//                     }, 3000);
//                 }

//             } catch (error) {
//                 console.error('Error:', error); // Debugging line
//                 toast.error("An error occurred while submitting the form. Please try again.");
//             } finally {
//                 setIsLoading(false);
//             }
//         }
//     };

//     // Filter out deliverables with empty deliverable field
//     const filteredDeliverables = accordionData?.deliverables?.filter(item => item.deliverable && item.deliverable.trim() !== "");

//     const allChecked = filteredDeliverables?.length > 0 && filteredDeliverables.every(item => checkedDeliverables.includes(item._id));

//     if (!accordionData || isLoading) {
//         return <div className='loaderbgcolor' > <MainLoader /></div>

//     }

//     // Format the deadline date
//     const formattedDeadline = formatDate(accordionData.dead_line);

//     const CriteriaData = () => (
//         <>
//             <AccordienOptions image={foundation_male_female} message={`Gender: ${accordionData.gender}`} />
//             <AccordienOptions image={"https://tixteen.com/tixteenapp/influencer/assets/svg/circlurline.svg"} message={`Between: ${accordionData.age} - ${accordionData.till_age} year`} />
//             <AccordienOptions image={"https://tixteen.com/tixteenapp/influencer/assets/svg/price-tag_.svg"} message={`Industry: ${accordionData.industry}`} />
//         </>
//     );

//     const DeliverablesData = () => (
//         <>
//             {filteredDeliverables?.map((item) => (
//                 <div key={item._id} className="deliverable-item d-flex align-items-center gap-2">
//                     <div className='w-100'>
//                         <AccordienOptions image={"https://tixteen.com/tixteenapp/influencer/assets/svg/Vector.svg"} message={item.deliverable} />
//                     </div>
//                     <div>
//                         <input
//                             onChange={() => handleCheckboxChange(item._id)}
//                             type="checkbox"
//                             checked={checkedDeliverables.includes(item._id)}
//                             style={{ width: "20px", height: "20px", cursor: "pointer" }}
//                         />
//                     </div>
//                 </div>
//             ))}
//         </>
//     );

//     const RewardData = () => (
//         <div className='bg-warning rewardData_accordien' style={{ padding: "0px", zIndex: "10" }}>
//             <AccordienOptions image={"https://tixteen.com/tixteenapp/influencer/assets/svg/Layer.svg"} message={`10% get approval before ${formatDate(accordionData.dead_line)}`} />
//         </div>
//     );

//     return (
//         <div className='main_campen_acrrdien_parent_div'>
//             <ToastContainer
//                 style={{ width: "300px" }}
//                 position="top-center"
//                 autoClose={3000}
//             />
//             <div className="accordion campens_acordion" id="accordionFlushExample">
//                 <Accordion
//                     id={"flush-headingOne"}
//                     heading={"Criteria"}
//                     data={<CriteriaData />}
//                     targetId="flush-collapseOne"
//                     isOpen={openAccordion === 'flush-headingOne'}
//                     onToggle={() => handleToggle('flush-headingOne')}
//                 />
//                 <Accordion
//                     id={"flush-headingTwo"}
//                     heading={"Duration"}
//                     data={<AccordienOptions image={"https://tixteen.com/tixteenapp/influencer/assets/svg/hourglass_7873698.svg"} message={`Deadline: ${formatDate(accordionData.created_date)} - ${formatDate(accordionData.dead_line)}`} />}
//                     targetId="flush-collapseTwo"
//                     isOpen={openAccordion === 'flush-headingTwo'}
//                     onToggle={() => handleToggle('flush-headingTwo')}
//                 />
//                 <Accordion
//                     id={"flush-headingThree"}
//                     heading={"Payment Details"}
//                     data={<AccordienOptions image={foundation_male_female} message={`Price: ${accordionData.price}`} />}
//                     targetId="flush-collapseThree"
//                     isOpen={openAccordion === 'flush-headingThree'}
//                     onToggle={() => handleToggle('flush-headingThree')}
//                 />
//                 <Accordion
//                     id={"flush-headingFour"}
//                     heading={"Deliverable"}
//                     data={<DeliverablesData />}
//                     targetId="flush-collapseFour"
//                     isOpen={openAccordion === 'flush-headingFour'}
//                     onToggle={() => handleToggle('flush-headingFour')}
//                 />
//                 <Accordion
//                     id={"flush-headingSeven"}
//                     heading={"Reward"}
//                     data={<RewardData />}
//                     targetId="flush-collapseSeven"
//                     isOpen={openAccordion === 'flush-headingSeven'}
//                     onToggle={() => handleToggle('flush-headingSeven')}
//                 />
//                 <Accordion
//                     id={"flush-headingFive"}
//                     heading={"Campaign Summary"}
//                     data={<AccordienOptions image={foundation_male_female} message={accordionData.remark} />}
//                     targetId="flush-collapseFive"
//                     isOpen={openAccordion === 'flush-headingFive'}
//                     onToggle={() => handleToggle('flush-headingFive')}
//                 />
//                 <Accordion
//                     id={"flush-headingSix"}
//                     heading={"Help and Support"}
//                     data={<AccordienOptions image={foundation_male_female} message={`Platform: ${accordionData.platforms}`} />}
//                     targetId="flush-collapseSix"
//                     isOpen={openAccordion === 'flush-headingSix'}
//                     onToggle={() => handleToggle('flush-headingSix')}
//                 />
//             </div>
//             {!isverify && (
                
//             <div className='text-center'>
//                 <button
//                     className='campen_acrrdien_apply_button'
//                     onClick={handleSubmit}
//                 >
//                     Submit
//                 </button>
//             </div>
//             )}
//         </div>
//     );
// }

// export default CampenAcrrdien;

import React, { useEffect, useState } from 'react';
import "../../../styles/creator/campainDetsils/campenAcrrdien.css";
import { AccordienOptions, Accordion } from './accordienOptions';
import foundation_male_female from "../../../assets/creator/campens/foundation_male-female.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { makeApi } from '../../../api/callApi.tsx';
import MainLoader from '../../../utils/loader';
import { useNavigate } from "react-router-dom";
import VerifyPOP from '../../../utils/Auth/VerifiPopup.jsx';

// Function to format the date
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}-${month}-${year}`;
}

function CampenAcrrdien({ campaignData }) {
    const navigate = useNavigate();

    const accordionData = campaignData;
    const [openAccordion, setOpenAccordion] = useState(null);
    const [checkedDeliverables, setCheckedDeliverables] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isverify, setIsverify] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const FetachData = async () => {
        setIsLoading(true);
        try {
            const res = await makeApi('/api/my-profile', 'GET');
            if (res.data.user.verification === 'Social Media Verification Pending') {
                setIsverify(true);
            }
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };
    useEffect(() => {
        FetachData();
    }, []);

    const handleToggle = (accordionId) => {
        setOpenAccordion(openAccordion === accordionId ? null : accordionId);
    };

    const handleCheckboxChange = (deliverableId) => {
        if (isverify) {
            setShowPopup(true);
            return;
        }

        setCheckedDeliverables(prevState =>
            prevState.includes(deliverableId)
                ? prevState.filter(id => id !== deliverableId)
                : [...prevState, deliverableId]
        );

        if (filteredDeliverables.length === checkedDeliverables.length + 1) {
            toast("All deliverables checked!");
        }
    };

    const handleSubmit = async () => {
        if (!allChecked) {
            toast.error("Please check all deliverables before submitting.");
        } else {
            setIsLoading(true);
            try {
                const response = await makeApi(`/V1/apply-campaign`, "POST", {
                    content_type: accordionData.content_type,
                    client_id: accordionData.client_id,
                    campaign_no: accordionData.campaign_no,
                    amount: accordionData.price,
                });
                if (response.status === 200) {
                    toast("Congratulations! You have applied successfully.");
                    setTimeout(() => {
                        navigate("/verified/creator/home");
                    }, 3000);
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error("An error occurred while submitting the form. Please try again.");
            } finally {
                setIsLoading(false);
            }
        }
    };

    const filteredDeliverables = accordionData?.deliverables?.filter(item => item.deliverable && item.deliverable.trim() !== "");
    const allChecked = filteredDeliverables?.length > 0 && filteredDeliverables.every(item => checkedDeliverables.includes(item._id));

    if (!accordionData || isLoading) {
        return <div className='loaderbgcolor'><MainLoader /></div>;
    }

    const formattedDeadline = formatDate(accordionData.dead_line);

    const CriteriaData = () => (
        <>
            <AccordienOptions image={foundation_male_female} message={`Gender: ${accordionData.gender}`} />
            <AccordienOptions image={"https://tixteen.com/tixteenapp/influencer/assets/svg/circlurline.svg"} message={`Between: ${accordionData.age} - ${accordionData.till_age} year`} />
            <AccordienOptions image={"https://tixteen.com/tixteenapp/influencer/assets/svg/price-tag_.svg"} message={`Industry: ${accordionData.industry}`} />
        </>
    );

    const DeliverablesData = () => (
        <>
            {filteredDeliverables?.map((item) => (
                <div key={item._id} className="deliverable-item d-flex align-items-center gap-2">
                    <div className='w-100'>
                        <AccordienOptions image={"https://tixteen.com/tixteenapp/influencer/assets/svg/Vector.svg"} message={item.deliverable} />
                    </div>
                    <div>
                        <input
                            onChange={() => handleCheckboxChange(item._id)}
                            type="checkbox"
                            checked={checkedDeliverables.includes(item._id)}
                            style={{ width: "20px", height: "20px", cursor: "pointer" }}
                        />
                    </div>
                </div>
            ))}
        </>
    );

    const RewardData = () => (
        <div className='bg-warning rewardData_accordien' style={{ padding: "0px", zIndex: "10" }}>
            <AccordienOptions image={"https://tixteen.com/tixteenapp/influencer/assets/svg/Layer.svg"} message={`10% get approval before ${formatDate(accordionData.dead_line)}`} />
        </div>
    );

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className='main_campen_acrrdien_parent_div'>
            <ToastContainer
                style={{ width: "300px" }}
                position="top-center"
                autoClose={3000}
            />
            <div className="accordion campens_acordion" id="accordionFlushExample">
                <Accordion
                    id={"flush-headingOne"}
                    heading={"Criteria"}
                    data={<CriteriaData />}
                    targetId="flush-collapseOne"
                    isOpen={openAccordion === 'flush-headingOne'}
                    onToggle={() => handleToggle('flush-headingOne')}
                />
                <Accordion
                    id={"flush-headingTwo"}
                    heading={"Duration"}
                    data={<AccordienOptions image={"https://tixteen.com/tixteenapp/influencer/assets/svg/hourglass_7873698.svg"} message={`Deadline: ${formatDate(accordionData.created_date)} - ${formatDate(accordionData.dead_line)}`} />}
                    targetId="flush-collapseTwo"
                    isOpen={openAccordion === 'flush-headingTwo'}
                    onToggle={() => handleToggle('flush-headingTwo')}
                />
                <Accordion
                    id={"flush-headingThree"}
                    heading={"Payment Details"}
                    data={<AccordienOptions image={foundation_male_female} message={`Price: ${accordionData.price}`} />}
                    targetId="flush-collapseThree"
                    isOpen={openAccordion === 'flush-headingThree'}
                    onToggle={() => handleToggle('flush-headingThree')}
                />
                <Accordion
                    id={"flush-headingFour"}
                    heading={"Deliverable"}
                    data={<DeliverablesData />}
                    targetId="flush-collapseFour"
                    isOpen={openAccordion === 'flush-headingFour'}
                    onToggle={() => handleToggle('flush-headingFour')}
                />
                <Accordion
                    id={"flush-headingSeven"}
                    heading={"Reward"}
                    data={<RewardData />}
                    targetId="flush-collapseSeven"
                    isOpen={openAccordion === 'flush-headingSeven'}
                    onToggle={() => handleToggle('flush-headingSeven')}
                />
                <Accordion
                    id={"flush-headingFive"}
                    heading={"Campaign Summary"}
                    data={<AccordienOptions image={foundation_male_female} message={accordionData.remark} />}
                    targetId="flush-collapseFive"
                    isOpen={openAccordion === 'flush-headingFive'}
                    onToggle={() => handleToggle('flush-headingFive')}
                />
                <Accordion
                    id={"flush-headingSix"}
                    heading={"Help and Support"}
                    data={<AccordienOptions image={foundation_male_female} message={`Platform: ${accordionData.platforms}`} />}
                    targetId="flush-collapseSix"
                    isOpen={openAccordion === 'flush-headingSix'}
                    onToggle={() => handleToggle('flush-headingSix')}
                />
            </div>
            {!isverify && (
                <div className='text-center'>
                    <button
                        className='campen_acrrdien_apply_button'
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            )}
            {showPopup && (
                <div
                    style={{
                        position: 'fixed',
                        zIndex: '10001',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <VerifyPOP onClose={closePopup} />
                </div>
            )}
        </div>
    );
}

export default CampenAcrrdien;
