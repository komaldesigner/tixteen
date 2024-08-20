import React from 'react';
import "../../../styles/home/infulencer/influencerlist.css";
import {motion} from "framer-motion";
// Import images
import inlfulnenceDetails1 from "../../../assets/img/home/infulncerlist/inlfulnenceDetails1.png";
import inlfulnenceDetails2 from "../../../assets/img/home/infulncerlist/inlfulnenceDetails2.png";
import inlfulnenceDetails3 from "../../../assets/img/home/infulncerlist/inlfulnenceDetails3.png";
import inlfulnenceDetails4 from "../../../assets/img/home/infulncerlist/inlfulnenceDetails4.png";
import inlfulnenceDetails5 from "../../../assets/img/home/infulncerlist/inlfulnenceDetails5.png";
import inlfulnenceDetails6 from "../../../assets/img/home/infulncerlist/inlfulnenceDetails6.png";

const influencerImage= [
    inlfulnenceDetails1,
    inlfulnenceDetails2,
    inlfulnenceDetails3,
    inlfulnenceDetails4,
    inlfulnenceDetails5,
    inlfulnenceDetails6
];

function Influencerlist() {
    return (
        <div className='main_influencer_list_top_parent_div'>
            <div className='main_influencer_list_section'>
                <div className='main_influencer_list_images'>
                    <InfluencerListRigtSideImage image={influencerImage[0]}/>
                    <InfluencerListLeftSideImage image={influencerImage[1]} />
                    <InfluencerListRigtSideImage image={influencerImage[2]}/>
                    <InfluencerListLeftSideImage image={influencerImage[3]} />
                    <InfluencerListRigtSideImage image={influencerImage[4]}/>
                    <InfluencerListLeftSideImage image={influencerImage[5]} />
                </div>
            </div>
        </div>
    );
}

export default Influencerlist;

function InfluencerListRigtSideImage({image}) {
    return (
        <div className='influencerListRigtSideImage'>
            <motion.div 
                initial={{opacity: 0 , }}
                whileInView={{opacity: 1 , y: 0}}
                transition={{duration: 1 }}
                exit={{opacity: 0 }}

            >
                <img src={image} className='influencerListRigtSideImage_image' />
            </motion.div>
        </div>
    );
}

function InfluencerListLeftSideImage({image}) {
    return (
        <div className='influencerListLeftSideImage'>
           <motion.div 
                initial={{opacity: 0 , }}
                whileInView={{opacity: 1 , }}
                exit={{opacity: 0 }}
                transition={{duration: 1 }}
            >
                <img src={image} className='influencerListLeftSideImage_image' />
            </motion.div>
        </div>
    );
}
