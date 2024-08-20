import React from 'react';
import { motion } from 'framer-motion';
import influencer1 from '../../../assets/img/home/influencerplateform/1.png';
import influencer2 from '../../../assets/img/home/influencerplateform/2.png';
import influencer3 from '../../../assets/img/home/influencerplateform/4.png';
import Line from '../../../assets/img/home/influencerplateform/Line 1.png';
import LineTwo from '../../../assets/img/home/influencerplateform/Line 2.png';
import "../../../styles/home/influencerplatform/Maininfluencerplatform.css";

function Maininfluencerplatform() {
    return (
        <div className='maininfluencerplatform_top_paerent_section'>
            <div>
                <MaininfluencerplatformUpperSection />
            </div>
            <div>
                <MaininfluencerplatformLowerSection />
            </div>
        </div>
    );
}

export default Maininfluencerplatform;

function MaininfluencerplatformUpperSection() {
    return (
        <div className='maininfluencerplatform_upper_section_top'>
            {/* Top */}
            <div className='w-100 influencerplatform_upper_section_first_div'>
                <motion.div
                    className='influencerplatform_upper_section_first_div_img_div'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img src={influencer1} alt="Influencer platform" className='influencerplatform_upper_section_first_div_img' />
                </motion.div>
                <motion.div
                    className='influencerplatform_upper_section_PLATFORM_WHERE'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className='a_platform_where_text'>A PLATFORM WHERE</div>
                    <div className='top_influencers_meet_top_brands_text'>Top Influencers Meet Top Brands</div>
                </motion.div>
            </div>
            {/* Line */}
            <motion.div
                className='w-75 main_influ_platform_line_top'
                initial={{ opacity: 0, width: "0%" }}
                whileInView={{ opacity: 1, width: "100%" }}
                transition={{ duration: 1 }}
            >
                <img src={Line} alt="Line" className='w-100' />
            </motion.div>
            {/* What makes us different */}
            <motion.div
                className='influencerplatform_upper_section_what_make_us_different_div'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className='a_platform_where_text influencerplatform_upper_section_what_make_us_different'>
                    WHAT MAKES US DIFFERENT?
                </div>
                <div className='influencerplatform_upper_section_what_make_options_div'>
                    <div className='influencerplatform_upper_section_what_make_options'>Top Selected Influencers</div>
                    <div className='influencerplatform_upper_section_what_make_options'>Friendly Support Team</div>
                    <div className='influencerplatform_upper_section_what_make_options'>Budget Friendly Plans</div>
                </div>
            </motion.div>
            {/* Image */}
            <motion.div
                className='w-100'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <img src={influencer2} alt="Influencer platform" className='w-100' />
            </motion.div>
        </div>
    );
}

function MaininfluencerplatformLowerSection() {
    return (
        <div className='maininfluencerplatform_lower_section_top_div'>
            {/* Left */}
            <motion.div
                className='maininfluencerplatform_lower_section_left_div'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <div className='mb-3'>
                    <div className='a_platform_where_text'>How It Works</div>
                    <div className='top_influencers_meet_top_brands_text'>For Brands and Influencers</div>
                </div>
                <div>
                    <div className='how_it_works_for_brands_text'>How It Works for Brands</div>
                    <div className='how_it_works_for_brands_description'>
                        Sign Up: Create a free account and define your campaign needs.
                        Browse Influencers: Explore profiles and select the perfect match.
                        Collaborate: Connect and plan your campaign.
                        Analyze Results: Track performance and engagement metrics.
                    </div>
                </div>
                <div>
                    <div className='how_it_works_for_brands_text'>How It Works for Influencers</div>
                    <div className='how_it_works_for_brands_description'>
                        Join the Marketplace: Sign up and create your profile.
                        Get Discovered: Brands find you for potential collaborations.
                        Collaborate: Partner with brands and create content.
                        Earn Rewards: Grow your influence and earn money.
                    </div>
                </div>
            </motion.div>
            {/* Center */}
            <motion.div
                className='maininfluencerplatform_lower_section_center_div'
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <div className='line_two_div'>
                    <img src={LineTwo} alt="Line" className="line_two_image" />
                </div>
                <div className='maininfluencerplatform_lower_section_center_div_bottom'>
                    <div>
                        <img src={influencer3} alt="Influencer platform" className='third_influencer_platform_img_girl' />
                    </div>
                    <div>
                        <div className='a_platform_where_text'>SIT BACK AND RELAX</div>
                        <div className='top_influencers_meet_top_brands_text'>Let Influencers Promote Your Brand</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
