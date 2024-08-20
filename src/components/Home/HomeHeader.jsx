import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Logo from "../../assets/img/tixteen_icon.png";
import "../../styles/home/home.css";


function HomeHeader() {
    const [firstDivHeight, setFirstDivHeight] = useState(50);
   
  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstDivHeight(12);
    }, 2000);
  }, []);

  return (
    <div>
            <motion.div
            initial={{ height: "100vh" }}
            animate={{ height: `${firstDivHeight}vh` }}
            transition={{ duration: 1, delay: 1 }}
            className="Header_for_home_page "
          >
            <motion.img src={Logo} alt="logo" className="Home_page_logo_icon_animated" />
          </motion.div>
    </div>
  )
}

export default HomeHeader