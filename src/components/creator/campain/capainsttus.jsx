

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import BackHeader from '../../headers/backeHeader';
import { makeApi } from '../../../api/callApi.tsx';
import "../../../styles/creator/campain/StatusPage.css"; 
import BackHEader from '../../headers/backeHeader';

const StatusPage = ({ pagename, influencerId }) => {
  const [statuses, setStatuses] = useState([]);
  const { campaignId } = useParams();

  useEffect(() => {
    fetchStatusData();
  }, []);

  const fetchStatusData = async () => {
    try {
      const response = await makeApi(`/V1/influencer/my-apply-campaigns/campaign/${campaignId}`, "GET");
      const apply = response.data.apply;
      console.log("apply", apply);

      const fetchedStatuses = [
        { status: 'Waiting For Acceptance', date: formatDate(apply.opt_date), icon: 'https://tixteen.com/tixteenapp/influencer/assets/img/time-left_66165%201.png', active: true },
        { status: 'Request Accepted', date: formatDate(apply.accept_date), icon: 'https://tixteen.com/tixteenapp/influencer/assets/img/list_2191132%201.png', active: apply.influ_approval === 'Accepted' },
        { status: 'Upload Your Content', date: formatDate(apply.content_upload_date), icon: 'https://tixteen.com/tixteenapp/influencer/assets/img/upload_5972966.png', active: !!apply.content },
        { status: 'Content Approved', date: formatDate(apply.content_approved_date), icon: 'https://tixteen.com/tixteenapp/influencer/assets/img/done_7060893.png', active: apply.content_approved === 'Accepted' },
        { status: 'Campaign Completed', date: formatDate(apply.cam_complt_date), icon: 'https://tixteen.com/tixteenapp/influencer/assets/img/checked_709510.png', active: apply.submition === 'Completed' },
        { status: 'Payment', date: formatDate(apply.pay_scedule_date), icon: 'https://tixteen.com/tixteenapp/influencer/assets/img/pay_1570917.png', active: !!apply.transaction_id },
      ];
      setStatuses(fetchedStatuses);
    } catch (error) {
      console.error("Failed to fetch status data", error);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  const renderStatusBox = (status, index) => (
    <div className="statusbox" key={index}>
      <div className={status.active ? 'Ellipse9box1' : 'Ellipse9box'}>
        <div className={status.active ? 'Vline1' : 'Vline'}></div>
        <div className="Ellipse999">
          <img className="Ellipse9icon" src={`${status.icon}`} alt="" />
        </div>
      </div>
      {index !== statuses.length - 1 && <div className="Line32"></div>}
      <div>
        <div className="Ellipse9txt">{status.status}</div>
        <div className="Ellipse9time">{status.date}</div>
      </div>
    </div>
  );

  return (
    <div className="statusPage">
      <div className="project-btn project-btn2">
        <div className='w-100' >
          <Link to={`/verified/creator/campanes/list`} style={{ textDecoration: 'none' , color: 'black' }} >
        <BackHEader title={"Status"} />
          </Link>

          {/* <a href={pagename === 'p1' ? 'influencercampaign.php' : 'campaignreport.php'}>
            <img className="project-back-arrow" src="./assets/img/ybackicon.png" alt="" />
          </a> */}
        </div>
        {/* <div className="project-txt">Status</div> */}
        {/* <div></div> */}
      </div>

      <div className="statusBottom">
        {statuses.map((status, index) => renderStatusBox(status, index))}
      </div>
    </div>
  );
};

export default StatusPage;
