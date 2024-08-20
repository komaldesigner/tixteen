import React, { useState } from 'react';
import "../../../styles/creator/AllCampain/forYou/mainforyou.css";
import Foryoupaid from './foryoupaid';
import ForyouCart from './foryouCart';

function Foryou() {
  const [selectedTab, setSelectedTab] = useState('Barter');

  return (
    <div>
      {/* top bar */}
      <div>
        <Foryoupaid selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <ForyouCart selectedTab={selectedTab} />
      </div>
    </div>
  );
}

export default Foryou;
