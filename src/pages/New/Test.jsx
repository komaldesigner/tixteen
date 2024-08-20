
// // import React, { useEffect, useState } from 'react';
// // import { motion, useAnimation } from 'framer-motion';
// // import { useInView } from 'react-intersection-observer';
// // import TopHeaderVideo from '../../components/NewHome/Header/TopHeaderVideo';
// // import NewHeader from '../../components/NewHome/Header/NewHeader';
// // import Discove from '../../components/NewHome/Discove/Discove';
// // import HomeVideo from '../../components/NewHome/HomeVideo/HomeVideo';
// // import WallOfWork from '../../components/NewHome/WallOfWork/WallOfWork';
// // import CollaborationOptions from '../../components/NewHome/Collaboration/CollaborationList';
// // import ChroniclesHeading from '../../components/NewHome/Chronicles/ChroniclesHeading';
// // import IndustriesServe from '../../components/NewHome/INDUSTRIES/INDUSTRIESserver';
// // import InfluencerImage from '../../components/NewHome/influncer/influncerImages';
// // import Maininfluencerplatform from '../../components/NewHome/influencerplatform/Maininfluencerplatform';
// // import Stayupdate from '../../components/NewHome/influncer/Stayupdate';

// // import './New.css'; // Import the CSS file


// // function New() {
// //     return (
// //         <div>
// //             <NewHeader/>
// //             <HomeVideo/>
// //             <WallOfWork/>
// //             <CollaborationOptions/>
// //         </div>
// //     );
// // }

// // function Test(){
// //     return (
// //         <div>
// //             {/* <NewHeader/>
// //             <HomeVideo/>
// //             <WallOfWork/>
// //             <CollaborationOptions/> */}
// //             <TestTwo/>
// //         </div>
// //     );
// // }

// // function TestTwo() {
// //   const [showYellowBg, setShowYellowBg] = useState(false);

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setShowYellowBg(true);
// //     }, 3000);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   const components = [
// //     NewHeader,
// //     HomeVideo,
// //     WallOfWork,
// //     CollaborationOptions,
// //     ChroniclesHeading,
// //     IndustriesServe,
// //     InfluencerImage,
// //     Maininfluencerplatform,
// //     Stayupdate
// //   ];

// //   return (
// //     <div className="main-container-test">
// //       {showYellowBg ? (
// //         <>
// //           {components.map((Component, index) => (
// //             <Section key={index}>
// //               <Component />
// //             </Section>
// //           ))}
// //         </>
// //       ) : (
// //         <TopHeaderVideo />
// //       )}
// //     </div>
// //   );
// // }

// // const Section = ({ children }) => {
// //   const controls = useAnimation();
// //   const [ref, inView] = useInView({ threshold: 0.5 });

// //   useEffect(() => {
// //     if (inView) {
// //       controls.start('visible');
// //     } else {
// //       controls.start('hidden');
// //     }
// //   }, [controls, inView]);

// //   return (
// //     <motion.div
// //       ref={ref}
// //       initial="hidden"
// //       animate={controls}
// //       variants={{
// //         visible: { opacity: 1,x: 0  ,transition: { duration: 1 } },
// //         hidden: { opacity: 0, x: 130, transition: { duration: 1 } }
// //       }}
// //       className="section-test"
// //     >
// //       {children}
// //     </motion.div>
// //   );
// // };

// // export default Test;


// import React, { useEffect, useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import TopHeaderVideo from '../../components/NewHome/Header/TopHeaderVideo';
// import NewHeader from '../../components/NewHome/Header/NewHeader';
// import Discove from '../../components/NewHome/Discove/Discove';
// import HomeVideo from '../../components/NewHome/HomeVideo/HomeVideo';
// import WallOfWork from '../../components/NewHome/WallOfWork/WallOfWork';
// import CollaborationOptions from '../../components/NewHome/Collaboration/CollaborationList';
// import ChroniclesHeading from '../../components/NewHome/Chronicles/ChroniclesHeading';
// import IndustriesServe from '../../components/NewHome/INDUSTRIES/INDUSTRIESserver';
// import InfluencerImage from '../../components/NewHome/influncer/influncerImages';
// import Maininfluencerplatform from '../../components/NewHome/influencerplatform/Maininfluencerplatform';
// import Stayupdate from '../../components/NewHome/influncer/Stayupdate';

