import React from 'react';
import { motion } from "framer-motion";
import inlfulnenceDetails2 from "../../../assets/img/home/infulncerlist/inlfulnenceDetails2.png";
import "../../../styles/home/infulencer/influencerlist.css";

function InfluencerListLeftSideImage({ image }) {
    return (
        <div className='influencerListLeftSideImage third-yellow-color'>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                exit={{ opacity: 0, x: -50 }}
                className='influencerListRigtSideImage_image_div'
            >
                <img src={image} className='influencerListLeftSideImage_image' />
            </motion.div>
        </div>
    );
}

export default function InfluencerImage2() {
    return <InfluencerListLeftSideImage image={inlfulnenceDetails2} />;
}
