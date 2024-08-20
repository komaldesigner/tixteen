import React from 'react'
import "../../../styles/home/influencerplatform/Stayupdate.css"


import influencer1 from '../../../assets/img/home/influencerplateform/1.png'; // Make sure to replace with actual paths
import influencer2 from '../../../assets/img/home/influencerplateform/2.png'; // Make sure to replace with actual paths
import influencer3 from '../../../assets/img/home/influencerplateform/4.png'; // Make sure to replace with actual paths


function Stayupdate() {
    return (
        <>
            <div className='main_stay_update_div' >
                {/* left */}
                <div className='stay_update_left_div' >
                    {/* top */}
                    <div>
                        <div className='stay_update_text'>STAY UPDATED</div>
                        <div className='get_the_latest_influencer_text'>Get the latest influencer marketing tips and updates</div>
                    </div>
                    {/* center */}
                    <div className='stay_update_center_div_input_parent' >
                        <div><input type="text" placeholder='first Name' /></div>
                        <div><input type="text" placeholder='last Name' /></div>
                        <div><input type="text" placeholder='Email' /></div>
                    </div>
                    {/* end */}
                    <div className='stay_update_end_div' >
                        <div>Subscribe</div>
                    </div>
                </div>
                {/* right */}
                <div className='stay_update_right_div' >
                    <div className='d-flex' >
                        <div className='stay_update_three_images_div' >
                            <img src={influencer1} alt="Influencer plateform" className='influencerplatform_upper_section_first_div_img' />
                        </div>
                        <div className='stay_update_three_images_div' >
                            <img src={influencer2} alt="Influencer plateform" className='influencerplatform_upper_section_first_div_img' />
                        </div>
                    </div>
                    <div className='stay_update_three_images_div' >
                        <img src={influencer3} alt="Influencer plateform" className='influencerplatform_upper_section_first_div_img' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Stayupdate