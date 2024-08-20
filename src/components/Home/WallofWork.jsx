import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import Home_Vlod_video from "../../assets/videos/Home_Vlod_video.mp4";
import { useInView } from "react-intersection-observer";
import "../../styles/home/WallofWork.css";


function WallofWork() {
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.1 
  });

  const textVariants = {
    hidden: { opacity: 0, width: "0%", fontSize: "10px" , height: "200px", display:"flex", justifyContent:"center", alignItems:"center"},
    visible: { 
      opacity: 1, 
      width: "100%",
      fontSize: "64px", 
      transition: { duration: 1.6, delay: 1 ,  ease: "easeInOut"} // Moved transition inside the visible variant
    }
  };

  // Use useEffect to reset the animation state
  useEffect(() => {
    if (inView) {
      // Trigger the animation
    }
  }, [inView]); // Dependency array with inView

  return (
    <>
      <motion.div className='w-100 text-center wallofwork_video_parent_div '
        initial={{ opacity: 0, width: "0%" , }}
        animate={ { opacity: 1, width: "100%" } }
        transition={{ duration: 1.6, delay: 1 }}
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
    

      <motion.div
        className='d-flex justify-content-center align-items-center w-100'
      >
        <motion.div
          className='WallofWork'
          ref={ref}
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className='WallofWork_text'>
            Wall of Work
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default WallofWork;
