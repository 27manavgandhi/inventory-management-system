import React from 'react';

const Dashboard = ({ userRole, handleLogout }) => {
  return (
    <div>
      <h2>Welcome, {userRole}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
