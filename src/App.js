import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import ManagerDashboard from './pages/ManagerDashboard';
import AssistantDashboard from './pages/AssistantDashboard';

const App = () => {
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || '');

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    setUserRole('');
  };

  const inventoryData = [
    { name: 'Item A', quantity: 10 },
    { name: 'Item B', quantity: 5 },
  ];

  return (
    <Router>
      <div>
        <h1>Inventory Management System</h1>
        {userRole ? (
          <>
            <h2>Welcome, {userRole}!</h2>
            <Switch>
              <Route path="/manager">
                <ManagerDashboard inventory={inventoryData} setInventory={setInventoryData} />
              </Route>
              <Route path="/assistant">
                <AssistantDashboard inventory={inventoryData} />
              </Route>
            </Switch>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Login setUserRole={setUserRole} />
        )}
      </div>
    </Router>
  );
};

export default App;
