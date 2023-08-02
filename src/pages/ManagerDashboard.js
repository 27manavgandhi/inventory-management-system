// src/pages/ManagerDashboard.js

import React, { useState } from 'react';
import InventoryChart from '../components/Inventory/InventoryChart';

const ManagerDashboard = ({ inventory, setInventory }) => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const handleAddItem = () => {
    // Add item to the inventory
    const newItem = { name: itemName, quantity: parseInt(itemQuantity) };
    setInventory([...inventory, newItem]);
    setItemName('');
    setItemQuantity('');
  };

  const handleRemoveItem = (index) => {
    // Remove item from the inventory
    const updatedInventory = [...inventory];
    updatedInventory.splice(index, 1);
    setInventory(updatedInventory);
  };

  return (
    <div>
      <h2>Manager Dashboard</h2>
      
      <div>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
        />
        <input
          type="number"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
          placeholder="Item Quantity"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul>
        {inventory.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity}{' '}
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <InventoryChart inventory={inventory} />
    </div>
    
  );
};

export default ManagerDashboard;
