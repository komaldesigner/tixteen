// import { useEffect, useState } from "react";
// import Scrollbar from "smooth-scrollbar";
// import OversrollPlugin from "smooth-scrollbar/plugin/overscroll"


// var overscrollOptions ={
//     enable : true,
//     effect : "bounce",
//     damping : 0.15,
//     maxOverscroll : 150
// }

// var options={
//     damping : 0.05,
//     plugins:{
//         overscroll: {...overscrollOptions}
//     }

// }
// const Scroll = () => {
//   useEffect(() => {
//     Scrollbar.use(OverscrollPlugin);
//     Scrollbar.init(document.body, options);
//     return () => {
//         if(Scrollbar) Scrollbar.destroy(document.body);
//     }
//   }, []);

//   return null;
// };

// export default Scroll;

// import { useEffect } from "react";
// import Scrollbar from "smooth-scrollbar";
// import OverscrollPlugin from "smooth-scrollbar/dist/plugins/overscroll";
// import { useEffect, useRef } from "react";


// var overscrollOptions = {
//   enable: true,
//   effect: "bounce",
//   damping: 0.15,
//   maxOverscroll: 250
// };

// var options = {
//   damping: 0.04,
//   plugins: {
//     overscroll: { ...overscrollOptions }
//   }
// };

// const Scroll = () => {
//   useEffect(() => {
//     Scrollbar.use(OverscrollPlugin);
//     Scrollbar.init(document.body, options);
//     return () => {
//       if (Scrollbar) Scrollbar.destroy(document.body);
//     };
//   }, []);

//   return null;
// };

// export default Scroll;

// import React, { useEffect, useRef } from "react";
// import Scrollbar from "smooth-scrollbar";
// import OverscrollPlugin from "smooth-scrollbar/dist/plugins/overscroll";
// import New from "../../pages/New/New";


// const Scroll = () => {
//   // Create a ref for the scrollable container
//   const scrollContainerRef = useRef(null);

//   // Options for overscroll effect
//   const overscrollOptions = {
//     enable: true,
//     effect: "bounce",
//     damping: 0.15,
//     maxOverscroll: 250,
//   };

//   // Options for smooth-scrollbar
//   const options = {
//     damping: 0.04,
//     plugins: {
//       overscroll: { ...overscrollOptions },
//     },
//   };

//   useEffect(() => {
//     // Use the OverscrollPlugin
//     Scrollbar.use(OverscrollPlugin);

//     // Initialize scrollbar on the ref element
//     const scrollElement = scrollContainerRef.current;
//     const scrollbarInstance = Scrollbar.init(scrollElement, options);

//     // Cleanup function to destroy scrollbar instance
//     return () => {
//       if (scrollbarInstance) scrollbarInstance.destroy();
//     };
//   }, []);

//   return (
//     <div ref={scrollContainerRef} id="my-scrollbar" style={{ height: '100vh', overflow: 'hidden' }}>
//       {/* Your scrollable content goes here */}
//       <div style={{ height: '200vh'}}>
//         {/* <h1>Scrollable Content</h1>
//         <p>Add your content here. This is just an example with enough height to enable scrolling.</p> */}
//         <New/>
//       </div>
//     </div>
//   );
// };

// export default Scroll;

import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/dist/plugins/overscroll";


const SmoothScroll = ({ children }) => {
  const scrollContainerRef = useRef(null);

  const overscrollOptions = {
    enable: true,
    effect: "bounce",
    damping: 0.15,
    maxOverscroll: 250,
  };

  const options = {
    damping: 0.04,
    plugins: {
      overscroll: { ...overscrollOptions },
    },
  };

  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);
    const scrollElement = scrollContainerRef.current;
    const scrollbarInstance = Scrollbar.init(scrollElement, options);

    return () => {
      if (scrollbarInstance) scrollbarInstance.destroy();
    };
  }, []);

  return (
    <div ref={scrollContainerRef} id="my-scrollbar" style={{ height: '100vh', overflow: 'hidden' }}>
      <div style={{ height: '100%'}}>
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;
