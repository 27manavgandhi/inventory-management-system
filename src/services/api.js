// In this file, you can define functions to interact with your backend API.
// For example, I'm useing mock data since we don't have a real backend.

// Mock data for inventory
const mockInventory = [
    { name: 'Item A', quantity: 10 },
    { name: 'Item B', quantity: 5 },
  ];
  
  // Function to fetch inventory data (this is just a mock implementation)
  export const fetchInventory = () => {
    return new Promise((resolve, reject) => {
      // Simulate an API call delay with setTimeout
      setTimeout(() => {
        resolve(mockInventory);
      }, 500);
    });
  };
  
  // Function to add an item to the inventory (this is just a mock implementation)
  export const addItemToInventory = (item) => {
    return new Promise((resolve, reject) => {
      // Simulate an API call delay with setTimeout
      setTimeout(() => {
        mockInventory.push(item);
        resolve(item);
      }, 500);
    });
  };
  
  // Function to remove an item from the inventory (this is just a mock implementation)
  export const removeItemFromInventory = (index) => {
    return new Promise((resolve, reject) => {
      // Simulate an API call delay with setTimeout
      setTimeout(() => {
        const removedItem = mockInventory.splice(index, 1);
        resolve(removedItem);
      }, 500);
    });
  };
  