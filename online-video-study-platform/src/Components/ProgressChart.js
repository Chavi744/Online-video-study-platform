// ProgressChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const ProgressChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Student Progress',
        data: data.values,
        borderColor: '#0a8377',
        backgroundColor: 'rgba(10, 131, 119, 0.2)',
        fill: true,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default ProgressChart;
