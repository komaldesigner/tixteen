import React from 'react';
import DashboardContainer from './components/DashboardContainer.jsx';
import CampaignDetails from './components/CampaignDetails.jsx';
import InfluencerDetails from './components/InfluencerDetails.jsx';

function Mainindex() {
  return (
    <div className="App">
      <DashboardContainer />
      <div className="infludshgraph">
        <div className="row">
          <div className="col-md-4" style={{ margin: 'auto' }}>
            <div className="infldshgrphcntnr">
              <h4>Campaign Details</h4>
              <CampaignDetails />
            </div>
          </div>
          <div className="col-md-4" style={{ margin: 'auto' }}>
            <div className="infldshgrphcntnr">
              <h4>Influencer Details</h4>
              <InfluencerDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainindex;