// import './New.css'; // Import the CSS file

// function New() {
//   const [showYellowBg, setShowYellowBg] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowYellowBg(true);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   const components = [
//     NewHeader,
//     Discove,
//     HomeVideo,
//     WallOfWork,
//     CollaborationOptions,
//     ChroniclesHeading,
//     IndustriesServe,
//     InfluencerImage,
//     Maininfluencerplatform,
//     Stayupdate
//   ];

//   return (
//     <div className="main-container">
//       {showYellowBg ? (
//         <>
//           {components.map((Component, index) => (
//             <Section key={index}>
//               <Component />
//             </Section>
//           ))}
//         </>
//       ) : (
//         <TopHeaderVideo />
//       )}
//     </div>
//   );
// }

// const Section = ({ children }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ threshold: 0.5 });

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     } else {
//       controls.start('hidden');
//     }
//   }, [controls, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         visible: { opacity: 1, x: 0, transition: { duration: 1 } },
//         hidden: {
//           opacity: 0,
//           x: '0',
//           transition: { duration: 1 },
//           transitionEnd: {
//             display: 'none'
//           }
//         }
//       }}
//       className="section"
//     >
//       <div className="split-container">
//         <motion.div
//           className="left-part"
//           variants={{
//             visible: { x: 0, transition: { duration: 1 } },
//             hidden: { x: -100, transition: { duration: 1 } }
//           }}
//         >
//           {children}
//         </motion.div>
//         <motion.div
//           className="right-part"
//           variants={{
//             visible: { x: 0, transition: { duration: 1 } },
//             hidden: { x: 100, transition: { duration: 1 } }
//           }}
//         >
//           {children}
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default New;


// import React, { useEffect, useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import TopHeaderVideo from '../../components/NewHome/Header/TopHeaderVideo';
// import NewHeader from '../../components/NewHome/Header/NewHeader';
// import Discove from '../../components/NewHome/Discove/Discove';
// import HomeVideo from '../../components/NewHome/HomeVideo/HomeVideo';
// import WallOfWork from '../../components/NewHome/WallOfWork/WallOfWork';
// import CollaborationOptions from '../../components/NewHome/Collaboration/CollaborationList';
// import ChroniclesHeading from '../../components/NewHome/Chronicles/ChroniclesHeading';
// import IndustriesServe from '../../components/NewHome/INDUSTRIES/INDUSTRIESserver';
// import InfluencerImage from '../../components/NewHome/influncer/influncerImages';
// import Maininfluencerplatform from '../../components/NewHome/influencerplatform/Maininfluencerplatform';
// import Stayupdate from '../../components/NewHome/influncer/Stayupdate';

// import './New.css'; // Import the CSS file

// function Testpage() {
//   const [showYellowBg, setShowYellowBg] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowYellowBg(true);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   const components = [
//     NewHeader,
//     // Discove,
//     HomeVideo,
//     // WallOfWork,
//     CollaborationOptions,
//     ChroniclesHeading,
//     IndustriesServe,
//     InfluencerImage,
//     Maininfluencerplatform,
//     Stayupdate
//   ];

//   return (
//     <div className="main-container-test">
//       {showYellowBg ? (
//         <>
//           {components.map((Component, index) => (
//             <>
//             <Section key={index}>
//               <Component />
//             </Section>
//             </>
//           ))}
//         </>
//       ) : (
//         <TopHeaderVideo />
//       )}
//     </div>
//   );
// }

// const Section = ({ children }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ threshold: 0.5 });

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     } else {
//       controls.start('hidden');
//     }
//   }, [controls, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         visible: { opacity: 1, transition: { duration: 1 } },
//         hidden: { opacity: 0, transition: { duration: 1 } }
//       }}
//       className="section-test"
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default Testpage;

// import React, { useEffect, useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import TopHeaderVideo from '../../components/NewHome/Header/TopHeaderVideo';
// import NewHeader from '../../components/NewHome/Header/NewHeader';
// import Discove from '../../components/NewHome/Discove/Discove';
// import HomeVideo from '../../components/NewHome/HomeVideo/HomeVideo';
// import WallOfWork from '../../components/NewHome/WallOfWork/WallOfWork';
// import CollaborationOptions from '../../components/NewHome/Collaboration/CollaborationList';
// import ChroniclesHeading from '../../components/NewHome/Chronicles/ChroniclesHeading';
// import IndustriesServe from '../../components/NewHome/INDUSTRIES/INDUSTRIESserver';
// import InfluencerImage from '../../components/NewHome/influncer/influncerImages';
// import Maininfluencerplatform from '../../components/NewHome/influencerplatform/Maininfluencerplatform';
// import Stayupdate from '../../components/NewHome/influncer/Stayupdate';
// import SmoothScroll from '../../utils/scroll/smoothscroll'; // Import the SmoothScroll component

// import './New.css'; // Import the CSS file

// function Testpage() {
//   const [showYellowBg, setShowYellowBg] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowYellowBg(true);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   const components = [
//     NewHeader,
//     // Discove,
//     HomeVideo,
//     // WallOfWork,
//     CollaborationOptions,
//     ChroniclesHeading,
//     IndustriesServe,
//     InfluencerImage,
//     Maininfluencerplatform,
//     Stayupdate
//   ];

//   return (
//     <div className="main-container-test">
//       {showYellowBg ? (
//         <SmoothScroll>
//           {components.map((Component, index) => (
//             <Section key={index}>
//               <Component />
//             </Section>
//           ))}
//         </SmoothScroll>
//       ) : (
//         <TopHeaderVideo />
//       )}
//     </div>
//   );
// }

// const Section = ({ children }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ threshold: 0.5 });

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     } else {
//       controls.start('hidden');
//     }
//   }, [controls, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         visible: { opacity: 1, transition: { duration: 1 } },
//         hidden: { opacity: 0, transition: { duration: 1 } }
//       }}
//       className="section-test"
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default Testpage;


import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TopHeaderVideo from '../../components/NewHome/Header/TopHeaderVideo';
import NewHeader from '../../components/NewHome/Header/NewHeader';
import Discove from '../../components/NewHome/Discove/Discove';
import HomeVideo from '../../components/NewHome/HomeVideo/HomeVideo';
import WallOfWork from '../../components/NewHome/WallOfWork/WallOfWork';
import CollaborationOptions from '../../components/NewHome/Collaboration/CollaborationList';
import ChroniclesHeading from '../../components/NewHome/Chronicles/ChroniclesHeading';
import IndustriesServe from '../../components/NewHome/INDUSTRIES/INDUSTRIESserver';
import InfluencerImage from '../../components/NewHome/influncer/influncerImages';
import Maininfluencerplatform from '../../components/NewHome/influencerplatform/Maininfluencerplatform';
import Stayupdate from '../../components/NewHome/influncer/Stayupdate';
import InfluencerImage1 from '../../components/NewHome/influncer/InfluencerImage1';
import InfluencerImage2 from '../../components/NewHome/influncer/InfluencerImage2';
import InfluencerImage3 from '../../components/NewHome/influncer/InfluencerImage3';
import InfluencerImage4 from '../../components/NewHome/influncer/InfluencerImage4';


import './New.css'; // Import the CSS file

function Testpage() {
  const [showYellowBg, setShowYellowBg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowYellowBg(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const components = [
    NewHeader,
    // Discove,
    HomeVideo,
    // WallOfWork,
    CollaborationOptions,
    ChroniclesHeading,
    IndustriesServe,
    // InfluencerImage,
    InfluencerImage1,
    InfluencerImage2,
    InfluencerImage3,
    InfluencerImage4,
    Maininfluencerplatform,
    Stayupdate
  ];

  return (
    <div className="main-container-test">
      {showYellowBg ? (
        <>
          {components.map((Component, index) => (
            <Section key={index}>
              <Component />
            </Section>
          ))}
        </>
      ) : (
        <TopHeaderVideo />
      )}
    </div>
  );
}

const Section = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, transition: { duration: 1 } },
        hidden: { opacity: 0, transition: { duration: 1 } }
      }}
      className="section-test"
    >
      {children}
    </motion.div>
  );
};

export default Testpage;