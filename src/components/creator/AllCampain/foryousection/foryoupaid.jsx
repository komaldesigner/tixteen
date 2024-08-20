
// import React, { useState, useEffect } from 'react';
// import "../../../styles/creator/AllCampain/forYou/foryoupaidbar.css";
// import Filter from "../../../../assets/creator/filter.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock } from '@fortawesome/free-solid-svg-icons';
// import { makeApi } from '../../../../api/callApi.tsx';

// const Foryoupaid = ({ selectedTab, setSelectedTab }) => {
//   const [isLocked, setIsLocked] = useState(false);
//   console.log(isLocked, "isLocked");

//   useEffect(() => {
//     const socialMedia = async () => {
//       try {
//         const response = await makeApi('/api/get-my-social-media', "GET");
//         const data = response.data.data[0];
//         const followers = parseInt(data.follower.replace(/,/g, ''), 10);

//         if (followers < 5000) {
//           setIsLocked(true);
//           setSelectedTab('barter');
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     socialMedia();
//   }, [setSelectedTab]);
//   return (
//     <div className="body">
//       <div className='filter_bar_crator'>
//         <div>Campaigns for You</div>
//         <div>
//           <img src={Filter} alt="filter" />
//         </div>
//       </div>
//       <div className="tabs" style={{ position: 'relative' }}>
//         <input
//           checked={selectedTab === 'Barter'}
//           value="Barter"
//           name="fav_language"
//           id="Barter"
//           type="radio"
//           className="input"
//           onChange={() => setSelectedTab('Barter')}
//         />
//         <label htmlFor="Barter" className="label">Barter</label>
//         {!isLocked &&
//           <>
//             <input
//               checked={selectedTab === 'Paid'}
//               value="Paid"
//               name="fav_language"
//               id="Paid"
//               type="radio"
//               className="input"
//               onChange={() => setSelectedTab('Paid')}
//             />
//             <label htmlFor="Paid" className="label">Paid</label>
//           </>
//         }
//         {isLocked &&
//           <>
//             <input
//               checked={selectedTab === 'Paid'}
//               value="Paid"
//               name="fav_language"
//               id="Paid"
//               type="radio"
//               className="input"
//               onChange={() => setSelectedTab('Paid')}
//               disabled
//             />
//             <label htmlFor="Paid" className="label">Paid</label>
//             <span className="locked">
//               <FontAwesomeIcon icon={faLock} />
//             </span>
//           </>
//         }

//       </div>
//     </div>
//   );

// };

// export default Foryoupaid;

import React, { useState, useEffect } from 'react';
import "../../../styles/creator/AllCampain/forYou/foryoupaidbar.css";
import Filter from "../../../../assets/creator/filter.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { makeApi } from '../../../../api/callApi.tsx';
import Paidpopup from "../../../../utils/Auth/paidPopup.jsx"


const Foryoupaid = ({ selectedTab, setSelectedTab }) => {
  const [isLocked, setIsLocked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);  // State to control popup visibility

  useEffect(() => {
    const socialMedia = async () => {
      try {
        const response = await makeApi('/api/get-my-social-media', "GET");
        const data = response.data.data[0];
        const followers = parseInt(data.follower.replace(/,/g, ''), 10);

        if (followers < 5000) {
          setIsLocked(true);
          setSelectedTab('barter');
        }
      } catch (error) {
        console.log(error);
      }
    };

    socialMedia();
  }, [setSelectedTab]);

  const handleLockedClick = () => {
    setShowPopup(true);  // Show the popup when the locked Paid tab is clicked
  };

  const handleClosePopup = () => {
    setShowPopup(false);  // Hide the popup when the Explore button is clicked
  };

  return (

    <div className="body">
      
      <div className='filter_bar_crator'>
        <div>Campaigns for You</div>
        {/* <div>
          <img src={Filter} alt="filter" />
        </div> */}
      </div>
      <div className="tabs" style={{ position: 'relative' }}>
        <input
          checked={selectedTab === 'Barter'}
          value="Barter"
          name="fav_language"
          id="Barter"
          type="radio"
          className="input"
          onChange={() => setSelectedTab('Barter')}
        />
        <label htmlFor="Barter" className="label">Barter</label>
        {!isLocked &&
          <>
            <input
              checked={selectedTab === 'Paid'}
              value="Paid"
              name="fav_language"
              id="Paid"
              type="radio"
              className="input"
              onChange={() => setSelectedTab('Paid')}
            />
            <label htmlFor="Paid" className="label">Paid</label>
          </>
        }
        {isLocked &&
          <>
            <input
              checked={selectedTab === 'Paid'}
              value="Paid"
              name="fav_language"
              id="Paid"
              type="radio"
              className="input"
              onClick={handleLockedClick}  // Handle click on the locked Paid tab
              // disabled
            />
            <label htmlFor="Paid" className="label">Paid</label>
            <span className="locked">
              <FontAwesomeIcon icon={faLock} />
            </span>
          </>
        }

      </div>

      {showPopup &&  <div 
        style={{
          position: 'fixed',
          zIndex: '10001',
          top: '-20px',
          left: '0',
          right: '0',
          bottom: '0',
      }}
      > <Paidpopup onClose={handleClosePopup} /> </div>} 
    </div>
  );
};

export default Foryoupaid;
