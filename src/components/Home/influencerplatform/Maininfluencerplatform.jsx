import React from 'react';

import influencer1 from '../../../assets/img/home/influencerplateform/1.png'; // Make sure to replace with actual paths
import influencer2 from '../../../assets/img/home/influencerplateform/2.png'; // Make sure to replace with actual paths
import influencer3 from '../../../assets/img/home/influencerplateform/4.png'; // Make sure to replace with actual paths
import Line from '../../../assets/img/home/influencerplateform/Line 1.png'; // Make sure to replace with actual paths
import LineTwo from '../../../assets/img/home/influencerplateform/Line 2.png'; // Make sure to replace with actual paths
import "../../../styles/home/influencerplatform/Maininfluencerplatform.css"

function Maininfluencerplatform() {
    return (
        <>

            <div className='maininfluencerplatform_top_paerent_section' >
                <div>
                    <MaininfluencerplatformUpperSection />
                </div>
                <div>
                    <MaininfluencerplatformLowerSection />
                </div>
            </div>

        </>
    );
}

export default Maininfluencerplatform;

function MaininfluencerplatformUpperSection() {
    return (
        <>
            {/* upper section */}
            <div className='maininfluencerplatform_upper_section_top' >
                {/* top */}
                <div className=' w-100 influencerplatform_upper_section_first_div' >
                    <div className='influencerplatform_upper_section_first_div_img_div' >
                        <img src={influencer1} alt="Influencer plateform" className='influencerplatform_upper_section_first_div_img' />
                    </div>
                    <div className='influencerplatform_upper_section_PLATFORM_WHERE' >
                        <div className='a_platform_where_text' >A PLATFORM WHERE</div>
                        <div className='top_influencers_meet_top_brands_text' >Top Influencers Meet Top brands</div>
                    </div>
                </div>
                {/* line */}
                <div className='w-75 main_influ_platform_line_top '>
                    <img src={Line} alt="Line" className='w-100' />
                </div>

 
                {/* what make us different */}
                <div className='influencerplatform_upper_section_what_make_us_different_div' >
                    <div className='a_platform_where_text influencerplatform_upper_section_what_make_us_different' >
                        WHAT MAKE US DIFFERENT ?
                    </div>

                    <div className='influencerplatform_upper_section_what_make_opetions_div' >
                        <div className='influencerplatform_upper_section_what_make_opetions' >Top Selected Influencers</div>
                        <div className='influencerplatform_upper_section_what_make_opetions'>Friendly Support Team</div>
                        <div className='influencerplatform_upper_section_what_make_opetions'>Budget Friendly Plans</div>
                    </div>

                </div>

                {/* image */}

                <div className='w-100' >
                    <img src={influencer2} alt="Influencer plateform" className='w-100' />
                </div>


            </div>

        </>
    );
}

function MaininfluencerplatformLowerSection() {
    return (
        <><div className='maininfluencerplatform_lower_section_top_div' >
            {/* left */}
            <div className='maininfluencerplatform_lower_section_left_div' >
                {/* how it works */}
                <div className='mb-3' >
                    <div className='a_platform_where_text'>
                        How It Works
                    </div>
                    <div className='top_influencers_meet_top_brands_text'>For Brands and Influencers</div>
                </div>
                {/* How It Works for Brands */}
                <div>
                    <div className='how_it_works_for_brands_text' >How It Works for Brands</div>
                    <div className='how_it_works_for_brands_description' >
                        Sign Up: Create a free account and define your campaign needs.
                        Browse Influencers: Explore profiles and select the perfect match.
                        Collaborate: Connect and plan your campaign.
                        Analyze Results: Track performance and engagement metrics.
                    </div>
                </div>
                {/* How It Works for Influencers */}
                <div>

                    <div className='how_it_works_for_brands_text' >How It Works for Influencers</div>
                    <div className='how_it_works_for_brands_description'>
                        Join the Marketplace: Sign up and create your profile.
                        Get Discovered: Brands find you for potential collaborations.
                        Collaborate: Partner with brands and create content.
                        Earn Rewards: Grow your influence and earn money.
                    </div>
                </div>

            </div>
            {/* center */}
            <div className='maininfluencerplatform_lower_section_center_div' >
                <div className='line_two_div' >
                    <img src={LineTwo} alt="Influencer plateform" className="line_two_image" />
                </div>
                {/* image */}
                <div className='maininfluencerplatform_lower_section_center_div_bottom'  >
                    <div>
                        <img src={influencer3} alt="Influencer plateform" />
                    </div>
                    <div>
                        
                        <div className='a_platform_where_text' >
                            SIT BACK AND RELAXED
                        </div>
                        <div className='top_influencers_meet_top_brands_text' >
                            Let Influencers Promote Your Brand
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}