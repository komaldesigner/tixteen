
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const InfluencerDetails = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById('myChart2').getContext('2d');

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Balance', 'Used'],
        datasets: [{
          data: [8, 2], // Dummy data
          backgroundColor: ['#fec601', '#c7c7c7']
        }]
      }
    });

    return () => {
      chartRef.current.destroy();
    };
  }, []);

  return <canvas id="myChart2" width="100%"></canvas>;
};

export default InfluencerDetails;
