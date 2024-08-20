import React from 'react';
import { motion } from 'framer-motion';
import Home_Vlod_video from '../../../assets/videos/Home_Vlod_video.mp4';
import '../../../styles/home/WallofWork.css';

function HomeVideo() {
  return (
    <div className='wallofwork_video_div_top_parent_div'>
      <motion.div
        className='w-100 text-center wallofwork_video_parent_div'
        initial={{ opacity: 0, width: '0%' }}
        whileInView={{ opacity: 1, width: '100%' }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* video */}
        <video
          src={Home_Vlod_video}
          autoPlay
          loop
          muted
          playsInline
          className='wallofwork_video'
        />
      </motion.div>
    </div>
  );
}

export default HomeVideo;
