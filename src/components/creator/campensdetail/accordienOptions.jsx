// import React, { useState } from 'react';
// import "../../../styles/creator/campainDetsils/campenAcrrdienOptions.css";

// export function AccordienOptions({ image, message }) {
//     return (
//         <div className='main_accordien_options_div'>
//             <div>
//                 <img src={image} alt="" />
//             </div>
//             <div>
//                 {message}
//             </div>
//         </div>
//     );
// }

// export function Accordion({ id, heading, data, targetId, isOpen, onToggle }) {
//     return (
//         <div>
//             <div className="card accordion_option_items">
//                 <div className="card-header" id={id}
//                  data-toggle="collapse"
//                  data-target={`#${targetId}`}
//                  aria-expanded={isOpen}
//                  aria-controls={targetId}
//                  onClick={onToggle}
//                 >
//                     <h5 className="mb-0 d-flex justify-content-between align-items-center">
//                         <button
//                             className="btn btn-link bold_text"
//                             type="button"
//                             // data-toggle="collapse"
//                             // data-target={`#${targetId}`}
//                             // aria-expanded={isOpen}
//                             // aria-controls={targetId}
//                             // onClick={onToggle}
//                         >
//                             {heading}
//                         </button>
//                         <span className={`accordion-icon ${isOpen ? 'open' : 'closed'}`}>
//                             {isOpen ? '-' : '+'}
//                         </span>
//                     </h5>
//                 </div>
//                 <div id={targetId} className={`collapse ${isOpen ? 'show' : ''}`} aria-labelledby={id} data-parent="#accordionFlushExample">
//                     <div className="card-body">
//                         {data}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState } from 'react';
import "../../../styles/creator/campainDetsils/campenAcrrdienOptions.css";

export function AccordienOptions({ image, message }) {
    return (
        <div className='main_accordien_options_div'>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                {message}
            </div>
        </div>
    );
}

export function Accordion({ id, heading, data, targetId, isOpen, onToggle }) {
    return (
        <div>
            <div className="card accordion_option_items">
                <div className="card-header" id={id}>
                    <h5 className="mb-0 d-flex justify-content-between align-items-center">
                        <button
                            className="btn btn-link bold_text"
                            type="button"
                            onClick={onToggle}
                        >
                            {heading}
                        </button>
                        <span className={`accordion-icon ${isOpen ? 'open' : 'closed'}`}>
                            {isOpen ? '-' : '+'}
                        </span>
                    </h5>
                </div>
                <div 
                    id={targetId} 
                    className={`collapse ${isOpen ? 'show' : ''}`} 
                    aria-labelledby={id} 
                >
                    <div className="card-body">
                        {data}
                    </div>
                </div>
            </div>
        </div>
    );
}
