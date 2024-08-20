import React from 'react';
import { motion } from 'framer-motion';
import influ_sample_video from '../../../assets/videos/influ_sample_video.mp4';

function ChroniclesSlides() {
  return (
    <div>
      <motion.div
        className='main_influ_sample_div'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className='influ_sample_video_container'>
          <div className='influ_sample_video_div w-25'>
            <video src={influ_sample_video} autoPlay loop muted className='influ_sample_video_video'></video>
          </div>
          <div className='influ_sample_text'>
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className='NUSHKE_section_main_div'
            >
              <div className='NUSHKE_text_section' style={{ marginBottom: "-20px" }}>
                NUSHKE
              </div>
              <div className='By_Nature_text_section'>
                By Nature
              </div>
            </motion.div>
            <div className='d-flex w-100 justify-content-around'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className='NUSHKE_text_section'>20+</div>
                <div className='NUSHKE_section_details_bottom'>Influencers</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className='NUSHKE_text_section'>550k</div>
                <div className='NUSHKE_section_details_bottom'>Reach</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className='NUSHKE_text_section'>7.9k</div>
                <div className='NUSHKE_section_details_bottom'>Engagement Rate</div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ChroniclesSlides;
