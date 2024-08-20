import React from 'react';

const DashboardCard = ({ count, title, icon }) => {
  return (
    <div className="col-md-3 dashboardcardsouter">
      <a href="#">
        <div className="row dashboardcards">
          <div className="col-sm-7">
            <h3>{count}</h3>
            <h4>{title}</h4>
          </div>
          <div className="col-sm-5">
            <i className={icon}></i><br /><br />
          </div>
        </div>
      </a>
    </div>
  );
};

export default DashboardCard;
