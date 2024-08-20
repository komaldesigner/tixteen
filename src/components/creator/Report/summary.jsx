// import React from 'react'
// import active from "../../../assets/report/active.png"
// import cancelled from "../../../assets/report/cancelled.png"
// import Completed from "../../../assets/report/Completed.png"
// import Rejected from "../../../assets/report/Rejected.png"
// import "../../../styles/creator/report/summary.css"
// function ReportSummary({ data }) {
//     return (
//         <div className='report_summary_main_div' >
//             {/* active */}
//             <ReportSummaryData title={"Applied"} image={cancelled} number={data?.Totalapply} />
//             <ReportSummaryData title={"Active"} image={active} number={data?.TotalAccepted } />
//             <ReportSummaryData title={"Pending"} image={Rejected} number={data?.TotalPending}  />
//             <ReportSummaryData title={"Completed"} image={Completed} number={data?.Totalsubmition} />
//             <ReportSummaryData title={"Rejected"} image={Rejected} number={data?.TotalRejected}  />
//         </div>
//     )
// }

// export default ReportSummary
// function ReportSummaryData({ title, image, number }) {
//     return (
//         <div className='report_summary_data' >

//             <div className='bold_text report_summary_data_items '>
//                 <div>
//                     <img src={image} alt="" />
//                 </div>
//                 <div>
//                     {number}
//                 </div>
//                 <div className='' >
//                     {title}
//                 </div>

//             </div>
//         </div>
//     )
// }


import React from 'react';
import active from "../../../assets/report/active.png";
import cancelled from "../../../assets/report/cancelled.png";
import Completed from "../../../assets/report/Completed.png";
import Rejected from "../../../assets/report/Rejected.png";
import "../../../styles/creator/report/summary.css";

function ReportSummary({ data, setSelectedStatus }) {
    return (
        <div className='report_summary_main_div'>
            <ReportSummaryData title={"Applied"} image={cancelled} number={data?.TotalPending} onClick={() => setSelectedStatus('Pending')} />
            <ReportSummaryData title={"Active"} image={active} number={data?.TotalAccepted} onClick={() => setSelectedStatus('active')} />
            {/* <ReportSummaryData title={"Pending"} image={Rejected} number={data?.TotalPending} onClick={() => setSelectedStatus('Pending')} /> */}
            <ReportSummaryData title={"Completed"} image={Completed} number={data?.Totalsubmition} onClick={() => setSelectedStatus('completed')} />
            <ReportSummaryData title={"Rejected"} image={Rejected} number={data?.TotalRejected} onClick={() => setSelectedStatus('Rejected')} />
        </div>
    );
}

export default ReportSummary;

function ReportSummaryData({ title, image, number, onClick }) {
    return (
        <div className='report_summary_data' onClick={onClick}>
            <div className='bold_text report_summary_data_items'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    {number}
                </div>
                <div className=''>
                    {title}
                </div>
            </div>
        </div>
    );
}
