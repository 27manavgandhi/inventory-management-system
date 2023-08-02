// src/pages/AssistantDashboard.js
import React, { useState } from 'react';
import InventoryChart from '../components/Inventory/InventoryChart';

const AssistantDashboard = ({ inventory }) => {
  return (
    <div>
      <h2>Assistant Dashboard</h2>
      <ul>
        {inventory.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <InventoryChart inventory={inventory} />
    </div>
  );
};

export default AssistantDashboard;
