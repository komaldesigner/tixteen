

// import React, { useRef, useEffect } from 'react';
// import { motion, useTransform, useScroll } from "framer-motion";

import WrapBurger from '../../../assets/img/home/Wrap-Burger.png';
import YESByDCM from '../../../assets/img/home/YES-By-DCM.png';
import RideAndPlay from '../../../assets/img/home/Ride and Play.png';
import Sapphire from '../../../assets/img/home/sapphire  logo.png';
import Bonn from '../../../assets/img/home/Bonn.png';
import Chenab from '../../../assets/img/home/Chenab.png';
import Derby from '../../../assets/img/home/Derby.png';
import Evil from '../../../assets/img/home/Evil.png';
import Gates from '../../../assets/img/home/Gates-Logo.png';
import Maalana from '../../../assets/img/home/Maalana-logo 2.png';
import BrainAsium from '../../../assets/img/home/Brain-Asium.png';
import BakersTree from '../../../assets/img/home/Bakers-Tree.png';
import Americana from '../../../assets/img/home/Americana.png';
import AllNice from '../../../assets/img/home/All-Nice.png';
import UtamSugar from '../../../assets/img/home/Utam-Sugar.png';
import NativeOrigins from '../../../assets/img/home/Native-origins.png';
import NanuOrganic from '../../../assets/img/home/nanu-Organic.png';
import Kashish from '../../../assets/img/home/Kashish.png';
import HugeA from '../../../assets/img/home/Huge-a.png';
import GoodEarth from '../../../assets/img/home/Good-Earth.png';
import "../../../styles/home/clientele.css";
// import { spring } from "framer-motion";


// const springConfig = { 
//   type: "spring",
//   stiffness: 50, // Lower stiffness for a gentler spring effect
//   damping: 120 // Increased damping for a smoother stop
// };
// const firstRowImages = [
//   { image: WrapBurger, alt: "WrapBurger" },
//   { image: YESByDCM, alt: "YESByDCM" },
//   { image: RideAndPlay, alt: "RideAndPlay" },
//   { image: Sapphire, alt: "Sapphire" },
//   { image: Bonn, alt: "Bonn" },
//   { image: Chenab, alt: "Chenab" },
//   { image: Derby, alt: "Derby" },
//   { image: Evil, alt: "Evil" },
//   { image: Gates, alt: "Gates" },
//   { image: Maalana, alt: "Maalana" },
// ];

// const secondRowImages = [
//     { image: AllNice, alt: "AllNice" },
//     { image: UtamSugar, alt: "UtamSugar" },
//     { image: NativeOrigins, alt: "NativeOrigins" },
//     { image: NanuOrganic, alt: "NanuOrganic" },
//     { image: Kashish, alt: "Kashish" },
//     { image: HugeA, alt: "HugeA" },
//     { image: GoodEarth, alt: "GoodEarth" },
//   { image: BrainAsium, alt: "BrainAsium" },
//   { image: BakersTree, alt: "BakersTree" },
//   { image: Americana, alt: "Americana" },


// ];

// function ClienteleSecond() {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

