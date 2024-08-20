// // import React, { useEffect, useRef, useState } from 'react';
// import React, { useRef, useState, useEffect, useCallback } from 'react';
// import WrapBurger from '../../../assets/img/home/Wrap-Burger.png'
// import YESByDCM from '../../../assets/img/home/YES-By-DCM.png'
// import RideAndPlay from '../../../assets/img/home/Ride and Play.png'
// import Sapphire from '../../../assets/img/home/sapphire  logo.png'
// import Bonn from '../../../assets/img/home/Bonn.png'
// import Chenab from '../../../assets/img/home/Chenab.png'
// import Derby from '../../../assets/img/home/Derby.png'
// import Evil from '../../../assets/img/home/Evil.png'
// import Gates from '../../../assets/img/home/Gates-Logo.png'
// import Maalana from '../../../assets/img/home/Maalana-logo 2.png'
// import "../../../styles/home/clientele.css"
// import BrainAsium from '../../../assets/img/home/Brain-Asium.png'
// import BakersTree from '../../../assets/img/home/Bakers-Tree.png'
// import Americana from '../../../assets/img/home/Americana.png'
// import AllNice from '../../../assets/img/home/All-Nice.png'
// import UtamSugar from '../../../assets/img/home/Utam-Sugar.png'
// import NativeOrigins from '../../../assets/img/home/Native-origins.png'
// import NanuOrganic from '../../../assets/img/home/nanu-Organic.png'
// import Kashish from '../../../assets/img/home/Kashish.png'
// import HugeA from '../../../assets/img/home/Huge-a.png'
// import GoodEarth from '../../../assets/img/home/Good-Earth.png'

// const FirsRowimage = [
//     {
//         image: WrapBurger,
//         alt: "WrapBurger"
//     },
//     {
//         image: YESByDCM,
//         alt: "YESByDCM"
//     },
//     {
//         image: RideAndPlay,
//         alt: "RideAndPlay"
//     },
//     {
//         image: Sapphire,
//         alt: "Sapphire"
//     },
//     {
//         image: Bonn,
//         alt: "Bonn"
//     },
//     {
//         image: Chenab,
//         alt: "Chenab"
//     },
//     {
//         image: Derby,
//         alt: "Derby"
//     },
//     {
//         image: Evil,
//         alt: "Evil"
//     },
//     {
//         image: Gates,
//         alt: "Gates"
//     },
//     {
//         image: Maalana,
//         alt: "Maalana"
//     },
// ]
// const SecondRowimage = [
//     {
//         image: BrainAsium,
//         alt: "BrainAsium"
//     },
//     {
//         image: BakersTree,
//         alt: "BakersTree"
//     },
//     {
//         image: Americana,
//         alt: "Americana"
//     },
//     {
//         image: AllNice,
//         alt: "AllNice"
//     },
//     {
//         image: UtamSugar,
//         alt: "UtamSugar"
//     },
//     {
//         image: NativeOrigins,
//         alt: "NativeOrigins"
//     },
//     {
//         image: NanuOrganic,
//         alt: "NanuOrganic"
//     },
//     {
//         image: Kashish,
//         alt: "Kashish"
//     },
//     {
//         image: HugeA,
//         alt: "HugeA"
//     },
//     {
//         image: GoodEarth,
//         alt: "GoodEarth"
//     },
// ]


// function Clientele() {
//     const firstRowRef = useRef();
//     const secondRowRef = useRef();
//     const containerRef = useRef();
//     const [currentScroll, setCurrentScroll] = useState(0);
//     const [canScrollVertically, setCanScrollVertically] = useState(false);
//     const [scrollingUp, setScrollingUp] = useState(false);
//     const [isCentered, setIsCentered] = useState(false);

//     const updateScroll = useCallback((deltaY) => {
//         setCurrentScroll((prevScroll) => {
//             const newScroll = prevScroll + deltaY;

//             if (firstRowRef.current && secondRowRef.current) {
//                 const maxScrollLeftFirstRow = firstRowRef.current.scrollWidth - firstRowRef.current.clientWidth;
//                 const maxScrollLeftSecondRow = secondRowRef.current.scrollWidth - secondRowRef.current.clientWidth;
//                 const totalMaxScroll = maxScrollLeftFirstRow + maxScrollLeftSecondRow;

//                 if (scrollingUp) {
//                     if (newScroll <= maxScrollLeftFirstRow) {
//                         firstRowRef.current.scrollLeft = newScroll;
//                     } else if (newScroll <= totalMaxScroll) {
//                         secondRowRef.current.scrollLeft = newScroll - maxScrollLeftFirstRow;
//                     }

//                     if (newScroll <= 0) {
//                         setCanScrollVertically(true);
//                         setScrollingUp(false);
//                         return 0;
//                     }

//                     setCanScrollVertically(false);
//                 } else {
//                     if (newScroll <= maxScrollLeftFirstRow) {
//                         firstRowRef.current.scrollLeft = newScroll;
//                     } else if (newScroll <= totalMaxScroll) {
//                         secondRowRef.current.scrollLeft = newScroll - maxScrollLeftFirstRow;
//                     }

//                     if (newScroll >= totalMaxScroll) {
//                         setCanScrollVertically(true); // Allow vertical scrolling
//                     } else {
//                         setCanScrollVertically(false);
//                     }

//                     if (newScroll < 0) {
//                         firstRowRef.current.scrollLeft = 0;
//                         secondRowRef.current.scrollLeft = 0;
//                         return 0;
//                     }
//                 }

//                 return newScroll;
//             }

//             return prevScroll;
//         });
//     }, [scrollingUp]);

