import React from 'react'
import { motion, } from "framer-motion";
import Logo from "../../assets/img/tixteen_icon.png";


function SeondaryHeader() {
  return (
    <div>
         <motion.div className=' secondayHeader_parent_div'
            // initial={{ opacity: 0, height:"100vh" }}
            // whileInView={{ opacity: 1, height:"20vh" }}
            // transition={{ duration: 0.6 }}
        >
            {/* <img src={Logo} alt="logo" className="clientele_page_logo" /> */}

        </motion.div>
    </div>

  )
}

export default SeondaryHeader