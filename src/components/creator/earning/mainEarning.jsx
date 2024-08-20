
import React, { useEffect, useState } from 'react';
import BackHEader from '../../headers/backeHeader';
import EariningSummary from './eariningSummary';
import EarningsBarChart from './earningChart';
import EarningSummaryCards from './Earningsummarycards.jsx';
import { makeApi } from '../../../api/callApi.tsx';
import MainLoader from '../../../utils/loader.jsx';

function MainEarning() {
  const [loading, setLoading] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2024);
  const [earningData, setEarningData] = useState([]);
  const [alldata, setAlldaa] = useState([]);
  console.log("earningData=-=-=-=-",earningData)
  
  const fetchAllCampaigns = async () => {
    setLoading(true);
    try {
      const response = await makeApi(`/v1/influencer/earning/${selectedYear}`, 'GET');
      setEarningData(response.data.monthlyData || []); // Ensure fallback to empty array if no data
      setAlldaa(response.data|| []);
    } catch (error) {
      console.error('Error fetching campaigns:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCampaigns();
  }, [selectedYear]);

  const handleYearChange = (event) => {
    setSelectedYear(Number(event.target.value)); // Ensure selectedYear is a number
  };
  return (
    <div className='mb-5 pb-5 mt-4'>
      {/* <BackHEader title={"Graph"} /> */}
      <div className='earining_summary_filter'>
        <div>Static</div>
        <div>
          <select 
            className='select_earining_options_dropdown p-1'
            value={selectedYear}
            onChange={handleYearChange}
          >
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
      </div>
      {loading ? (
        <div className='loaderbgcolor' >

          <MainLoader/>
        </div>
      ) : (
        <>
          <EarningsBarChart data={earningData} />
          <EariningSummary earningData={earningData} />
          <EarningSummaryCards data={alldata } />
        </>
      )}
    </div>
  );
}

export default MainEarning;
