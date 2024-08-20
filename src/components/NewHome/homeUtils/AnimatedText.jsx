import React from 'react'
import { motion } from "framer-motion";


function AnimatedText({ children, animate , x, y }) {
    const textVariants = {
        hidden: { opacity: 0, x: 0, y: 0, fontSize: "0px" },
        visible: { opacity: 1, fontSize: "40px" },
    };

    const containerVariants = {
        hidden: { x: "0%", y: "0%" , scale : 3 , opacity: 1},
        visible: { x: x, y: y , scale : 1 , opacity: 1},
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            // animate={animate ? "visible" : "hidden"}
            whileInView={animate ? "visible" : "hidden"}
            transition={{ duration: 1.5, delay: 1.4 }}
        >
            <motion.div variants={textVariants}>{children}</motion.div>
        </motion.div>
    );
}


export default AnimatedText