// const x = useTransform(scrollYProgress, [0.2, 1], ["100%", "-700%",], springConfig);  // Adjusted for full visibility with larger images
//     const xx = useTransform(scrollYProgress, [0.2, 1], ["-570%", "500%"], springConfig);    // Adjusted for full visibility with larger images

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           document.documentElement.style.setProperty('--scroll-start', scrollYProgress.get());
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (targetRef.current) {
//       observer.observe(targetRef.current);
//     }

//     return () => {
//       if (targetRef.current) {
//         observer.unobserve(targetRef.current);
//       }
//     };
//   }, [scrollYProgress]);

//   return (
//     <div className="clientele-container" ref={targetRef} >
//       <div className="clientele-wrapper"  >
//         <div className="image-row">
//           <motion.div className="image-container" style={{ x }}
//           transition={{ duration: 5 , ease: "linear" }}
//           >
//             {firstRowImages.map((item, index) => (
//               <div className="image-item" key={index}>
//                 <img src={item.image} alt={item.alt} />
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         <div className="spacer"></div>

//         <div className="image-row">
//           <motion.div className="image-container" style={{ x: xx }}
//            transition={{ duration: 5, ease: [2, 0.88, 0.01, 0.99] }} 
//           >
//             {secondRowImages.map((item, index) => (
//               <div className="image-item" key={index}>
//                 <img src={item.image} alt={item.alt} />
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ClienteleSecond;


import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

// const cards = [
//   {
//     url: WrapBurger,
//     title: "WrapBurger",
//     id: 1,
//   },
//   {
//     url: YESByDCM,
//     title: "YESByDCM",
//     id: 2
//   },
//   {
//     url: RideAndPlay,
//     title: "RideAndPlay",
//     id: 3
//   },
//   {
//     url: Sapphire,
//     title: "Sapphire",
//     id: 4
//   },
//   {
//     url: Bonn,
//     title: "Bonn",
//     id: 4
//   },
//   {
//     url: Chenab,
//     title: "Chenab",
//     id: 4
//   },
//   {
//     url: Derby,
//     title: "Derby",
//     id: 4
//   },
//   {
//     url: Evil,
//     title: "Evil",
//     id: 4
//   },
//   {
//     url: Gates,
//   },
//   {
//     url: Maalana,
//   },
//   {
//     url: BrainAsium,
//   },
//   {
//     url: BakersTree,
//   },
//   {
//     url: Americana,
//   },

//   {
//     url: AllNice,
//   },

//   {
//     url: UtamSugar,
//   },

//   {
//     url: NanuOrganic,
//   },

//   {
//     url: Kashish,
//   },

//   {
//     url: HugeA,
//   },

//   {
//     url: GoodEarth,
//   },

// ];.
const firstRowImages = [
  { image: WrapBurger, alt: "WrapBurger" },
  { image: YESByDCM, alt: "YESByDCM" },
  { image: RideAndPlay, alt: "RideAndPlay" },
  { image: Sapphire, alt: "Sapphire" },
  { image: Bonn, alt: "Bonn" },
  { image: Chenab, alt: "Chenab" },
  { image: Derby, alt: "Derby" },
  { image: Evil, alt: "Evil" },
  { image: Gates, alt: "Gates" },
  { image: Maalana, alt: "Maalana" },
];

const secondRowImages = [
  { image: AllNice, alt: "AllNice" },
  { image: UtamSugar, alt: "UtamSugar" },
  { image: NativeOrigins, alt: "NativeOrigins" },
  { image: NanuOrganic, alt: "NanuOrganic" },
  { image: Kashish, alt: "Kashish" },
  { image: HugeA, alt: "HugeA" },
  { image: GoodEarth, alt: "GoodEarth" },
  { image: BrainAsium, alt: "BrainAsium" },
  { image: BakersTree, alt: "BakersTree" },
  { image: Americana, alt: "Americana" },
];

const Example = () => {
  return (
    <div className="main_container_for_horizitnal_Scroll">
      <HorizontalScrollCarousel />
    </div>
  );
};
const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const reverseX = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);

  return (
    <section ref={targetRef} className="carousel-container">
       <div className="background-text">CLIENTELE</div>
      <div className="carousel-content">
        <motion.div style={{ x }} className="carousel-row">
          {firstRowImages.map((card, index) => (
            <motion.div
              key={index}
              className="carousel-item-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <img src={card.image} alt={card.alt} className="carousel-image-list" />
            </motion.div>
          ))}
        </motion.div>
        <motion.div style={{ x: reverseX }} className="carousel-row">
          {secondRowImages.map((card, index) => (
            <motion.div
              key={index}
              className="carousel-item-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <img src={card.image} alt={card.alt} className="carousel-image-list" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Example;