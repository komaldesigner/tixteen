import React, { useEffect, useState } from 'react'
import AnimatedText from '../homeUtils/AnimatedText'
import { motion } from "framer-motion";
import Logo from "../../../assets/img/tixteen_icon.png";
import BGvideo from "../../../assets/videos/statingVideo.mp4";


function TopHeaderVideo() {
    const [showYellowBg, setShowYellowBg] = useState(false);
    const [animate, setAnimate] = useState(false);

    const [animationwidht, setAnimationWidth] = useState("-530%");
    const [animationheight, setAnimationHeight] = useState("-510%");


    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 426) {
                setAnimationWidth("-140%");
                setAnimationHeight("-470%")
            } else if (screenWidth <= 500) {
                setAnimationWidth("-160%");
                setAnimationHeight("-470%")
            } else if (screenWidth <= 769) {
                setAnimationWidth("-280%");
                setAnimationHeight("-470%")
                // setAnimationWidth(3);
            } else if (screenWidth <= 1025) {
                setAnimationWidth("-380%");
                setAnimationHeight("-460%")
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

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowYellowBg(true);
        }, 3000);

        setAnimate(true);

        return () => clearTimeout(timer);
    }, []);
    return (

        <div style={{ position: "relative", height: "100vh" }}>
            <video
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1,
                }}
                src={BGvideo}
                autoPlay
                muted
            />
            <div
                className="d-flex justify-content-center align-items-center text-white"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            >
                <AnimatedText animate={animate}
                    children={
                        <motion.img src={Logo} alt="logo" className="Home_page_logo_icon_animated" />
                    }
                    // x="-510%"
                    // y="-530%"
                    x= {animationwidht}
                    y={animationheight}
                >
                </AnimatedText>
            </div>
        </div>
    )
}

export default TopHeaderVideo