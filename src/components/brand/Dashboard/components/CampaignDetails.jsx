

import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const CampaignDetails = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById('chartContainer').getContext('2d');

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Accepted', 'Pending', 'Rejected'],
        datasets: [{
          data: [7, 2, 1], // Dummy data
          backgroundColor: ['#fec601', '#e31e25', '#c7c7c7']
        }]
      }
    });

    return () => {
      chartRef.current.destroy();
    };
  }, []);

  return <canvas id="chartContainer" width="100%"></canvas>;
};

export default CampaignDetails;
