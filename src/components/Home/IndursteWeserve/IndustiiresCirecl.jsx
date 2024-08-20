
// import React from 'react';
// import { motion, useScroll, useTransform } from "framer-motion";
// import '../../../styles/home/industry/IndustiiresCirecl.css';

// import SeondaryHeader from '../../headers/seondaryHeader';
// import IndustiresDetails from './IndustiresDetails';

// function IndustiiresCirecl() {
//     const { scrollYProgress } = useScroll();
//     // const size = useTransform(scrollYProgress, [0, 0.5], [1200, 1900]);
//     const size = useTransform(scrollYProgress, [0, 0.5], [1000, 2020]);

//     return (


//         <>
//             <div>lnlnlnlnl</div>
//             <div className='industry_weserve_parent_div' >
//                 <div className='industry_weserve_secondary_parent_div' ><SeondaryHeader/></div>
//                 <div>
//                 <div className='main_industry_weserve_parent_div text-center' >
//                     <motion.div
//                         className="circle_of_industries"
//                         style={{
//                             width: size,
//                             height: size,
//                         }}
//                     >
//                     </motion.div>


//                 </div>
//                 </div>
//             </div>

// <div>
//     <IndustiresDetails/>
// </div>

//         </>
//     );
// }

// export default IndustiiresCirecl;


import React, { useRef, useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform, useInView } from "framer-motion";
import '../../../styles/home/industry/IndustiiresCirecl.css';

import SeondaryHeader from '../../headers/seondaryHeader';
import IndustiresDetails from './IndustiresDetails';

function IndustiiresCirecl() {
    const ref = useRef(null);
    const { scrollY } = useViewportScroll();
    const [offsetTop, setOffsetTop] = useState(0);

    useEffect(() => {
        if (ref.current) {
            setOffsetTop(ref.current.offsetTop);
        }
    }, [ref]);

    const size = useTransform(scrollY, [offsetTop, offsetTop + window.innerHeight], [1200, 1800]);
    const currentSize = size.get();

    return (
        <>
            {/* <div className='industry_weserve_parent_div' ref={ref}>
                <div className='industry_weserve_secondary_parent_div'><SeondaryHeader /></div>
                <div>
                    <div className='main_industry_weserve_parent_div text-center'>
                        <motion.div
                            className="circle_of_industries"
                            style={{
                                width: size,
                                height: size,

                            }}
                        >
                            <div className='Industries_text_circle' >
                                Industry We serve
                            </div>

                        </motion.div>
                    </div>
                </div>

            </div> */}
            <div>
                <IndustiresDetails />
            </div>
        </>
    );
}

export default IndustiiresCirecl;


// import React, { useRef, useEffect, useState } from 'react';
// import { motion, useViewportScroll, useTransform } from "framer-motion";
// import '../../../styles/home/industry/IndustiiresCirecl.css';

// import SeondaryHeader from '../../headers/seondaryHeader';
// import IndustiresDetails from './IndustiresDetails';

// function IndustiiresCirecl() {
//     const ref = useRef(null);
//     const { scrollY } = useViewportScroll();
//     const [offsetTop, setOffsetTop] = useState(0);
//     const [showDetails, setShowDetails] = useState(false);

//     useEffect(() => {
//         if (ref.current) {
//             setOffsetTop(ref.current.offsetTop);
//         }
//     }, [ref]);

//     // Assuming the target size for full width and height is 2020
//     const targetSize = 2020;
//     const size = useTransform(scrollY, [offsetTop, offsetTop + window.innerHeight], [1000, targetSize]);

//     useEffect(() => {
//         function checkSize() {
//             const currentSize = size.get();
//             if (currentSize >= targetSize) {
//                 setShowDetails(true);
//             }
//         }

//         const unsubscribe = size.onChange(checkSize);

//         return () => unsubscribe();
//     }, [size, targetSize]);

//     return (
//         <>
//             <div>lnlnlnlnl</div>
//             <div className='industry_weserve_parent_div' ref={ref}>
//                 <div className='industry_weserve_secondary_parent_div'><SeondaryHeader /></div>
//                 <div>
//                     <div className='main_industry_weserve_parent_div text-center'>
//                         <motion.div
//                             className="circle_of_industries"
//                             style={{
//                                 width: size,
//                                 height: size,
//                             }}
//                         >
//                             {/* ... */}
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//             {showDetails && (
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <IndustiresDetails />
//                 </motion.div>
//             )}

// <IndustiresDetails />

//         </>
//     );
// }

// export default IndustiiresCirecl;
