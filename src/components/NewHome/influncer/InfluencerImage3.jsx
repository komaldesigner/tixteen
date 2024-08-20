import React from 'react';
import { motion } from "framer-motion";
import inlfulnenceDetails3 from "../../../assets/img/home/infulncerlist/inlfulnenceDetails3.png";
import "../../../styles/home/infulencer/influencerlist.css";

function InfluencerListRigtSideImage({ image }) {
    return (
        <div className='influencerListRigtSideImage third-yellow-color'>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                exit={{ opacity: 0, x: 50 }}
                className='influencerListRigtSideImage_image_div'
            >
                <img src={image} className='influencerListRigtSideImage_image' />
            </motion.div>
        </div>
    );
}

export default function InfluencerImage3() {
    return <InfluencerListRigtSideImage image={inlfulnenceDetails3} />;
}
