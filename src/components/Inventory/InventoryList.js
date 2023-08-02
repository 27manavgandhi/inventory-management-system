import React from 'react';

const InventoryList = ({ inventory, onRemoveItem }) => {
  return (
    <div>
      <h3>Inventory List</h3>
      <ul>
        {inventory.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity}{' '}
            <button onClick={() => onRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
