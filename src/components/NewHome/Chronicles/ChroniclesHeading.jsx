import React, { useEffect, useState } from 'react'
import AnimatedText from '../homeUtils/AnimatedText'
import ChroniclesSlides from './ChroniclesSlides'
import { motion } from "framer-motion";

function ChroniclesHeading() {
    const [animationheight, setAnimationHeight] = useState("120%");

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 426) {
                // console.log("on 500")
                setAnimationHeight("-20%")
            } else if (screenWidth <= 500) {
                // console.log("on 500")
                setAnimationHeight("0%")
            } else if (screenWidth <= 769) {
                // console.log("on 769")
                setAnimationHeight("50%")
                // setAnimationWidth(3);
            } else if (screenWidth <= 1025) {
                // console.log("on 124")
                setAnimationHeight("70%")
            } else {
                // setAnimationWidth(5.3);
            }
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            {/* <div className='Chronicles_text_main_div' > */}
            <motion.div
                initial={{ height: "150vh" }}
                whileInView={{ height: `20vh` }}
                transition={{ duration: 1.2, delay: 1 }}
                className=" Chronicles_text_main_div"

            >
                <motion.div
                 initial={{  x:-50 }}
                 whileInView={{  x:animationheight }}
                 transition={{ duration: 1.4, delay: 0.3 }}
                >
                    <>
                        <div className='Discover_Your_Next_Brand_Ambassador' style={{ marginBottom: "-20px" }} >Our Chronicles</div>
                        <div className='connect_with_influencers text-right' >of success and excellence</div>
                    </>
                </motion.div>
               
            </motion.div>
            <div>
                <ChroniclesSlides />
            </div>
        </>
    )
}

export default ChroniclesHeading