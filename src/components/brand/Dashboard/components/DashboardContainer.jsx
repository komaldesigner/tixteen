import React from 'react';
import DashboardCard from './DashboardCard.jsx';

const DashboardContainer = () => {
  // Simulated data fetching
  const totalPurchasedInfluencer = 5; 
  const activeCampaign = 3; 
  const influencerSummary = 10; 
  const activeSupportTicket = 2; 

  return (
    <div className="dashboardcontnr">
      <div className="dashboardcardscontnr">
        <div className="row">
          <DashboardCard
            count={totalPurchasedInfluencer}
            title="Total Purchased Influencer"
            icon="fas fa-chart-line"
          />
          <DashboardCard
            count={activeCampaign}
            title="Active Campaign"
            icon="fas fa-chart-line"
          />
          <DashboardCard
            count={influencerSummary}
            title="Influencer Summary"
            icon="fa fa-user"
          />
          <DashboardCard
            count={activeSupportTicket}
            title="Active Support Ticket"
            icon="fas fa-life-ring"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardContainer;
