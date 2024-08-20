// import React, { useEffect, useState } from 'react'
// import ReportSummary from './summary'
// import BackHEader from '../../headers/backeHeader'
// import ForyouCart from '../AllCampain/foryousection/foryouCart'
// import Reportdasboard from './reportdasboard'
// import { makeApi } from '../../../api/callApi.tsx'
// import CardLoader from '../../../utils/cardLoader.jsx'
// import { Link } from 'react-router-dom'

// import insta_icon from "../../../assets/creator/insta-icon.png";
// import clock_image from "../../../assets/creator/clock_image.png";
// import Reportcard from './reportcard.jsx'

// const formatDate = (deadline) => {
//     const dateObj = new Date(deadline);
//     const day = dateObj.getDate().toString().padStart(2, '0');
//     const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
//     const year = dateObj.getFullYear().toString().slice(-2);
//     return `${day}/${month}/${year}`;
// };
// function MainReport() {
//     const [data, setData] = useState();
//     const [campaignList, setCampaignList] = useState([]);
//     const [loading, setLoading] = useState(false);
//     console.log("--------------------------------------")

//     const fetchAllCampaigns = async () => {
//         setLoading(true);
//         try {
//             const response = await makeApi('/v1/influencer/my-apply-campaigns?submition=no', 'GET');
//             console.log(response)

//             const SummaryData = await makeApi('/v1/influencer/get-apply-summary', 'GET');
//             setData(SummaryData?.data);
//             setCampaignList(response?.data.apply || []);
//         } catch (error) {
//             console.error('Error fetching campaigns:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchAllCampaigns();
//     }, []);
//     return (
//         <>
//             <BackHEader title={"Graph"} />
//             <Reportdasboard data={data} />
//             <div className='main_all_page_default_padding' >
//                 <ReportSummary data={data} />
//                 <div>
//                    <Reportcard/>
                        
//                 </div>
//             </div>
//         </>
//     )
// }

// export default MainReport


import React, { useEffect, useState } from 'react';
import ReportSummary from './summary';
import BackHEader from '../../headers/backeHeader';
import Reportdasboard from './reportdasboard';
import { makeApi } from '../../../api/callApi.tsx';
import Reportcard from './reportcard.jsx';
import MainLoader from '../../../utils/loader.jsx';

function MainReport() {
    const [data, setData] = useState();
    const [selectedStatus, setSelectedStatus] = useState('no'); // Default status
    const [loading, setLoading] = useState(false);

    const fetchSummaryData = async () => {
        setLoading(true);
        try {
            const SummaryData = await makeApi('/v1/influencer/get-apply-summary', 'GET');
            setData(SummaryData?.data);
        } catch (error) {
            console.error('Error fetching summary data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSummaryData();
    }, []);

    return (
        <>
        {loading && <div className='loaderbgcolor' ><MainLoader/></div>}
            {/* <BackHEader title={"Graph"} /> */}
            <Reportdasboard data={data} />
            <div className='main_all_page_default_padding'>
                <ReportSummary data={data} setSelectedStatus={setSelectedStatus} />
                <div>
                    <Reportcard selectedStatus={selectedStatus} />
                </div>
            </div>
        </>
    );
}

export default MainReport;
