import React, { useState } from 'react';
import BackHEader from '../../headers/backeHeader';
import { Link } from 'react-router-dom';
import { makeApi } from '../../../api/callApi.tsx';

function Addaddress() {
    const [addressType, setAddressType] = useState('Permanent Address');
    const [address, setAddress] = useState('vaibhav rathore');
    const [landmark, setLandmark] = useState('Male');
    const [pincode, setPincode] = useState('02/16/1998');
    const [country, setCountry] = useState('English');
    const [state, setState] = useState('harmanjot150822@gmail.com');
    const [city, setCity] = useState('8146980980');

    const handleSave = async () => {
        const data = {
            addressType,
            address,
            landmark,
            pincode,
            country,
            state,
            city,
        };

        try {
            const response = await fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <div>
                <div>
                    <Link to={"/verified/user/my-address"} style={{ textDecoration: "none", color: "black" }} >

                        <BackHEader title={"Add Address"} />
                    </Link>
                </div>
                <div className='main_personal_info_div' style={{ paddingBottom: "50px" }}>

                    <div className='main_influencer_data'>
                        {/* Address Type Dropdown */}
                        <div className='main_influencer_items'>
                            <div className='influncer_item_first_div'>Address Type</div>
                            <div className='influncer_item_second_div'>
                                <select
                                    value={addressType}
                                    onChange={(e) => setAddressType(e.target.value)}
                                    className='form-control'
                                    style={{ border: "1px solid var(--light-gray-color)" }}
                                >
                                    <option>Permanent Address</option>
                                    <option>Office Address</option>
                                    <option>Other Address</option>
                                </select>
                            </div>
                        </div>
                        {/* Address Field */}
                        <div className='main_influencer_items'>
                            <div className='influncer_item_first_div'>Address</div>
                            <div className='influncer_item_second_div'>
                                <textarea
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className='form-control'
                                />
                            </div>
                        </div>
                        {/* Landmark Field */}
                        <div className='main_influencer_items'>
                            <div className='influncer_item_first_div'>Landmark</div>
                            <div className='influncer_item_second_div'>
                                <input
                                    type="text"
                                    value={landmark}
                                    onChange={(e) => setLandmark(e.target.value)}
                                    className='influncer_item_second_input'
                                    style={{ border: "1px solid var(--light-gray-color)" }}
                                />
                            </div>
                        </div>
                        {/* Pincode Field */}
                        <div className='main_influencer_items'>
                            <div className='influncer_item_first_div'>Pincode</div>
                            <div className='influncer_item_second_div'>
                                <input
                                    type="text"
                                    value={pincode}
                                    onChange={(e) => setPincode(e.target.value)}
                                    className='influncer_item_second_input'
                                    style={{ border: "1px solid var(--light-gray-color)" }}
                                />
                            </div>
                        </div>
                        {/* Country Field */}
                        <div className='main_influencer_items'>
                            <div className='influncer_item_first_div'>Country</div>
                            <div className='influncer_item_second_div'>
                                <input
                                    type="text"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className='influncer_item_second_input'
                                    style={{ border: "1px solid var(--light-gray-color)" }}
                                />
                            </div>
                        </div>
                        {/* State Field */}
                        <div className='main_influencer_items'>
                            <div className='influncer_item_first_div'>State</div>
                            <div className='influncer_item_second_div'>
                                <input
                                    type="text"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className='influncer_item_second_input'
                                    style={{ border: "1px solid var(--light-gray-color)" }}
                                />
                            </div>
                        </div>
                        {/* City Field */}
                        <div className='main_influencer_items'>
                            <div className='influncer_item_first_div'>City</div>
                            <div className='influncer_item_second_div'>
                                <input
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className='influncer_item_second_input'
                                    style={{ border: "1px solid var(--light-gray-color)" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-100 text-center mt-4'>
                        <div className='btn btn-warning w-75' onClick={handleSave}>
                            Save Address
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Addaddress;
