import React from 'react'
import "../../../styles/creator/report/reportdasboard.css"


function Reportdasboard({data}) {

    return (
        <div className='main_report_dasboard_div' >
            <div className='bold_text my_campigns_text_repot' >My Campaigns</div>
            <div className='main_report_dasboard_div_items' >
                {/* left */}
                <div className='main_report_dasboard_div_items_left' >
                    {/* top */}
                    <ReportdasboardItems title={"Ongoing"} number={data?.TotalAccepted} />
                    {/* bottom */}
                    {/* <ReportdasboardItems title={"Completion Time"} number={"48 hours"} /> */}
                </div>
                {/* right */}
                <div className='main_report_dasboard_div_items_right'>
                      {/* top */}
                    <ReportdasboardItems title={"Completed"} number={data?.Totalsubmition} />
                    {/* bottom */}
                    {/* <ReportdasboardItems title={"Cancelled"} number={3} /> */}
                </div>
            </div>
        </div>
    )
}

export default Reportdasboard

function ReportdasboardItems ({title,number}) {
    return (
        <div>
        <div className='text-warning bold_text'>{number}</div>
        <div>{title}</div>
    </div>
    )
}