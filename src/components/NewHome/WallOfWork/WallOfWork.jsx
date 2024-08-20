import React from 'react'
import { motion } from "framer-motion";

function WallOfWork() {
    return (
        <div>

            <motion.div
                className='d-flex justify-content-center align-items-center w-100'
            >
                <motion.div
                    className='WallofWork'
                    initial={{ opacity: 0, width: "0%", fontSize: "10px", height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}
                    whileInView={{ opacity: 1, width: "100%", fontSize: "64px", }}
                    transition={{ duration: 1.6, delay: 1, ease: "easeInOut" }}
                >
                    <motion.div className='WallofWork_text'>
                        Wall of Work
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default WallOfWork