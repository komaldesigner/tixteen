import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Logo from "../../assets/img/tixteen_icon.png";
// import BGvideo from "./statingVideo.mp4";
import BGvideo from "../../assets/videos/statingVideo.mp4";
import "../../styles/home/home.css";
import WallofWork from "./WallofWork";
import Collaboration from "./Collaboration";
import HomeHeader from "./HomeHeader";
import Clientele from "./Clientele/Clientele";
import Chronicles from "./Our chronicles/chronicles";
import IndustiiresCirecl from "./IndursteWeserve/IndustiiresCirecl";
import InfluencerFirstMainPage from "./influencer/influencerFirstMainPage";
// import Influencerlist from "./Influencer/Influencerlist";
import Stayupdate from "../../styles/home/influencerplatform/Stayupdate";
import Maininfluencerplatform from "./influencerplatform/Maininfluencerplatform";
import Packaging2 from "./test/KRE";
import Influencerlist from "./influencer/influencerlist";

function AnimatedText({ children, animate }) {
  const textVariants = {
    hidden: { opacity: 0, x: 0, y: 0, fontSize: "0px" },
    visible: { opacity: 1, fontSize: "40px" },
  };

  const containerVariants = {
    hidden: { x: 0, y: 0 },
    visible: { x: -560, y: -320 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={animate ? "visible" : "hidden"}
      transition={{ duration: 1.5, delay: 1.4 }}
    >
      <motion.div variants={textVariants}>{children}</motion.div>
    </motion.div>
  );
}

function Home() {
  const [showYellowBg, setShowYellowBg] = useState(false);
  const [animate, setAnimate] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowYellowBg(true);
    }, 3000);

    setAnimate(true);

    return () => clearTimeout(timer);
  }, []);

  function HomeVideoComponent() {
    return <div style={{ position: "relative", height: "100vh" }}>
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
        >
          {/* <motion.img src={Logo} alt="logo" className="Home_page_logo_icon_animated" /> */}
        </AnimatedText>
      </div>
    </div>
  }

  return (
    <div>
      {/* <SmoothScroll/> */}
      {showYellowBg ? (
        <>

          <HomeHeader />
          {/* 1 */}
          <motion.div>
            <motion.div className="brand_and_influencers_main_parent_div"
              initial={{ opacity: 0, height: 0, y: 100 }}
              animate={{ opacity: 1, height: "200px", y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <motion.div className="Discover_Your_Next_Brand_Ambassador" >Discover Your Next Brand Ambassador</motion.div>
              <motion.div className="connect_with_influencers" >Connect with influencers who resonate with your audience and boost your brand's</motion.div>
            </motion.div>

            <motion.div className="d-flex px-5 py-3 " >
              {/* left */}
              <motion.div className="w-100 where_brands_and_influencers_div "
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Where Brands and
                Influencers Unite
                for Success
              </motion.div>
              {/* right */}
              <motion.div className="w-100 d-flex flex-column " style={{ gap: "30px" }}

                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}

              >
                {/* top */}
                <motion.div className="d-flex " style={{ gap: "10px" }} >
                  <motion.div className="border-5 border w-75 text-center p-2 " >Search</motion.div>
                  <motion.div className="border-5 border w-25 text-center p-2" >Filter</motion.div>
                </motion.div>
                {/* bottom */}

                <motion.div className="w-100 d-flex flex-column " style={{ gap: "10px" }} >
                  <motion.div className="home_Find_Influencers_section_options" >Find Influencers</motion.div>
                  <motion.div className="home_Find_Influencers_section_options" >Join as an Influencer</motion.div>

                </motion.div>

              </motion.div>

            </motion.div>
          </motion.div>


          {/* 2 */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <WallofWork />
          </motion.div>

          {/* 3 */}

          <motion.div>
            <Collaboration />
          </motion.div>

          {/* 4 */}
          <motion.div>
            <Chronicles/>
          </motion.div>
          {/* 5 */}

          <motion.div>
            {/* <Clientele /> */}
            {/* <Packaging2/> */}
          </motion.div>

          {/* 6 */}

          <motion.div>
            <IndustiiresCirecl/>
          </motion.div>

          {/* 7 */}

          <motion.div>
            <InfluencerFirstMainPage/>
          </motion.div>


          {/* 8 */}
          <motion.div>
            <Influencerlist/>
          </motion.div>
          {/* 9 */}
          <motion.div>
            <Maininfluencerplatform/>
          </motion.div>
          {/* 10 */}
          <motion.div>
            <Stayupdate/>
          </motion.div>

        </>
      ) : (
        <HomeVideoComponent />
      )}
    </div>
  );
}

export default Home;
  