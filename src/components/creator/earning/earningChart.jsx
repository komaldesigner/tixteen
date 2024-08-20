import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

// Create a mapping of month numbers to month names
const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

// const EarningsBarChart = ({ data }) => {
//     // Map the data to include month names
//     console.log("=-=-===",data)
//     const chartData =data.map((item) => ({
//         name: monthNames[item.month - 1], 
//         TotalEarning: item.totalPayment ? item.totalPayment : 0,
//         OnTheWay: item.totalPendingPayment ? item.totalPendingPayment : 0,
//     }));

//     return (
//         <div className='main_data_chart_div_earning'>
//             <ResponsiveContainer width="100%" height={400}>
//                 <BarChart
//                     height={300}
//                     data={chartData}
//                     margin={{
//                         top: 20, right: 30, left: 20, bottom: 5,
//                     }}
//                 >
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Bar dataKey="OnTheWay" barSize={20} fill="var(--dark-yellow-color)" radius={[20, 20, 0, 0]} />
//                     <Bar dataKey="TotalEarning" barSize={20} fill="var(--dark-gray-color)" radius={[20, 20, 0, 0]} />
//                 </BarChart>
//             </ResponsiveContainer>
//         </div>
//     );
// }


const EarningsBarChart = ({ data }) => {
    // Map the data to include month names
    const chartData = data.length
        ? data.map((item) => ({
            name: monthNames[item.month - 1], 
            TotalEarning: item.totalPayment ? item.totalPayment : 0,
            OnTheWay: item.totalPendingPayment ? item.totalPendingPayment : 0,
        }))
        : [{ name: '', TotalEarning: 0, OnTheWay: 0 }];

    return (
        <div className='main_data_chart_div_earning'>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    height={300}
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 1000]} />
                    <Tooltip />
                    <Bar dataKey="OnTheWay" barSize={20} fill="var(--dark-yellow-color)" radius={[20, 20, 0, 0]} />
                    <Bar dataKey="TotalEarning" barSize={20} fill="var(--dark-gray-color)" radius={[20, 20, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default EarningsBarChart;
