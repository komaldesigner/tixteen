import React from 'react';
import { motion } from 'framer-motion';
import './Industries.css';
import SeondaryHeader from '../../headers/seondaryHeader';

const IndustiresDetails = () => {
  const industries = [
    "TELECOMMUNICATIONS",
    "ENTERTAINMENT & MEDIA",
    "FOOD & BEVERAGES",
    "AUTOMOTIVE",
    "REAL ESTATE",
    "COSMETICS", // Changed spelling for consistency
    "TRAVEL & TOURISM",
    "TECHNOLOGY",
    "HEALTHCARE",
    "FINANCE & BANKING",
    "ENERGY & UTILITIES",
  ];

  return (
    <>
    <div>
      <SeondaryHeader/>
    </div>
    <div className="industries-container">
      <div className="industries-grid">
        {industries.map((industry) => (
          <div key={industry} className="industry-box">
            {industry}
          </div>
        ))}
        <div className="industry-box-extra"> {/* Placeholder for additional industry */} </div>
      </div>
      <motion.div className="industries-footer"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
          >
        <div className="Industries_text">INDUSTRIES</div>
        <div className="we_serve_text">We Serve</div>
      </motion.div>
    </div>
    </>
  );
};

export default IndustiresDetails;
