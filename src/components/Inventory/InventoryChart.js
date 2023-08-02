// src/components/Inventory/InventoryChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const InventoryChart = ({ inventory }) => {
  const data = {
    labels: inventory.map((item) => item.name),
    datasets: [
      {
        label: 'Inventory Quantity',
        data: inventory.map((item) => item.quantity),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h3>Inventory Quantity Chart</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default InventoryChart;
