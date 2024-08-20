import React, { useState, useEffect } from 'react';
import "../../../styles/creator/Account/PersonalInfo.css";
import BackHEader from '../../headers/backeHeader';
import { Link, useNavigate } from 'react-router-dom';
import uploadToCloudinary from '../../../utils/cloudinaryUpload.jsx';
import { makeApi } from '../../../api/callApi.tsx';
import { ToastContainer, toast } from 'react-toastify';

function PersonalInfo({ userDatas }) {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [language, setLanguage] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [industry, setIndustry] = useState('');
    const [panNumber, setPanNumber] = useState('');
    const [frontAadhar, setFrontAadhar] = useState(null);
    const [backAadhar, setBackAadhar] = useState(null);
    const [panCard, setPanCard] = useState(null);
    const [frontOther, setFrontOther] = useState(null);
    const [backOther, setBackOther] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [IndustryList, setIndustryList] = useState([]);
    const [filterIndustry, setFilterIndustry] = useState("");
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const FetchIndustryList = async () => {
        setLoading(true);
        try {
            const res = await makeApi('/v1/get-all-industries', 'GET');
            setIndustryList(res.data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const toggleIndustry = (industryName) => {
        let updatedFilterIndustry;
        const selectedIndustries = filterIndustry ? filterIndustry.split(',') : [];

        if (selectedIndustries.includes(industryName)) {
            updatedFilterIndustry = selectedIndustries.filter(name => name !== industryName).join(',');
        } else {
            if (selectedIndustries.length >= 5) {
                toast.error('You cannot select more than 5 industries');
                return;
            }
            updatedFilterIndustry = [...selectedIndustries, industryName].join(',');
        }
        setFilterIndustry(updatedFilterIndustry);
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        FetchIndustryList();
    }, []);

    useEffect(() => {
        if (userDatas) {
            setFullName(userDatas.user_name || '');
            setGender(userDatas.gender || '');
            setDob(userDatas.dob || '');
            setLanguage(userDatas.language || '');
            setEmail(userDatas.email || '');
            setPhone(userDatas.mobile || '');
            setIndustry(userDatas.industry || '');
            setFilterIndustry(userDatas.industry || '');  // Set initial filterIndustry
        }
    }, [userDatas]);

    const handleSave = async () => {
        setIsLoading(true);
        try {
            const dataToSend = {
                user_name: fullName,
                gender,
                dob,
                language,
                email,
                mobile: phone,
                industry: filterIndustry,
                panNumber,
            };

            // Upload images and add their URLs to dataToSend
            if (frontAadhar) {
                dataToSend.frontAadhar = await uploadToCloudinary(frontAadhar);
            }
            if (backAadhar) {
                dataToSend.backAadhar = await uploadToCloudinary(backAadhar);
            }
            if (panCard) {
                dataToSend.panCard = await uploadToCloudinary(panCard);
            }
            if (frontOther) {
                dataToSend.frontOther = await uploadToCloudinary(frontOther);
            }
            if (backOther) {
                dataToSend.backOther = await uploadToCloudinary(backOther);
            }

            // Make the API request to update user details
            console.log("dataToSend", dataToSend);
            const response = await makeApi(`/api/update-user/${userDatas._id}`, 'PUT', dataToSend);
            // console.log('Success:', response);
            navigate('/verified/user/my-details');
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div>
            <div>
                <Link to={"/verified/user/my-details"} style={{ textDecoration: "none", color: "black" }}>
                    <BackHEader title={"Personal Information"} />
                </Link>
            </div>
            <div className='main_personal_info_div' style={{ paddingBottom: "50px" }}>
                <div className='main_influencer_data'>
                    {/* Influencer ID */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Influencer ID</div>
                        <div className='influncer_item_second_div'>
                            {userDatas ? `TX${fullName.charAt(0).toUpperCase()}-${userDatas.id}` : 'Loading...'}
                        </div>

                    </div>
                    {/* Full Name */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Full Name</div>
                        <div className='influncer_item_second_div'>
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className='influncer_item_second_input'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div>
                    </div>
                    {/* Gender */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Gender</div>
                        <div className='influncer_item_second_div'>
                            <input
                                type="text"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className='influncer_item_second_input'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div>
                    </div>
                    {/* Date of Birth */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Date of Birth</div>
                        <div className='influncer_item_second_div'>
                            <input
                                type="text"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                className='influncer_item_second_input'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div>
                    </div>
                    {/* Language */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Language</div>
                        <div className='influncer_item_second_div'>
                            <input
                                type="text"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className='influncer_item_second_input'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div>
                    </div>
                    {/* Email */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Email</div>
                        <div className='influncer_item_second_div'>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='influncer_item_second_input'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div>
                    </div>
                    {/* Phone */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Phone</div>
                        <div className='influncer_item_second_div'>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className='influncer_item_second_input'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div>
                    </div>
                    {/* Industry */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Industry</div>
                        {/* <div className='influncer_item_second_div'> */}
                        {/* </div> */}
                         <div className="accordion-container influncer_item_second_div">
                            {/* <input
                                type="text"
                                value={industry}
                                onChange={(e) => setIndustry(e.target.value)}
                                className='influncer_item_second_input'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                                disabled
                            /> */}
                        <div className="">
                            <div className='industy_accordion' style={{maxWidth:"75%"}} >
                                <div className='industy_accordion-header align-items-center' style={{ cursor: "pointer", padding: "2px" , gap:"15px" , width:"100%" }} onClick={handleToggle}>
                                    <div>Industry Filter</div>
                                    <div className={`industy_accordion-icon ${isOpen ? 'open' : ''}`}>
                                        {isOpen ? '-' : '+'}
                                    </div>
                                </div>
                                {isOpen && (
                                    <div className='industy_filter_checkbox_parent_div'>
                                        {IndustryList.map((industry) => (
                                            <div key={industry.name} className='d-flex align-items-center industy_dropdown_checkbox_items'>
                                                <div className='w-25'>
                                                    <input
                                                        type="checkbox"
                                                        id={industry.name}
                                                        value={industry.name}
                                                        checked={filterIndustry.split(',').includes(industry.name)}
                                                        onChange={() => toggleIndustry(industry.name)}
                                                        style={{ width: "20px", height: "20px", cursor: "pointer" }}
                                                    />
                                                </div>
                                                <div className='w-100'>
                                                    <label htmlFor={industry.name}>{industry.name}</label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    </div>
                   
                </div>
                {/* Aadhar Card */}
                <div className='addhar_card_heading'>Aadhar Card</div>
                <div className='main_influencer_data'>
                    {/* Front Side Image */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Front Side</div>
                        <div className='influncer_item_second_div'>
                            <input
                                type="file"
                                onChange={(e) => setFrontAadhar(e.target.files[0])}
                                className='influncer_item_second_input form-control-file'
                                style={{ border: "1px solid var(--light-gray-color)", width: "100%" }}
                            />
                        </div>
                    </div>
                    {/* Back Side Image */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Back Side</div>
                        <div className='influncer_item_second_div'>
                            <input
                                type="file"
                                onChange={(e) => setBackAadhar(e.target.files[0])}
                                className='influncer_item_second_input form-control-file'
                                style={{ border: "1px solid var(--light-gray-color)", width: "100%" }}
                            />
                        </div>
                    </div>
                </div>
                {/* PAN Card */}
                <div className='addhar_card_heading'>PAN Card</div>
                <div className='main_influencer_data'>
                    {/* PAN Number */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>PAN Number</div>
                        <div className='influncer_item_second_div'>
                            <input
                                type="text"
                                value={panNumber}
                                onChange={(e) => setPanNumber(e.target.value)}
                                className='influncer_item_second_input'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div>
                    </div>
                    {/* PAN Card Image */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>PAN Card</div>
                        <div className='influncer_item_second_div'>
                            <input
                                type="file"
                                onChange={(e) => setPanCard(e.target.files[0])}
                                className='influncer_item_second_input form-control-file'
                                style={{ border: "1px solid var(--light-gray-color)", width: "100%" }}
                            />
                        </div>
                    </div>
                </div>
                {/* Other Government ID */}
                <div className='addhar_card_heading'>Other Government ID</div>
                <div className='main_influencer_data'>
                    {/* Front Side Image */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Front Side</div>
                        <div className='influncer_item_second_div'>
                            <input
                                type="file"
                                onChange={(e) => setFrontOther(e.target.files[0])}
                                className='influncer_item_second_input form-control-file'
                                style={{ border: "1px solid var(--light-gray-color)", width: "100%" }}
                            />
                        </div>
                    </div>
                    {/* Back Side Image */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Back Side</div>
                        <div className='influncer_item_second_div'>
                            <input
                                type="file"
                                onChange={(e) => setBackOther(e.target.files[0])}
                                className='influncer_item_second_input form-control-file'
                                style={{ border: "1px solid var(--light-gray-color)", width: "100%" }}
                            />
                        </div>
                    </div>
                </div>
                {/* Save Button */}
                <div className='btn btn-warning w-100' onClick={handleSave} disabled={isLoading}>
                    {isLoading ? 'Saving...' : 'Save Details'}
                </div>
            </div>
            <ToastContainer style={{ maxWidth: '300px' }} autoClose={1000} />

        </div>
    );
}

export default PersonalInfo;


// import React, { useState, useEffect } from 'react';
// import "../../../styles/creator/Account/PersonalInfo.css";
// import BackHEader from '../../headers/backeHeader';
// import { Link, useNavigate } from 'react-router-dom';
// import uploadToCloudinary from '../../../utils/cloudinaryUpload.jsx';
// import { makeApi } from '../../../api/callApi.tsx';
// import { ToastContainer, toast } from 'react-toastify';

// function PersonalInfo({ userDatas }) {
//     const navigate = useNavigate();
//     const [fullName, setFullName] = useState('');
//     const [gender, setGender] = useState('');
//     const [dob, setDob] = useState('');
//     const [language, setLanguage] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [industry, setIndustry] = useState('');
//     const [panNumber, setPanNumber] = useState('');
//     const [frontAadhar, setFrontAadhar] = useState(null);
//     const [backAadhar, setBackAadhar] = useState(null);
//     const [panCard, setPanCard] = useState(null);
//     const [frontOther, setFrontOther] = useState(null);
//     const [backOther, setBackOther] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [IndustryList, setIndustryList] = ([]);
//     const [filterIndustry, setFilterIndustry] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);

//     const FetchIndustryList = async () => {
//         setLoading(true);
//         try {
//             const res = await makeApi('/v1/get-all-industries', 'GET');
//             setIndustryList(res.data.data);
//         } catch (error) {
//             console.log(error);
//         } finally {
//             setLoading(false);
//         }
//     };
//     const toggleIndustry = (industryName) => {
//         let updatedFilterIndustry;
//         const selectedIndustries = filterIndustry ? filterIndustry.split(',') : [];

//         if (selectedIndustries.includes(industryName)) {
//             updatedFilterIndustry = selectedIndustries.filter(name => name !== industryName).join(',');
//         } else {
//             if (selectedIndustries.length >= 5) {
//                 toast.error('You cannot select more than 5 industries');
//                 return;
//             }
//             updatedFilterIndustry = [...selectedIndustries, industryName].join(',');
//         }
//         setFilterIndustry(updatedFilterIndustry);
//     };

//     const handleToggle = () => {
//         setIsOpen(!isOpen);
//     };
//     useEffect(() => {
//         FetchIndustryList();
//     }, []);

//     useEffect(() => {
//         if (userDatas) {
//             setFullName(userDatas.user_name || '');
//             setGender(userDatas.gender || '');
//             setDob(userDatas.dob || '');
//             setLanguage(userDatas.language || '');
//             setEmail(userDatas.email || '');
//             setPhone(userDatas.mobile || '');
//             setIndustry(userDatas.industry || '');
//         }
//     }, [userDatas]);

//     const handleSave = async () => {
//         setIsLoading(true);
//         try {
//             const dataToSend = {
//                 user_name: fullName,
//                 gender,
//                 dob,
//                 language,
//                 email,
//                 mobile: phone,
//                 industry,
//                 panNumber,
//             };

//             // Upload images and add their URLs to dataToSend
//             if (frontAadhar) {
//                 dataToSend.frontAadhar = await uploadToCloudinary(frontAadhar);
//             }
//             if (backAadhar) {
//                 dataToSend.backAadhar = await uploadToCloudinary(backAadhar);
//             }
//             if (panCard) {
//                 dataToSend.panCard = await uploadToCloudinary(panCard);
//             }
//             if (frontOther) {
//                 dataToSend.frontOther = await uploadToCloudinary(frontOther);
//             }
//             if (backOther) {
//                 dataToSend.backOther = await uploadToCloudinary(backOther);
//             }

//             // Make the API request to update user details
//             const response = await makeApi(`/api/update-user`, 'PUT', dataToSend);
//             console.log('Success:', response);
//             navigate('/verified/user/my-details');
//         } catch (error) {
//             console.error('Error:', error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div>
//             <div>
//                 <Link to={"/verified/user/my-details"} style={{ textDecoration: "none", color: "black" }}>
//                     <BackHEader title={"Personal Information"} />
//                 </Link>
//             </div>
//             <div className='main_personal_info_div' style={{ paddingBottom: "50px" }}>
//                 <div className='main_influencer_data'>
//                     {/* Influencer ID */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Influencer ID</div>
//                         <div className='influncer_item_second_div'>
//                             {userDatas ? `TX${fullName.charAt(0).toUpperCase()}-${userDatas.id}` : 'Loading...'}
//                         </div>

//                     </div>
//                     {/* Full Name */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Full Name</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="text"
//                                 value={fullName}
//                                 onChange={(e) => setFullName(e.target.value)}
//                                 className='influncer_item_second_input'
//                                 style={{ border: "1px solid var(--light-gray-color)" }}
//                             />
//                         </div>
//                     </div>
//                     {/* Gender */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Gender</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="text"
//                                 value={gender}
//                                 onChange={(e) => setGender(e.target.value)}
//                                 className='influncer_item_second_input'
//                                 style={{ border: "1px solid var(--light-gray-color)" }}
//                             />
//                         </div>
//                     </div>
//                     {/* Date of Birth */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Date of Birth</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="text"
//                                 value={dob}
//                                 onChange={(e) => setDob(e.target.value)}
//                                 className='influncer_item_second_input'
//                                 style={{ border: "1px solid var(--light-gray-color)" }}
//                             />
//                         </div>
//                     </div>
//                     {/* Language */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Language</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="text"
//                                 value={language}
//                                 onChange={(e) => setLanguage(e.target.value)}
//                                 className='influncer_item_second_input'
//                                 style={{ border: "1px solid var(--light-gray-color)" }}
//                             />
//                         </div>
//                     </div>
//                     {/* Email */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Email</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="text"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className='influncer_item_second_input'
//                                 style={{ border: "1px solid var(--light-gray-color)" }}
//                             />
//                         </div>
//                     </div>
//                     {/* Phone */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Phone</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="text"
//                                 value={phone}
//                                 onChange={(e) => setPhone(e.target.value)}
//                                 className='influncer_item_second_input'
//                                 style={{ border: "1px solid var(--light-gray-color)" }}
//                             />
//                         </div>
//                     </div>
//                     {/* Industry */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Industry</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="text"
//                                 value={industry}
//                                 onChange={(e) => setIndustry(e.target.value)}
//                                 className='influncer_item_second_input'
//                                 style={{ border: "1px solid var(--light-gray-color)" }}
//                             />
//                         </div>
//                     </div>
//                     <div className="accordion-container w-50">
//                         <div className="">

//                             <div className='industy_accordion'>
//                                 <div className='industy_accordion-header' onClick={handleToggle}>
//                                     <h3>Industry Filter</h3>
//                                     <span className={`industy_accordion-icon ${isOpen ? 'open' : ''}`}>
//                                         {isOpen ? '-' : '+'}
//                                     </span>
//                                 </div>
//                                 {isOpen && (
//                                     <div className='industy_filter_checkbox_parent_div'>
//                                         {IndustryList.map((industry) => (
//                                             <div key={industry.name} className='d-flex align-items-center industy_dropdown_checkbox_items'>
//                                                 <div className='w-25'>
//                                                     <input
//                                                         type="checkbox"
//                                                         id={industry.name}
//                                                         value={industry.name}
//                                                         checked={filterIndustry.split(',').includes(industry.name)}
//                                                         onChange={() => toggleIndustry(industry.name)}
//                                                         style={{ width: "20px", height: "20px", cursor: "pointer" }}
//                                                     />
//                                                 </div>
//                                                 <div className='w-100'>
//                                                     <label htmlFor={industry.name}>{industry.name}</label>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                             {/* <span id="error-msg" style={{ color: "red" }}>{errorMsg}</span> */}
//                         </div>
//                     </div>

//                 </div>
//                 {/* Aadhar Card */}
//                 <div className='addhar_card_heading'>Aadhar Card</div>
//                 <div className='main_influencer_data'>
//                     {/* Front Side Image */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Front Side</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="file"
//                                 onChange={(e) => setFrontAadhar(e.target.files[0])}
//                                 className='influncer_item_second_input form-control-file'
//                                 style={{ border: "1px solid var(--light-gray-color)", width: "100%" }}
//                             />
//                         </div>
//                     </div>
//                     {/* Back Side Image */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Back Side</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="file"
//                                 onChange={(e) => setBackAadhar(e.target.files[0])}
//                                 className='influncer_item_second_input form-control-file'
//                                 style={{ border: "1px solid var(--light-gray-color)", width: "100%" }}
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 {/* PAN Card */}
//                 <div className='addhar_card_heading'>PAN Card</div>
//                 <div className='main_influencer_data'>
//                     {/* PAN Number */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>PAN Number</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="text"
//                                 value={panNumber}
//                                 onChange={(e) => setPanNumber(e.target.value)}
//                                 className='influncer_item_second_input'
//                                 style={{ border: "1px solid var(--light-gray-color)" }}
//                             />
//                         </div>
//                     </div>
//                     {/* PAN Card Image */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>PAN Card</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="file"
//                                 onChange={(e) => setPanCard(e.target.files[0])}
//                                 className='influncer_item_second_input form-control-file'
//                                 style={{ border: "1px solid var(--light-gray-color)", width: "100%" }}
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 {/* Other Government ID */}
//                 <div className='addhar_card_heading'>Other Government ID</div>
//                 <div className='main_influencer_data'>
//                     {/* Front Side Image */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Front Side</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="file"
//                                 onChange={(e) => setFrontOther(e.target.files[0])}
//                                 className='influncer_item_second_input form-control-file'
//                                 style={{ border: "1px solid var(--light-gray-color)", width: "100%" }}
//                             />
//                         </div>
//                     </div>
//                     {/* Back Side Image */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Back Side</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="file"
//                                 onChange={(e) => setBackOther(e.target.files[0])}
//                                 className='influncer_item_second_input form-control-file'
//                                 style={{ border: "1px solid var(--light-gray-color)", width: "100%" }}
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 {/* Save Button */}
//                 <div className='btn btn-warning w-100' onClick={handleSave} disabled={isLoading}>
//                     {isLoading ? 'Saving...' : 'Save Details'}
//                 </div>
//             </div>
//             <ToastContainer style={{maxWidth: '300px'}} autoClose={1000} />

//         </div>
//     );
// }

// export default PersonalInfo;
