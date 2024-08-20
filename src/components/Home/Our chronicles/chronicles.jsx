import React, { useEffect, useState } from 'react'
import { motion, useInView } from "framer-motion";
import "../../../styles/home/ourchronicles/chronicles.css";
import influ_sample_video from "../../../assets/videos/influ_sample_video.mp4";

function AnimatedText({ children, animate }) {
  const textVariants = {
    hidden: { opacity: 0, x: 0, y: 0, fontSize: "0px" },
    visible: { opacity: 1, fontSize: "40px" },
  };

  const containerVariants = {
    hidden: { x: 0, y: 0 },
    // visible: { x: -560, y: -320 },
    visible: { x: 510, y: 10 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView={animate ? "visible" : "hidden"}
      transition={{ duration: 1.2, delay: 0.5 }}
    >
      <motion.div variants={textVariants}>{children}</motion.div>
    </motion.div>
  );
}
function Chronicles() {
  const [animate, setAnimate] = useState(true);

  return (
    <>
    <motion.div  
    
    >
      <motion.div className='Chronicles_text_main_div'
        initial={{ height: "150vh" }}
        whileInView={{ height: `15vh` }}
        transition={{ duration: 2, delay: 1 }}
      >
        {/* upper text */}
        <div className='' >
          <AnimatedText animate={animate}>
            <div className='Discover_Your_Next_Brand_Ambassador' style={{ marginBottom: "-20px" }} >Our Chronicles</div>
            <div className='connect_with_influencers text-right' >of success and excellence</div>
          </AnimatedText>
        </div>


      </motion.div>

      {/* lower text */}
      <motion.div className='main_influ_sample_div'
      initial={{ opacity: 0, }}
      whileInView={ { opacity: 1, } }
      transition={{ duration: 1, delay: 1 }}
      
      >
        <div className='influ_sample_video_container' >
          <div className='influ_sample_video_div w-25 ' >
            <video src={influ_sample_video} autoPlay loop muted className='influ_sample_video_video' ></video>
          </div>
          <div className='influ_sample_text ' >
            <div className='NUSHKE_section_main_div' >
              <div className='NUSHKE_text_section' style={{ marginBottom: "-20px" }} >NUSHKE</div>
              <div className='By_Nature_text_section' >By Nature</div>
            </div>
            <div className='d-flex w-100 justify-content-around' >
              <div>
                <div className='NUSHKE_text_section'>20+</div>
                <div className='NUSHKE_section_details_bottom' >Influencers</div>

              </div>
              <div>
                <div className='NUSHKE_text_section'>550k</div>
                <div className='NUSHKE_section_details_bottom'>Reach</div>

              </div>
              <div>
                <div className='NUSHKE_text_section'>7.9k</div>
                <div className='NUSHKE_section_details_bottom'>Engagement Rate</div>

              </div>

            </div>
          </div>
        </div>
      </motion.div>


    </motion.div>
    </>
  )
}

export default Chronicles

