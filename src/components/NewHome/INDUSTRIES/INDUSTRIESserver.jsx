// import React from 'react';
// import { motion } from 'framer-motion';

// const IndustriesServe = () => {
//   const industries = [
//     "TELECOMMUNICATIONS",
//     "ENTERTAINMENT & MEDIA",
//     "FOOD & BEVERAGES",
//     "AUTOMOTIVE",
//     "REAL ESTATE",
//     "COSMETICS",
//     "TRAVEL & TOURISM",
//     "TECHNOLOGY",
//     "HEALTHCARE",
//     "FINANCE & BANKING",
//     "ENERGY & UTILITIES",
//   ];
//   return (
//     <div className="industries-container">
//       <div className="industries-grid">
//         {industries.map((industry, index) => (
//           <motion.div
//             key={index}
//             className="industry-box"
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//           >
//             {industry}
//           </motion.div>
//         ))}
//         <div className="industry-box-extra">{/* Placeholder for additional industry */}</div>
//       </div>
//       <motion.div
//         className="industries-footer"
//         initial={{ opacity: 0, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: industries.length * 0.2 }}
//       >
//         <motion.div
//           className="Industries_text"
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: industries.length * 0.2 + 0.2 }}
//         >
//           INDUSTRIES
//         </motion.div>
//         <motion.div
//           className="we_serve_text"
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: industries.length * 0.2 + 0.4 }}
//         >
//           We Serve
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// export default Industries;
import React from 'react';
import { motion } from 'framer-motion';

const IndustriesServe = () => {
  const industries = [
    "TELECOMMUNICATIONS",
    "ENTERTAINMENT & MEDIA",
    "FOOD & BEVERAGES",
    "AUTOMOTIVE",
    "REAL ESTATE",
    "COSMETICS",
    "TRAVEL & TOURISM",
    "TECHNOLOGY",
    "HEALTHCARE",
    "FINANCE & BANKING",
    "ENERGY & UTILITIES",
  ];
  
  return (
    <div className="industries-container">
      <div className="industries-grid">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className="industry-box"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {industry}
          </motion.div>
        ))}
        <div className="industry-box-extra">{/* Placeholder for additional industry */}</div>
      </div>
      <motion.div
        className="industries-footer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: industries.length * 0.1 }}
      >
        <motion.div
          className="Industries_text"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: industries.length * 0.1 + 0.1 }}
        >
          INDUSTRIES
        </motion.div>
        <motion.div
          className="we_serve_text"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: industries.length * 0.1 + 0.2 }}
        >
          We Serve
        </motion.div>
      </motion.div>
    </div>
  );
}

export default IndustriesServe;
