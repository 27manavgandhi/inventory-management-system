import React, { useState } from 'react';

const InventoryAdd = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const handleAddItem = () => {
    const newItem = { name: itemName, quantity: parseInt(itemQuantity) };
    onAddItem(newItem);
    setItemName('');
    setItemQuantity('');
  };

  return (
    <div>
      <h3>Add Inventory Item</h3>
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
  );
};

export default InventoryAdd;
