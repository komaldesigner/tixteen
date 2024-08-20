import React from 'react';
import { motion } from 'framer-motion';
import "../../../styles/home/influencerplatform/Stayupdate.css";

import influencer1 from '../../../assets/img/home/influencerplateform/1.png';
import influencer2 from '../../../assets/img/home/influencerplateform/2.png';
import influencer3 from '../../../assets/img/home/influencerplateform/4.png';

function Stayupdate() {
    return (
        <div className='main_stay_update_div'>
            {/* Left */}
            <motion.div
                className='stay_update_left_div'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Top */}
                <div>
                    <div className='stay_update_text'>STAY UPDATED</div>
                    <div className='get_the_latest_influencer_text'>Get the latest influencer marketing tips and updates</div>
                </div>
                {/* Center */}
                <div className='stay_update_center_div_input_parent'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <input type="text" placeholder='First Name' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <input type="text" placeholder='Last Name' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <input type="text" placeholder='Email' />
                    </motion.div>
                </div>
                {/* End */}
                <motion.div
                    className='stay_update_end_div'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <div>Subscribe</div>
                </motion.div>
            </motion.div>
            {/* Right */}
            <motion.div
                className='stay_update_right_div'
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <div className='d-flex'>
                    <motion.div
                        className='stay_update_three_images_div'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <img src={influencer1} alt="Influencer platform" className='influencerplatform_upper_section_first_div_img' />
                    </motion.div>
                    <motion.div
                        className='stay_update_three_images_div'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        <img src={influencer2} alt="Influencer platform" className='influencerplatform_upper_section_first_div_img' />
                    </motion.div>
                </div>
                <motion.div
                    className='stay_update_three_images_div'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                >
                    <img src={influencer3} alt="Influencer platform" className='influencerplatform_upper_section_first_div_img' />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Stayupdate;
