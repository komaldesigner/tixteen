import React, { useEffect, useState } from 'react';
import { motion, } from "framer-motion";
import "../../../styles/home/Collaboration.css";



function CollaborationHeading({ textVariants, inView }) {
    return (
        <div  >
            <motion.div className="brand_and_influencers_main_parent_div collaboration_heading_text_div" 
                variants={textVariants}
                transition={{ duration: 2, delay: 1 }}
                initial="hidden"
                animate={inView ? "visible" : "hidden"} 
            >
                <motion.div className="Discover_Your_Next_Brand_Ambassador">
                    Influencers Open to Collaboration
                </motion.div>
                <motion.div className="connect_with_influencers Forming_Impactful_text "  >
                    Forming Impactful Partnerships with Influential Voices
                </motion.div>
            </motion.div>
        </div>
    )
}

export default CollaborationHeading