//     const handleVerticalScroll = useCallback((e) => {
//         if (!isCentered) return; // Only apply custom scroll logic if the component is in the center
//         if (canScrollVertically && !scrollingUp) return; // Allow normal vertical scrolling if allowed and not scrolling up

//         e.preventDefault();
//         const deltaY = e.deltaY;

//         updateScroll(deltaY);
//     }, [canScrollVertically, scrollingUp, updateScroll, isCentered]);

//     const handleScrollUp = useCallback((e) => {
//         if (e.deltaY < 0 && canScrollVertically) {
//             setScrollingUp(true);
//             setCanScrollVertically(false);
//         }
//     }, [canScrollVertically]);

//     useEffect(() => {
//         const container = containerRef.current;
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 const rect = entry.boundingClientRect;
//                 const viewportHeight = window.innerHeight;
//                 const isInCenter = rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2;
//                 setIsCentered(isInCenter);
//             },
//             { threshold: 0.5 }
//         );

//         if (container) {
//             observer.observe(container);
//         }

//         return () => {
//             if (container) {
//                 observer.unobserve(container);
//             }
//         };
//     }, []);

//     useEffect(() => {
//         window.addEventListener('wheel', handleVerticalScroll, { passive: false });
//         window.addEventListener('wheel', handleScrollUp, { passive: false });

//         return () => {
//             window.removeEventListener('wheel', handleVerticalScroll);
//             window.removeEventListener('wheel', handleScrollUp);
//         };
//     }, [handleVerticalScroll, handleScrollUp]);

//     return (
//         <>
//         <div ref={containerRef} className='d-flex flex-column main_clientele_top_parent_div' style={{ height: "100vh", overflowY: canScrollVertically ? 'scroll' : 'hidden' }}>
//             <div className='main_clientele_top_images_div'>
//                 <div ref={firstRowRef} className='main_clientele_top_images_div gallery-container'>
//                     {FirsRowimage.map((item, index) => (
//                         <img
//                             key={index}
//                             src={item.image}
//                             alt={item.alt}
//                             className="gallery-image"
//                             custom={index}
//                         />
//                     ))}
//                 </div>
//             </div>
//             <div className='main_clientele_top_images_div'>
//                 <div ref={secondRowRef} className='main_clientele_top_images_div gallery-container'>
//                     {SecondRowimage.map((item, index) => (
//                         <img
//                             key={index}
//                             src={item.image}
//                             alt={item.alt}
//                             className="gallery-image"
//                             custom={index}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//         <div style={{height: "100px"}} >tt</div>
//         <div style={{height: "100px"}} >tt</div>
//         <div style={{height: "100px"}} >tt</div>
//         <div style={{height: "100px"}} >tt</div>
//         <div style={{height: "100px"}} >tt</div>
//         <div style={{height: "100px"}} >tt</div>
//         <div style={{height: "100px"}} >tt</div>
//         <div style={{height: "100px"}} >tt</div>
//         <div style={{height: "100px"}} >tt</div>
//         <div style={{height: "100px"}} >tt</div>
//         <div style={{height: "100px"}} >tt</div>
//         <div style={{height: "100px"}} >tt</div>
//         <div style={{height: "100px"}} >tt</div>
//         <div style={{height: "100px"}} >tt</div>
//         <div style={{height: "100px"}} >tt</div>
//         </>

//     );
// }

// export default Clientele;


import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion,  } from "framer-motion";
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
import Logo from "../../../assets/img/tixteen_icon.png";

import "../../../styles/home/clientele.css";
import ClienteleSecond from './secondimages';

const FirsRowimage = [
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

const SecondRowimage = [
    { image: BrainAsium, alt: "BrainAsium" },
    { image: BakersTree, alt: "BakersTree" },
    { image: Americana, alt: "Americana" },
    { image: AllNice, alt: "AllNice" },
    { image: UtamSugar, alt: "UtamSugar" },
    { image: NativeOrigins, alt: "NativeOrigins" },
    { image: NanuOrganic, alt: "NanuOrganic" },
    { image: Kashish, alt: "Kashish" },
    { image: HugeA, alt: "HugeA" },
    { image: GoodEarth, alt: "GoodEarth" },
];

function Clientele() {
    const scrollContainerRef = useRef(null);
    const secondContainerRef = useRef(null);
    const scrollSpeedFactor = 5; // Adjust this factor to increase/decrease scroll speed

    // useEffect(() => {
    //     const handleScroll = (event) => {
    //         const deltaY = event.deltaY;
    //         scrollContainerRef.current.scrollLeft += deltaY * scrollSpeedFactor;
    //     };

    //     const scrollContainer = scrollContainerRef.current;
    //     scrollContainer.addEventListener('wheel', handleScroll);

    //     return () => {
    //         scrollContainer.removeEventListener('wheel', handleScroll);
    //     };
    // }, []);

    return (
        <>
        {/* <motion.div className='clientele_page_logo_div'
            initial={{ opacity: 0, height:"100vh" }}
            whileInView={{ opacity: 1, height:"20vh" }}
            transition={{ duration: 0.6 }}
        >
            <img src={Logo} alt="logo" className="clientele_page_logo" />

        </motion.div> */}
        <motion.div className='clientele_slider_main_parent_div'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 , delay: 0.5}}
        >
            {/* <div className='main_clientele_top_parent_div' ref={scrollContainerRef}>
                <div className="" >
                    <div className="gallery-container">
                        {FirsRowimage.map((item, index) => (
                            <img key={index} src={item} alt={item.alt} className="gallery-image" />
                        ))}
                    </div>
                </div>
            </div> */}
            <div>
                <ClienteleSecond/>
            </div>
        </motion.div>
        </>
    );
}

export default Clientele;;
