// import React, { useEffect, useState } from 'react'
// import TopHeaderVideo from '../../components/NewHome/Header/TopHeaderVideo'
// import NewHeader from '../../components/NewHome/Header/NewHeader'
// import Discove from '../../components/NewHome/Discove/Discove';
// import HomeVideo from '../../components/NewHome/HomeVideo/HomeVideo';
// import WallOfWork from '../../components/NewHome/WallOfWork/WallOfWork';
// import CollaborationOptions from '../../components/NewHome/Collaboration/CollaborationList';
// import ChroniclesHeading from '../../components/NewHome/Chronicles/ChroniclesHeading';
// import IndustriesServe from '../../components/NewHome/INDUSTRIES/INDUSTRIESserver';
// import InfluencerImage from '../../components/NewHome/influncer/influncerImages';
// import Maininfluencerplatform from '../../components/NewHome/influencerplatform/Maininfluencerplatform';
// import Stayupdate from '../../components/NewHome/influncer/Stayupdate';
// import SmoothScroll from '../../utils/scroll/smoothscroll';

// function New() {
//   const [showYellowBg, setShowYellowBg] = useState(false);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//           setShowYellowBg(true);
//         }, 3000);
//         return () => clearTimeout(timer);
//       }, []);
//   return (
//     <div>
//          {showYellowBg ? (
//            <>
//            <SmoothScroll>
//         <NewHeader/>
//         {/* <Discove/> */}
//         <HomeVideo/>
//         <WallOfWork/>
//         <CollaborationOptions/>
//         <ChroniclesHeading/>
//         <IndustriesServe/>
//         <InfluencerImage/>
//         <Maininfluencerplatform/>
//         <Stayupdate/>
//         <SmoothScroll/>
        
//         </>
//          ):(
//              <TopHeaderVideo/>
//          )}
//     </div>
//   )
// }

// export default New


import React, { useEffect, useState } from 'react';
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
import SmoothScroll from "../../utils/scroll/smoothscroll"
import ClienteleSecond from '../../components/Home/Clientele/secondimages';

function New() {
  const [showYellowBg, setShowYellowBg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowYellowBg(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showYellowBg ? (
        <div  >
        {/* <SmoothScroll> */}
          <NewHeader />
          {/* <Discove /> */}
          <HomeVideo />
          {/* <WallOfWork /> */}
          <CollaborationOptions />
          <ClienteleSecond/>
          <ChroniclesHeading />
          <IndustriesServe />
          <InfluencerImage />
          <Maininfluencerplatform />
          <Stayupdate />
        {/* </SmoothScroll> */}
        </div>
      ) : (
        <TopHeaderVideo />
      )}
    </div>
  );
}

export default New;
