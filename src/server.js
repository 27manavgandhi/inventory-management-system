const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let inventoryData = [
  { id: 1, name: 'Item A', quantity: 10 },
  { id: 2, name: 'Item B', quantity: 5 },
];

// Get all inventory items
app.get('/api/inventory', (req, res) => {
  res.json(inventoryData);
});

// Add a new inventory item
app.post('/api/inventory', (req, res) => {
  const newItem = req.body;
  newItem.id = inventoryData.length + 1;
  inventoryData.push(newItem);
  res.json(newItem);
});

// Update an existing inventory item
app.put('/api/inventory/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  inventoryData = inventoryData.map((item) => (item.id === id ? updatedItem : item));
  res.json(updatedItem);
});

// Delete an inventory item
app.delete('/api/inventory/:id', (req, res) => {
  const id = parseInt(req.params.id);
  inventoryData = inventoryData.filter((item) => item.id !== id);
  res.json({ message: 'Item deleted successfully' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
