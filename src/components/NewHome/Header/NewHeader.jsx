import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../../../assets/img/tixteen_icon.png";
import "../../../styles/home/home.css";
import Discove from "../Discove/Discove";


function NewHeader() {
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
            {/* <motion.img src={Logo} alt="logo" className="Home_page_logo_icon_animated" /> */}
            <motion.img src="https://res.cloudinary.com/dzvsrft15/image/upload/v1723462345/TixteenLogo_nzm33i.png" alt="logo" className="Home_page_logo_icon_animated flashing_home_page " initial={{ scale: 0.2 , y : 100 }} animate={{ scale: 1.5 , y : 0 }} transition={{ duration: 0.1 , ease: "easeInOut" }} />
          </motion.div>
          <Discove/>
    </div>
  )
}

export default NewHeader